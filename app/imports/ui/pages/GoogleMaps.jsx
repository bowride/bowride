import React, { Component } from 'react'
import { Card, Grid, Header, Loader, Segment } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from "meteor/meteor";
import { Drivers } from '../../api/driver/Driver';
import { Review } from '../../api/Review/Review';
import Driver from '../components/Driver';

// map options/design map
function createMapOptions(maps) {
  return {
    panControl: true,
    mapTypeControl: false,
    scrollwheel: true,
    onClick: false,
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


class GoogleMaps extends Component {



  // onClick event for markers
  _onChildClick = (key, childProps) => {
    alert("You clicked the marker: "+ childProps.text)

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
                text={"Manoa \n Drivers:" + _.where(this.props.drivers, {destination: "Manoa"}).length}
            />
              <Marker1
                  lat={21.299211}
                  lng={-157.815593}
                  text={"Ala Moana \n Drivers:" + _.where(this.props.drivers, {destination: "Ala Moana"}).length}
              />
              <Marker2
                  lat={21.296022}
                  lng={-157.819060}
                  text={"Kaimuki\n Drivers:" + _.where(this.props.drivers, {destination: "Kaimuki"}).length}
              />
              <Marker3
                  lat={21.298799}
                  lng={-157.817484}
                  text={"Palolo\n Drivers:" + _.where(this.props.drivers, {destination: "Palolo"}).length}
              />
              <Marker4
                  lat={21.300482}
                  lng={-157.820724}
                  text={"Kahala\n Drivers:" + _.where(this.props.drivers, {destination: "Kahala"}).length}
              />

            </GoogleMapReact>

          </Grid.Column>

          <Grid.Column>
            <Grid rows={2} className='ui center aligned two row grid' style={{ height: '90vh' }}>

              <Grid.Row >

                <Grid rows={1} className='ui center aligned grid' style={{ height: '40vh' }}>

                  <Grid.Row>
                    <Header as='h1' style={{ textAlign: 'center' }}>
                      Click the markers to see drivers and riders at each stop
                    </Header>
                  </Grid.Row>

                  <Grid.Row>
                    <Segment style={{ overflow: 'auto', maxHeight: '50vh' }}>
                      <Card.Group>
                        {this.props.drivers.map((driver, index) =>
                            <Driver
                                key={index}
                                driver={driver}
                                Drivers={Drivers}
                                reviews={this.props.reviews.filter(review => (review.driverId === driver._id))}
                            />)
                        })}
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