import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

//design for marker
const Markers = ({text}) => (
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

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class MarkerSetup extends React.Component {

  render() {
    return (
        <Markers
            lat={this.props.markers.lat}
            lng={this.props.markers.lng}
            text={this.props.markers.text}
        />
    );
  }
}

/** Require a document to be passed to this component. */
MarkerSetup.propTypes = {
  markers: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(MarkerSetup);
