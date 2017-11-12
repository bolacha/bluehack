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
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
    <Marker position={{ lat: -37.397, lng: 140.644 }} />
    <Marker position={{ lat: -39.397, lng: 130.644 }} />
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

      <BarChart width={400} height={80} data={[
        {name: 'Page A', pv: 2400, amt: 2400},
        {name: 'Page B', pv: 1398, amt: 2210},
        {name: 'Page C', pv: 9800, amt: 2290},
        {name: 'Page D', pv: 3908, amt: 2000},
        {name: 'Page E', pv: 4800, amt: 2181},
        {name: 'Page F', pv: 3800, amt: 2500},
        {name: 'Page G', pv: 4300, amt: 2100},
        {name: 'Page C', pv: 9800, amt: 2290},
        {name: 'Page D', pv: 3908, amt: 2000},
        {name: 'Page E', pv: 4800, amt: 2181},
        {name: 'Page F', pv: 3800, amt: 2500},
        
  ]}
              margin={{top: 20, right: 30, left: 20, bottom: 5}}>




         <Legend />
         <Bar dataKey="pv" stackId="a" fill="#8884d8" />
         <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>

        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Status" value={0} />
          <Tab label="Dealers" value={1} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div style={styles.slide}>
            <Card>
                <CardText>
                    Óleo
                    <Slider defaultValue={0.8} />
                    Água
                    <Slider defaultValue={0.6} />
                    Bateria
                    <Slider defaultValue={0.7} />
                    Freio
                    <Slider defaultValue={0.9} />

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
            containerElement={<div style={{ height: `500px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />

          </div>
        </SwipeableViews>
      </div>
    );
  }
}
