import React from 'react';
import { Container, Grid, List, Divider, Icon, Input, Button, Header } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
export default class Footer extends React.Component {


  render() {
    return (
		<div className="footer-background">
	        <Grid container alignment='center'>
            <Grid.Column textAlign='center' mobile={16} tablet={8} computer={5}>
              <Header inverted>Bowride</Header>
                <List>
                <Divider/>
                <Icon name='facebook f' size='big' color='blue'/>
                <Icon name='instagram' size='big' color='orange'/>
                <Icon name='linkedin' size='big' color='blue'/>
                </List>
            </Grid.Column>
                  
            <Grid.Column textAlign='center' mobile={16} tablet={8} computer={3}>
              <Header inverted>Driver</Header>
                <List>
                  <Divider/>
                  <List.Item as={NavLink} activeClassName="" exact to="/signup">Become a Driver</List.Item>
                  <List.Item as='a'>Why Bowride</List.Item>
                  <List.Item as='a'>Safety</List.Item>
                  <List.Item as='a'>Help</List.Item>
                  <List.Item as={NavLink} activeClassName="" exact to="/signin">Sign in</List.Item>
                </List>
            </Grid.Column>

            <Grid.Column textAlign='center' mobile={16} tablet={8} computer={3}>
                <Header inverted>Rider</Header>
                <List>
                  <Divider/>
                  <List.Item as={NavLink} activeClassName="" exact to="/signup">Sign up to Ride</List.Item>
                  <List.Item as='a'>Safety</List.Item>
                  <List.Item as='a'>Help</List.Item>
                  <List.Item as={NavLink} activeClassName="" exact to="/signin">Sign in</List.Item>
                </List>
            </Grid.Column>

            <Grid.Column textAlign='center' mobile={16} tablet={8} computer={3}>
              <Header inverted>Connect</Header>
              <List>
                <Divider/>
                <List.Item> Get updates</List.Item>
                <List.Item>
                  <Input placeholder="Email Address"/>
                </List.Item>
                <List.Item>
                  <Button color='black'> Join the Movement </Button>
                </List.Item>
              </List>
                </Grid.Column>
	        </Grid>
	</div>
    )
  }
}
