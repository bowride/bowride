import React, {Component} from 'react'
import { Grid, Header, Loader } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';


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

export default class SimpleMap extends Component{

  render() {
    return (

        <Grid columns={2} style={{height: '90vh', width: '100vw', backgroundColor:'green'}}>

          <Grid.Column>

        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDxXxFiIPFfY3-PdFOuEa9gR4hjICcpwZA'}}
            defaultCenter={{lat: 21.298872, lng: -157.817204}}
            defaultZoom={ 17 }
        >
          <Marker
              lat={21.298872}
              lng={-157.817204}
              text={'Pick-Up Location'}
          />
        </GoogleMapReact>

          </Grid.Column>

          <Grid.Column>

            <Header as='h1' style={{textAlign:'center'}}>
              Click the markers to see drivers and riders at each stop
            </Header>

          </Grid.Column>

        </Grid>
    );
  }

}

