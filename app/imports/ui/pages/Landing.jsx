import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' textAlign='center' container>

          <Grid.Column>
            <Image size='large' centered src="/images/bowride-logo.png"/>
            <h1>Bow Rides!</h1>
            <p>Bowride is a website that will allow users to organize carpools with other members of the UH community.
              Users can sign up to be a driver or rider,
              and drivers can search for riders that are most convenient to/from campus.
              These carpools can be reoccurring such as everyday classes or one-time such as for special events.
              A rating system for both drivers and passengers prevents abuses,
              plus a special administrator mode that enables the site admin to remove users based upon substantiated
              complaints.</p>
          </Grid.Column>

        </Grid>
    );
  }
}

export default Landing;
