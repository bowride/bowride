import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Drivers } from '../../api/driver/Driver.js';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.insert(data);
}

function addDriver(data) {
  console.log(`  Adding: ${data.firstName} in a ${data.color} ${data.carMake}, (${data.owner})`);
  Drivers.insert(data);
}

/** Initialize the collection if empty. */
if (Stuffs.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}


if (Drivers.find().count() === 0) {
  if (Meteor.settings.defaultDriver) {
    console.log('Creating default Driver.');
    Meteor.settings.defaultDriver.map(data => addDriver(data));
  }
}
