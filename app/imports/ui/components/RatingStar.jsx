import React from 'react';
import { Rating } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class RatingStar extends React.Component {
  render() {
    return (
        <Rating icon='star' defaultRating={0} maxRating={5} />
    );
  }
}

/** Require a document to be passed to this component. */
RatingStar.propTypes = {
  review: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(RatingStar);
