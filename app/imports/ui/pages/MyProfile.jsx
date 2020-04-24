import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Drivers } from '../../api/driver/Driver';
import Driver from '../components/Driver';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class MyProfile extends React.Component {



  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  /*render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }*/

  /** Render the page once subscriptions have been received. */
  render() {
    return (
        <Container>
          <Header as="h2" textAlign="center" inverted>My Profile</Header>
          <Card.Group>
            {this.props.drivers.map((driver, index) => <Driver
                key={index}
                driver={Driver}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
MyProfile.propTypes = {
  drivers: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Profile');
  return {
    drivers: Drivers.find({}).fetch(),
    ready: subscription.ready(),
  };
})(MyProfile);