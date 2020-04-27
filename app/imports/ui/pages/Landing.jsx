import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' textAlign='center' container>

          <Grid.Column width={4}>
            <h1> BowRide</h1>
          </Grid.Column>

          <Grid.Column width={8}>
            <h3>
              More people ride-sharing means less cars on the road!
            </h3>
            <p>
              Need a lift? Contact one of our trusted drivers to help you get to your destination,
              or willing to give a lift, BowRide is an amazing hub to find drivers and riders to interact
              with each other to help traffic and the environment!
            </p>
            <h3>
              Safety is our Main Concern
            </h3>
            <p>
              We want you to feel comfortable with who you are riding with, check ratings and notes
              on previous driver/rider experiences.
            </p>
          </Grid.Column>
          <h2>
            Find the Driver/Rider that is right for you!
          </h2>
          <Image fluid src="/images/rainbowroad.jpeg"/>
        </Grid>
    );
  }
}

export default Landing;
