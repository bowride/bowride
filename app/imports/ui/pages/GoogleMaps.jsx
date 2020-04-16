import React from 'react';
import {} from 'semantic-ui-react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';

/** A simple static component to render some text for the landing page. */
class GoogleMaps extends React.Component {
  render() {
    return (
        <div style={{ width: '100vw', height: '100vw' }}>
          <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places' +
          '&key=AIzaSyD6AhfyRi60VNPVbmub-NwQvpVZQ1RCfHY'}
                      loadingElement={<div style={{ height: `100%` }}/>}
                      containerElement={<div style={{ height: `100%` }}/>}
                      mapElement={<div style={{ height: `100%` }}/>}
          />
        </div>
    );
  }
}

function Map() {
  return <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 21.297274, lng: -157.817359 }}
  />;
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default GoogleMaps;