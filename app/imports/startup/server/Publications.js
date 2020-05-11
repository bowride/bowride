import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Drivers } from '../../api/driver/Driver';
import { Note } from '../../api/note/Note';
import { Review } from '../../api/Review/Review';
/** This subscription publishes only the documents associated with the logged in user */

/** ---------Drivers--------- */
Meteor.publish('Drivers', function publish() {
  if (this.userId) {
    return Drivers.find();
  }
  return this.ready();
});

Meteor.publish('Profile', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Drivers.find({ owner: username });
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

Meteor.publish('Reviews', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Review.find({ owner: username });
  }
  return this.ready();
});
