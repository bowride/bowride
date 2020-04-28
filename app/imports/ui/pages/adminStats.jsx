
/**----------------------------------------------------------------- */
import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Card, Container, Loader, Divider, Statistic, Button } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Driver from '../components/Driver';
import { Drivers } from '../../api/driver/Driver';
import { Review } from '../../api/Review/Review';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class adminStats extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <Container>
          <Container className="all_container_padding" id="stats">
              <Statistic.Group textAlign='center' size='huge' color='green' widths={2}>
                  <Statistic>
                      <Statistic.Value>
                          {this.props.drivers.map((driver,index) => <Driver key={index} driver={driver} />).length}
                      </Statistic.Value>
                      <Statistic.Label>Drivers</Statistic.Label>
                  </Statistic>
                  <Statistic>
                  <Statistic.Value>
                          {this.props.reviews.map((review,index) => <Driver key={index} review={review} />).length}
                      </Statistic.Value>
                      <Statistic.Label>Rewiews submitted</Statistic.Label>
                  </Statistic>
              </Statistic.Group>
            </Container>
            <Divider/>
            <Container textAlign='center'>
              <Button size = 'large'>View all Profiles</Button>
              <Button size = 'large'>View all Rides</Button>
              <Button size='large'>more controls</Button>
            </Container>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
adminStats.propTypes = {
  drivers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Drivers');
  const subscription2 = Meteor.subscribe('Reviews');
  return {
    drivers: Drivers.find({}).fetch(),
    reviews: Review.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(adminStats);
