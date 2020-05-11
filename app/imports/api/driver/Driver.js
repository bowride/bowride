import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Drivers = new Mongo.Collection('Drivers');

/** Define a schema to specify the structure of each document in the collection. */
const DriverSchema = new SimpleSchema({
    firstName: String,
    lastName: String,
    referralCode: {
        type: String,
        required: false,
    },
    carMake: {
      type: String,
      allowedValues: ['Acura', 'Alpha Romeo', 'Toyota', 'Audi','BMW','Ford','Dodge','Honda','Kia','Nissan'],
      defaultValue: 'None',
      required: true,
    },
    carType:{
        type:String,
        allowedValues: ['sedan','suv','van','coupe','hatchback','pickup'],
        defaultValue:'None',
        required: true,
    },
    licensePlate: String,
    color: {
        type: String,
        required: true,
    },
    carYear: {
        type: Number,
        allowedValues: [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009 ],
        defaultValue: '2020',
        required: true,
    },
    destination:{
      type: String,
      allowedValues: ['UH Campus', 'Manoa', 'Kaimuki', 'Palolo', 'Kahala', 'Ala Moana','Waikiki','kapiolani'],
      defaultValue: 'UH Campus',
      required: true,
    },
    owner: {
        type: String,
        required: false,
    },
},{ tracker: Tracker });

/** Attach this schema to the collection. */
Drivers.attachSchema(DriverSchema);

/** Make the collection and schema available to other code. */
export { Drivers, DriverSchema };
