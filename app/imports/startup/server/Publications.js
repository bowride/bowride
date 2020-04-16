import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Drivers } from '../../api/driver/Driver';
import { Contacts } from '../../api/contact/Contacts';
import { Note } from '../../api/note/Note';
/** This subscription publishes only the documents associated with the logged in user */

/** ---------Driver--------- */
Meteor.publish('Driver', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Drivers.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish('Contacts', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Contacts.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish('ContactsAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Contacts.find();
  }
  return this.ready();
});

Meteor.publish('Notes', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Note.find({ owner: username });
  }
  return this.ready();
});