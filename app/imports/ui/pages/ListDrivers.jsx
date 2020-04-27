
/**----------------------------------------------------------------- */
import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Card, Container, Loader, Divider, Button, Form } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Driver from '../components/Driver';
import { Drivers } from '../../api/driver/Driver';
import { Review } from '../../api/Review/Review';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListDrivers extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {

    const seatsOptions = [{key:'2',value:'2', text:'2'},{key:'4',value:'4', text:'4'},
                        {key:'5',value:'5', text:'5'},{key:'many',value:'many', text:'6+'}]
    
    const cartypeOptions = [
        {key:'sedan',value:'sedan', text:'Sedan'},{key:'suv',value:'suv', text:'SUV'},
        {key:'van',value:'van', text:'Van'},{key:'coupe',value:'coupe', text:'Coupe'},
        {key:'hatchback',value:'hatchback', text:'Hatchback'},{key:'pickup',value:'pickup', text:'Pickup'}
    ]

    return (
        <Container>
        <Divider hidden/>
        <Form size={'massive'}>
            <Form.Group widths='equal'>
                <Form.Input id = 'location' label ='Location' placeholder='landmark, or address'/>
                <Form.Select id='type' label='Car Type' placeholder='Sedan' options = {cartypeOptions}/>
                <Form.Select id='seats' label='Seats' placeholder='4' options={seatsOptions}/>
            </Form.Group>
        </Form>
        <Divider hidden/>
        <Card.Group>
          {this.props.drivers.map((driver, index) => <Driver key={index} driver={driver}
                                                                Drivers={Drivers}
                       reviews={this.props.reviews.filter(review => (review.driverId === driver._id))}/>)}
        </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListDrivers.propTypes = {
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
})(ListDrivers);
