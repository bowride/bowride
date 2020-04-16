import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Container, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Contact from '/imports/ui/components/Contact';
import { Contacts } from '../../api/contact/Contacts';
import { Note } from '../../api/note/Note';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListContacts extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <Container>
        <Header as="h2" textAlign="center" inverted>List Contacts</Header>
        <Card.Group>
          {this.props.contacts.map((contact, index) => <Contact key={index} contact={contact}
                                                                Contact={Contacts}
                       notes={this.props.notes.filter(note => (note.contactId === contact._id))}/>)}
        </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  notes: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Contacts');
  const subscription2 = Meteor.subscribe('Notes');
  return {
    contacts: Contacts.find({}).fetch(),
    notes: Note.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(ListContacts);