import React, { Component } from 'react'
import { Card, Grid, Header, Loader, Segment } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from "meteor/meteor";
import { Drivers } from '../../api/driver/Driver';
import { Review } from '../../api/Review/Review';
import { Markers } from '../../api/marker/Marker';
import Driver from '../components/Driver';
import Marker from '../components/Marker';



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
                yesIWantToUseGoogleMapApiInternals={true}
                onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            >

              <Markers
                  {this.props.markers.map((marker, index) => <Marker key={index} marker={marker}
                                                                     Markers={Markers}
                                                                    />)}
              />
            </GoogleMapReact>

          </Grid.Column>

          <Grid.Column>
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
  markers: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Drivers');
  const subscription2 = Meteor.subscribe('Reviews');
  const subscription3 = Meteor.subscribe('Markers');
  return {
    drivers: Drivers.find({}).fetch(),
    reviews: Review.find({}).fetch(),
    markers: Markers.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready() && subscription3.ready(),
  };
})(GoogleMaps);