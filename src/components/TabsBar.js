import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Pie, PieChart, Radar, RadarChart, PolarGrid, Legend,
         PolarAngleAxis, PolarRadiusAxis, LineChart, Line} from 'recharts';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import CircularProgress from 'material-ui/CircularProgress';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class TabsBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            slideIndex: 0,
            consumoCarro: []
        };
    }

    componentDidMount() {
    axios.get(`https://caranalitics.mybluemix.net/consumo`)
      .then(res => {
        const consumoCarro = res.data.data.children.map(obj => obj.data);
        this.setState({ consumoCarro });
      });
    }

    handleChange = (value) => {
    this.setState({
    slideIndex: value,
    });
    };

  render() {
    return (
      <div>

    <LineChart width={300} height={150} data={this.state.consumoCarro}
        margin={{top: 20, right: 30, left: 20, bottom: 5}}>

     <CartesianGrid strokeDasharray="3 3"/>
     <Tooltip/>
     <XAxis dataKey="name"/>
     <YAxis/>
     <CartesianGrid strokeDasharray="3 3"/>
     <Legend />
     <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
     <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>

        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Carro" value={0} />
          <Tab label="Parceiros" value={1} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div style={styles.slide}>
            <Card>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                    Óleo
                    <Slider defaultValue={0.8} />
                    Água
                    <Slider defaultValue={0.6} />
                    Bateria
                    <Slider defaultValue={0.7} />
                    Freio
                    <Slider defaultValue={0.9} />

                    <Pie data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
                </CardText>
            </Card>
            <Card>
                <CardText>
                <div>
                  Pressão nos Pneus
                    <div style={ { padding: '50px 20px 0 20px;', float:'left', position : 'relative', width: '100px'} }>
                        <CircularProgress
                            mode="determinate"
                            value={75}
                            size={70}
                            thickness={5}
                        />
                        Dianteiro E.
                    </div>
                    <div style={ { padding: '50px 20px 0 20px;', float:'left', position : 'relative', width: '100px' } }>
                        <CircularProgress
                            mode="determinate"
                            value={75}
                            size={70}
                            thickness={5}
                        />
                        Dianteiro D.
                    </div>
                    <div style={ { padding: '50px 20px 0 20px;', float:'left', position : 'relative', width: '100px' } }>
                        <CircularProgress
                            mode="determinate"
                            value={75}
                            size={70}
                            thickness={5}
                        />
                        Traseiro D.
                    </div>
                    <div style={ { padding: '50px 20px 0 20px;', float:'left', position : 'relative', width: '100px' } }>
                        <CircularProgress
                            mode="determinate"
                            value={75}
                            size={70}
                            thickness={5}
                        />
                        Traseiro E.
                    </div>
                </div>


                </CardText>
            </Card>
          </div>
          <div style={styles.slide}>

          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />

          </div>
        </SwipeableViews>
      </div>
    );
  }
}
