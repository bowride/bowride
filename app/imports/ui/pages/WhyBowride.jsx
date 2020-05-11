import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class WhyBowride extends React.Component {
  render() {
    return (
        <Container>
          <p><br/></p>
          <h1>Why BowRide?</h1>
          <h2>We want to give you the best Ride-sharing experience possible</h2>
          <p>
            We have developed an application to quickly find rides, to and from your destination.<br/>
            Find nearby drivers offering rides, or give somebody a ride to a common destination.
          </p>
          <h2>Help to Clear our Roads, one Car at a Time!</h2>
          <p>
            Nobody likes traffic in the morning...<br/>
            Manoa can be a mess, especially the Stan Sheriff Parking Structure.  BowRide is here to help
            with the morning madness, find a ride, find someone to give you a ride, the more people ride sharing
            leads to less cars on the road, which is not only good for parking, but good on the environment!
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </p>


        </Container>

    );

  }
}

export default WhyBowride;
