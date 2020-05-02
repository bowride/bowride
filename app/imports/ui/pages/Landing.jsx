import React from 'react';
import { Grid, Image, Header, Segment, Container, Divider, Button, Icon } from 'semantic-ui-react';
import { withRouter, NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <Grid>
      <Container className="Landing" fluid >
        <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 550, padding: '1em 0em',backgroundColor: 'green'}}
            vertical
            Container
        >
          <Divider hidden/>
          <Header
            inverted 
            as ='h1' 
            size='huge' 
            textAlign='center' 
            color = "White"
            content= "More People Ride-Sharing Means Less Cars On The Road!"
            style={{
                fontSize: '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '3em',
              
            }}
          />
          <Header
            as='h2'
            content='Care to ride with  someone?'
            textAlign="center"
            inverted
            style={{
              fontSize: '1.7em',
              fontWeight: 'normal',
              marginTop: '1.5em',
           }}
          />
          <Button inverted color='yellow' as={NavLink} activeClassName="" exact to="/signup" textAlign="center" size='huge'>
            Get Started
            <Icon name='right arrow' />
          </Button>
        </Segment>

        <Segment textAlign='center' style={{ padding: '8em 0em', minHeight: 600, backgroundColor: 'transparent' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header inverted color = "White" as='h2' style={{ fontSize: '2.3em' }}>
                  We Connect Riders To Drivers
                </Header>
                <p style={{ fontSize: '1.33em', color:'white'}}>
                  Need a lift or maybe just someone to share your drive with? Simply check out who
                   else is going to your destination and share the ride.
                </p>
                <Header inverted color = "White" as='h2' style={{ fontSize: '2.3em' }}>
                  Safety is our Main Concern 
                </Header>
                <p style={{ fontSize: '1.33em', color:'white' }}>
                  To ensure your safety, you get to know the ratings of each driver before you decide to ride.
                  After the ride, both of you give each other a rating for the ride, so be nice.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image rounded size='massive' src='/images/ridesharing.png' />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>How It works</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em', backgroundColor: 'transparent' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header inverted color = "White" as='h3' style={{ fontSize: '2.3em' }}>
                  "It's More Practical For Students."
                </Header>
                <p style={{ fontSize: '1.33em', color:'white' }}>One student said about us</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header inverted color = "White" as='h3' style={{ fontSize: '2.3em' }}>
                  "Its the best thing i've seen in my life."
                </Header>
                <p style={{ fontSize: '1.33em' , color:'white'}}>
                  <Image avatar size='tiny' src='/images/cam.jpg' />
                  <b>Cam Moore</b> CS Lecturer At UH Manoa
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
    </Container>
    </Grid>
    );
  }
}

export default Landing;
