import React, { Component } from 'react'
import { Card, Grid, Header, Loader, Segment } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from "meteor/meteor";
import { Drivers } from '../../api/driver/Driver';
import { Review } from '../../api/Review/Review';
import Driver from '../components/Driver';

//design for marker
const Marker = ({ text }) => (
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
    }}>
      {text}
    </div>
);

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

const renderMarkers = (map, maps) => {
  // use map and maps objects
};

class GoogleMaps extends Component {

  // onClick event for markers
  _onChildClick = (key, childProps) => {
    alert("You clicked the marker, stay tuned for updates")
  };

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  //render map as <GoogleMapReact> and markers as <Marker>
  renderPage() {
    return (

        <Grid columns={2} style={{ height: '90vh', width: '100vw', backgroundColor: 'green' }}>
          <Grid.Column>

            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDxXxFiIPFfY3-PdFOuEa9gR4hjICcpwZA' }}
                defaultCenter={{ lat: 21.298872, lng: -157.817204 }}
                defaultZoom={17}
                options={createMapOptions}
                onChildClick={this._onChildClick}
                yesIWantToUseGoogleMapApiInternals={true}
                onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            >

              <Marker
                  lat={21.298872}
                  lng={-157.817204}
                  text={'Pick-Up Location'}
              />
            </GoogleMapReact>

          </Grid.Column>

          <Grid.Column>
            <Grid rows={2} className='ui center aligned two row grid' style={{ height: '90vh' }}>

              <Grid.Row>
                <Header as='h1' style={{ textAlign: 'center' }}>
                  Click the markers to see drivers and riders at each stop
                </Header>
                <Segment style={{overflow: 'auto', maxHeight: '50vh' }}>

                <Card.Group>
                  {this.props.drivers.map((driver, index) => <Driver key={index} driver={driver}
                                                                     Drivers={Drivers}
                                                                     reviews={this.props.reviews.filter(review => (review.driverId === driver._id))}/>)}
                </Card.Group>
                </Segment>
              </Grid.Row>

              <Grid.Row>
                <Header as='h1' style={{ textAlign: 'center' }}>
                  Click the markers to see riders and riders at each stop
                </Header>
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