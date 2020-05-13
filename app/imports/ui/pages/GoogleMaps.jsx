import React, { Component } from 'react'
import { Card, Container, Grid, Header, Loader, Segment } from 'semantic-ui-react';
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
const Marker5 = ({text}) => (
    <div style={{
      color: 'white',
      background: 'gray',
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
const Marker6 = ({text}) => (
    <div style={{
      color: 'white',
      background: 'teal',
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
    alert("This is the pick up location for "+ childProps.id + "\n"
    + "There is currently " + childProps.numDrivers + " driver(s).")

  };

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  //render map as <GoogleMapReact> and markers as <Marker>
  renderPage() {
    return (

        <Container  style={{
          height: '90vh',
          width: '100vw',
          aligned:'center',
          backgroundColor: '#e2e2e2',
          paddingTop:'10px',
          paddingBottom:'10px'
        }}>
          <Header style={{fontSize:'25px', textAlign:'center'}}>Click Markers For More details</Header>

          <Container  style={{
            height: '80vh',
            width: '80vw',
            aligned:'center',
            paddingBottom:'30px'
          }}>

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
                numDrivers={_.where(this.props.drivers, {destination: "Manoa"}).length}
                id={"Manoa"}
            />
              <Marker1
                  lat={21.299211}
                  lng={-157.815593}
                  text={"Ala Moana \n Drivers:" + _.where(this.props.drivers, {destination: "Ala Moana"}).length}
                  numDrivers={_.where(this.props.drivers, {destination: "Ala Moana"}).length}
                  id={"Ala Moana"}
              />
              <Marker2
                  lat={21.296022}
                  lng={-157.819060}
                  text={"Kaimuki\n Drivers:" + _.where(this.props.drivers, {destination: "Kaimuki"}).length}
                  numDrivers={_.where(this.props.drivers, {destination: "Kaimuki"}).length}
                  id={"Kaimuki"}
              />
              <Marker3
                  lat={21.298799}
                  lng={-157.817484}
                  text={"Palolo\n Drivers:" + _.where(this.props.drivers, {destination: "Palolo"}).length}
                  numDrivers={_.where(this.props.drivers, {destination: "Palolo"}).length}
                  id={"Palolo"}
              />
              <Marker4
                  lat={21.300482}
                  lng={-157.820724}
                  text={"Kahala\n Drivers:" + _.where(this.props.drivers, {destination: "Kahala"}).length}
                  numDrivers={_.where(this.props.drivers, {destination: "Kahala"}).length}
                  id={"Kahala"}
              />
              <Marker5
                  lat={21.298072}
                  lng={-157.820241}
                  text={"Waikiki\n Drivers:" + _.where(this.props.drivers, {destination: "Waikiki"}).length}
                  numDrivers={_.where(this.props.drivers, {destination: "Waikiki"}).length}
                  id={"Waikiki"}
              />
              <Marker6
                  lat={21.297472}
                  lng={-157.815428}
                  text={"Kapiolani\n Drivers:" + _.where(this.props.drivers, {destination: "Kapiolani"}).length}
                  numDrivers={_.where(this.props.drivers, {destination: "Kapiolani"}).length}
                  id={"Kapiolani"}
              />

            </GoogleMapReact>
          </Container>
        </Container>
    );
  }

}

GoogleMaps.propTypes = {
  drivers: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Drivers');
  return {
    drivers: Drivers.find({}).fetch(),
    ready: subscription.ready()
  };
})(GoogleMaps);