import React from 'react';
import {Loader} from 'semantic-ui-react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';


/** A simple static component to render some text for the landing page. */
class GoogleMaps extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <div className="ui container" style={{ width: '70vw', height: '70vh', margin:'50px' }}>
          <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCeFS8T27RlCxMzV641cxQmBLh0nDo4fIA'}
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
      defaultZoom={17}
      defaultCenter={{lat:21.297274,lng:-157.817359} }
  />;
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default GoogleMaps;