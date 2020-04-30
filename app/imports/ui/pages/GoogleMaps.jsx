import React, { Component } from 'react'
import { Grid, Header, Loader } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

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
function createMapOptions (maps) {
  return {
    panControl: true,
    mapTypeControl: false,
    scrollwheel: true,
    onClick: true,
    styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 1.0 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
  }
}

const renderMarkers = (map, maps) => {
  // use map and maps objects
};

export default class SimpleMap extends Component {

  // onClick event for markers
  _onChildClick = (key, childProps) => {
    alert('Clicked Marker');
  };


  //render map as <GoogleMapReact> and markers as <Marker>
  render() {
    return (



        <Grid columns={2} style={{ height: '90vh', width: '100vw', backgroundColor: 'green' }}>
          <Grid.Column>

            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDxXxFiIPFfY3-PdFOuEa9gR4hjICcpwZA' }}
                defaultCenter={{ lat: 21.298872, lng: -157.817204 }}
                defaultZoom={17}
                options={createMapOptions}
                onChildClick={this._onChildClick}
                yesIWantToUseGoogleMapApiInternals={ true }
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
              </Grid.Row>

              <Grid.Row>
                <Header as='h1' style={{ textAlign: 'center' }}>
                  Click the markers to see drivers and riders at each stop
                </Header>
              </Grid.Row>
            </Grid>
          </Grid.Column>

        </Grid>
    );
  }

}

