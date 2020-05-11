
/**----------------------------------------------------------------- */
import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Card, Container, Loader, Divider, Button, Header, Form, Segment, Rail } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Driver from '../components/Driver';
import { Drivers } from '../../api/driver/Driver';
import { Review } from '../../api/Review/Review';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListDrivers extends React.Component {

  state = { carType:'', destination:'', seats:'' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { carType, destination, seats } = this.state
    this.setState({ carType: carType, destination: destination, seats: seats })
  }
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {

    const {carType, destination, seats} = this.state
    const seatsOptions = [{key:'2',value:'2', text:'2'},{key:'3',value:'3', text:'3'},
                        {key:'4',value:'4', text:'4'},{key:'5',value:'5', text:'5'},
                        {key:'many',value:'many', text:'6+'}]
    
    const cartypeOptions = [
        {key:'sedan',value:'sedan', text:'Sedan'},{key:'suv',value:'suv', text:'SUV'},
        {key:'van',value:'van', text:'Van'},{key:'coupe',value:'coupe', text:'Coupe'},
        {key:'hatchback',value:'hatchback', text:'Hatchback'},{key:'pickup',value:'pickup', text:'Pickup'}
    ]

    const locationOptions = [
      {key:'UH Campus',value:'UH Campus', text:'UH Campus'}, {key:'Manoa',value:'Manoa', text:'Manoa'},
      {key:'Kaimuki',value:'Kaimuki', text:'Kaimuki'}, {key:'Palolo',value:'Palolo', text:'Palolo'},
      {key:'Kahala',value:'Kahala', text:'Kahala'}, {key:'Ala Moana',value:'Ala Moana', text:'Ala Moana'},
      {key:'Waikiki',value:'Waikiki', text:'Waikiki'},{key:'kapiolani',value:'kapiolani', text:'kapiolani'} 
    ]

    return (
        <Container style={{ padding: '1.5em 0em' }}>
          <Segment raised secondary>
            <Divider hidden/>

            <Rail close position='left'>
              <Segment raised secondary>Left extra Content</Segment>
            </Rail>

            <Rail close position='right'>
              <Segment raised secondary>Right extra Content</Segment>
            </Rail>

            <Form size={'huge'} onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Select 
                      id = 'location' 
                      name='destination' 
                      value={destination}
                      label ='Destination' 
                      placeholder='landmark, or address' 
                      options={locationOptions}
                      onChange={this.handleChange}/>
                    <Form.Select 
                      id='type' 
                      label='Car Type' 
                      name='carType'  
                      value={carType}
                      placeholder='Sedan' 
                      options = {cartypeOptions}
                      onChange={this.handleChange}/>
                    <Form.Select 
                      id='seats' 
                      label='Seats Required' 
                      name='seats'  
                      value = {seats}
                      placeholder='4' 
                      options={seatsOptions}
                      onChange={this.handleChange}/>
                </Form.Group>
            </Form>
            <Header disabled>{destination}  {carType}</Header>
            <Divider hidden/>
            <Card.Group doubling itemsPerRow={3}>
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
  const search={carType:'', destination:''}

  if (search.carType=='' && search.destination=='' ){
    search1 = {};
  }else 
  if(search.carType!=='' && search.destination==''){
    search1 = {carType: search.carType};
  }else 
  if (search.carType =='' && search.destination !==''){
    search1 = {destination: search.destination};
  }else{
    search1 = search;
  }

  return {
    drivers: Drivers.find({},{sort: {destination:1,firstName:1}}).fetch(),
    reviews: Review.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(ListDrivers);
