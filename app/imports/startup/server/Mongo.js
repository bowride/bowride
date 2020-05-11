import { Meteor } from 'meteor/meteor';
import { Drivers } from '../../api/driver/Driver.js';


/* eslint-disable no-console */

function addDriver(data) {
  console.log(`  Adding: ${data.firstName} in a ${data.color} ${data.carMake}, (${data.owner})`);
  Drivers.insert(data);
}


/** Initialize the collection if empty. */
if (Drivers.find().count() === 0) {
  if (Meteor.settings.defaultDriver) {
    console.log('Creating default Driver.');
    Meteor.settings.defaultDriver.map(data => addDriver(data));
  }
}
