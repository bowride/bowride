import { Meteor } from 'meteor/meteor';
import { Drivers } from '../../api/driver/Driver.js';
import { Contacts } from '../../api/contact/Contacts';

/* eslint-disable no-console */

function addContact(data) {
  console.log(`  Adding: ${data.lastName} (${data.owner})`);
  Contacts.insert(data);
}

/** Initialize the collection if empty. */
if (Contacts.find().count() === 0) {
  if (Meteor.settings.defaultContacts) {
    console.log('Creating default data.');
    Meteor.settings.defaultContacts.map(data => addContact(data));
  }

  function addDriver(data) {
    console.log(`  Adding: ${data.firstName} in a ${data.color} ${data.carMake}, (${data.owner})`);
    Drivers.insert(data);
  }

  if (Drivers.find().count() === 0) {
    if (Meteor.settings.defaultDriver) {
      console.log('Creating default Driver.');
      Meteor.settings.defaultDriver.map(data => addDriver(data));
    }
  }
}
