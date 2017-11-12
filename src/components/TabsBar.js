import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Slider from 'material-ui/Slider';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';



const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const CardExampleWithAvatar = () => (
  <Card>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        <Slider defaultValue={0.8} />
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        <Slider defaultValue={0.6} />
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        <Slider defaultValue={0.7} />
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        <Slider defaultValue={0.9} />


    </CardText>

    <BarChart width={280} height={90} data={data}>
        <Bar dataKey='uv' fill='#8884d8'/>
    </BarChart>

    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);




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
        };
    }

    handleChange = (value) => {
    this.setState({
    slideIndex: value,
    });
    };

  render() {
    return (
      <div>
      <BarChart width={280} height={90} data={data}>
          <Bar dataKey='uv' fill='#8884d8'/>
      </BarChart>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Tab One" value={0} />
          <Tab label="Tab Two" value={1} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div style={styles.slide}>
            <Card>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    <Slider defaultValue={0.8} />
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    <Slider defaultValue={0.6} />
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    <Slider defaultValue={0.7} />
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    <Slider defaultValue={0.9} />


                </CardText>

                <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions>
            </Card>
          </div>
          <div style={styles.slide}>
              <Map google={this.props.google} zoom={14}>

              <Marker onClick={this.onMarkerClick}
                      name={'Current location'} />

              <InfoWindow onClose={this.onInfoWindowClose}>
                  <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                  </div>
              </InfoWindow>
            </Map>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export class MapContainer extends Component {
render() {
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export class GoogleApiWrapper({
  apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
})(MapContainer)
