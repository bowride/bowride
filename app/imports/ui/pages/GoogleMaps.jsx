import React, { Component } from 'react'
import { Card, Grid, Header, Loader, Segment } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from "meteor/meteor";
import { Drivers } from '../../api/driver/Driver';
import { Review } from '../../api/Review/Review';
import Driver from '../components/Driver';
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown';
// map options/design map
function createMapOptions(maps) {
  return {
    panControl: true,
    mapTypeControl: false,
    scrollwheel: true,
    onClick: true,
    styles: [{ stylers: [{ 'saturation': 100 }, { 'gamma': 1.0 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
  }
}


const Marker = ({text}) => (
    <div style={{
      color: 'white',
      background: 'red',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)'
    }}> {text}
    </div>
);
const Marker1 = ({text}) => (
    <div style={{
      color: 'white',
      background: 'blue',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)'
    }}> {text}
    </div>
);
const Marker2 = ({text}) => (
    <div style={{
      color: 'white',
      background: 'purple',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)'
    }}> {text}
    </div>
);
const Marker3 = ({text}) => (
    <div style={{
      color: 'white',
      background: 'green',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)'
    }}> {text}
    </div>
);
const Marker4 = ({text}) => (
    <div style={{
      color: 'white',
      background: 'orange',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)'
    }}> {text}
    </div>
);

const dropDownOptions = [
  {
    key: 'UH Campus',
    text: 'UH Campus',
    value: 'UH Campus',
  },
  {
    key: 'Manoa',
    text: 'Manoa',
    value: 'Manoa',
  },
  {
    key: 'Kaimuki',
    text: 'Kaimuki',
    value: 'Kaimuki',
  },
  {
    key: 'Palolo',
    text: 'Palolo',
    value: 'Palolo',
  },
  {
    key: 'Ala Moana',
    text: 'Ala Moana',
    value: 'Ala Moana',
  },
  {
    key: 'Kahala',
    text: 'Kahala',
    value: 'Kahala',
  },
]

class GoogleMaps extends Component {

  // onClick event for markers
  _onChildClick = (key, childProps) => {
    alert("You clicked the marker: "+ key)
  };

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  //render map as <GoogleMapReact> and markers as <Marker>
  renderPage() {
    return (

        <Grid columns={2} style={{
          height: '90vh',
          width: '100vw',
          backgroundColor: 'green',
          paddingLeft: '10px',
          paddingRight: '10px'
        }}>
          <Grid.Column>

            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDxXxFiIPFfY3-PdFOuEa9gR4hjICcpwZA' }}
                defaultCenter={{ lat: 21.298872, lng: -157.817204 }}
                defaultZoom={17}
                options={createMapOptions}
                onChildClick={this._onChildClick}
            >

              <Marker
                lat={21.301730}
                lng={ -157.814078}
                text={"abc"}
            />
              <Marker1
                  lat={21.299211}
                  lng={-157.815593}
                  text={"123"}
              />
              <Marker2
                  lat={21.296022}
                  lng={-157.819060}
                  text={"321"}
              />
              <Marker3
                  lat={21.298799}
                  lng={-157.817484}
                  text={"1b3"}
              />
              <Marker4
                  lat={21.300482}
                  lng={-157.820724}
                  text={"1c4"}
              />

            </GoogleMapReact>

          </Grid.Column>

          <Grid.Column>
            <Dropdown
                  style={{fontSize:'25px'}}
                  placeholder='Select Destination'
                  fluid
                  selection
                  options={dropDownOptions}
              />


            <Grid rows={2} className='ui center aligned two row grid' style={{ height: '90vh' }}>

              <Grid.Row>

                <Grid rows={2} className='ui center aligned two row grid' style={{ height: '40vh' }}>

                  <Grid.Row>
                    <Header as='h1' style={{ textAlign: 'center' }}>
                      Click the markers to see drivers and riders at each stop
                    </Header>
                  </Grid.Row>

                  <Grid.Row>
                    <Segment style={{ overflow: 'auto', maxHeight: '50vh' }}>
                      <Card.Group>
                        {this.props.drivers.map((driver, index) => <Driver key={index} driver={driver}
                                                                           Drivers={Drivers}
                                                                           reviews={this.props.reviews.filter(review => (review.driverId === driver._id))}/>)}
                      </Card.Group>
                    </Segment>
                  </Grid.Row>
                </Grid>
              </Grid.Row>

              <Grid.Row>
                <Grid rows={2} className='ui center aligned two row grid' style={{ height: '40vh' }}>

                  <Grid.Row>
                    <Header as='h1' style={{ textAlign: 'center' }}>
                      Click the markers to see drivers and riders at each stop
                    </Header>
                  </Grid.Row>

                  <Grid.Row>
                    <Segment style={{ overflow: 'auto', maxHeight: '50vh' }}>
                      <Card.Group>
                        {this.props.drivers.map((driver, index) => <Driver key={index} driver={driver}
                                                                           Drivers={Drivers}
                                                                           reviews={this.props.reviews.filter(review => (review.driverId === driver._id))}/>)}
                      </Card.Group>
                    </Segment>
                  </Grid.Row>
                </Grid>
              </Grid.Row>
            </Grid>
          </Grid.Column>

        </Grid>
    );
  }

}

GoogleMaps.propTypes = {
  drivers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Drivers');
  const subscription2 = Meteor.subscribe('Reviews');
  return {
    drivers: Drivers.find({}).fetch(),
    reviews: Review.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(GoogleMaps);