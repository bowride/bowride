import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Safety extends React.Component {
  render() {
    return (
        <Container>
          <h1>Safety is our Top Priority</h1>
          <h2>If you don't feel safe, cancel your trip.</h2>
          <p>
            We want our drivers and riders to feel comfortable on all rides, we know that it is impossible
            to make everybody happy, but we will try our best at giving you the best ride share experience possible!
          </p>
          <h2>Upon choosing your Rider/Driver</h2>
          <p>
            Take a look at your potential rider/driver, do you feel comfortable picking up or riding with him/her.
            Where will you be picked up? Where will you be dropped off? Is it a safe location? Do I have someone to contact?<br/>
            Bowride is an application based off of meeting new people, finding a ride, and getting to your destination
            We trust our fellow UH students to be responsible, safe, and trustworthy in order to have a seamless, ride-sharing
            experience.
          </p>
          <h2>
            Check the Critics!
          </h2>
          <p>
            Past Ride-share users can give reviews on their experience with the driver/rider, base your decision off
            of these reviews, fellow students ratings are there to help your decision in choosing a person to ride with.
            <br/>
            Give a review after your ride is over, it can go a long way in helping a fellow BowRide user!
          </p>
        </Container>

    );

  }
}

export default Safety;
