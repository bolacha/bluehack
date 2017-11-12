import scipy.io
import numpy as np

badCases={}
goodCases={}

for i in range(11):
    badCase = scipy.io.loadmat('../datasets/hs_gear_1_fault/case1_'+str(i+1)+'.mat')['gs']
    badCases.update({i:badCase})

for i in range(7):
    goodCase = scipy.io.loadmat('../datasets/hs_gear_2_3_good/case2_'+str(i+1)+'.mat')['gs']
    goodCases.update({i:goodCase})

badRawData = []
goodRawData = []

for i in range(11):
    for j in range(50):
        badRawData.append(badCases[i][j*10000:(j+1)*10000])

for i in range(7):
    for j in range(50):
        goodRawData.append(goodCases[i][j*10000:(j+1)*10000])

badFfts = []
goodFfts = []

for i in range(len(badRawData)):
    badFfts.append(np.real(np.fft.fft(badRawData[i],axis=0).transpose()[0]))

for i in range(len(goodRawData)):
    goodFfts.append(np.real(np.fft.fft(goodRawData[i],axis=0).transpose()[0]))

ffts = badFfts + goodFfts

from sklearn.decomposition import PCA
pca = PCA(n_components=20)
pca.fit(ffts)

dataSet=[]

for i in range(len(badFfts)):
    dataSet.append(np.append(pca.transform(badFfts[i].reshape(1,-1)),0))

for i in range(len(goodFfts)):
    dataSet.append(np.append(pca.transform(goodFfts[i].reshape(1,-1)),1))

dataMatrix = np.matrix(dataSet)
dataMins = dataMatrix.min(0)
dataMaxs = dataMatrix.max(0)

for i in range(len(dataSet)):
    for j in range(len(dataSet[0])-1):
        dataSet[i][j] = ( dataSet[i][j] - dataMins[0,j] ) / ( dataMaxs[0,j] - dataMins[0,j] )

trainingSet = dataSet[1:-1]
testSet = [dataSet[0][:-1],dataSet[-1][:-1]]

import csv

with open('engineDataset.csv', 'w') as train:
    wr = csv.writer(train)
    wr.writerows(trainingSet)

with open('engineTestSet.csv', 'w') as test:
    wr = csv.writer(test)
    wr.writerows(testSet)
