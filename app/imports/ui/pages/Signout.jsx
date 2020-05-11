import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Segment, Container } from 'semantic-ui-react';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    Meteor.logout();
    return (
      <Container className="Signout" fluid style={{ backgroundColor: 'transparent'}}>
      <Segment
          inverted
          textAlign='center'
          style={{ minHeight: '89vh', padding: '1em 0em', backgroundColor: 'transparent'}}
          vertical
          Container
      >
        <Header 
        inverted 
        as ='h1' 
        size='huge' 
        textAlign='center' 
        color = "White"
        content= "HAWAII SAYS THANKS FOR SHARING A RIDE!"
        style={{
            fontSize: '3em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '5em',
        }}>
        </Header>
      </Segment>
      </Container>
    );
  }
}
