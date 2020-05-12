import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Container, Header, Loader, Segment, Icon, Image } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Driver from '../components/Driver';
import { Drivers } from '../../api/driver/Driver';
import { Review } from '../../api/Review/Review';
import { Link } from 'react-router-dom';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class MyProfile extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <Container>
          <Segment raised textAlign='center' style={{ padding: '1.8em 0em' , minHeight: '270', backgroundColor: 'green'}} vertical>
          <Icon.Group size='large'>
            <Image
              src="/images/profile_picture.png"
              size='small' 
              circular
              centered
              verticalAlign='bottom'
              style={{
                  marginBottom: 0,
                  marginTop: '1.8em'
              }}
            />
            <Icon link corner className='ui huge white pencil alternate'>
              <Link to={`/edit/${this.props.drivers._id}`}>Edit</Link>
            </Icon>
          </Icon.Group>
          </Segment>
          <Segment textAlign="left" style={{ padding: '0em 0em', minHeight: 500 }} vertical>
            <Card.Group doubling itemsPerRow={1}>
              {this.props.drivers.map((driver, index) => <Driver key={index} driver={driver}
                                                                    Drivers={Drivers}
                          reviews={this.props.reviews.filter(review => (review.driverId === driver._id))}/>)}
            </Card.Group>
          </Segment>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
MyProfile.propTypes = {
  drivers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Profile');
  const subscription2 = Meteor.subscribe('Reviews');
  return {
    drivers: Drivers.find({}).fetch(),
    reviews: Review.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(MyProfile);
