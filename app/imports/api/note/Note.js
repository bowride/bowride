import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Note = new Mongo.Collection('Note');

/** Define a schema to specify the structure of each document in the collection. */
const NotesSchema = new SimpleSchema({
  note: String,
  owner: String,
  contactId: String,
  createdAt: Date,
 }, { tracker: Tracker });
/** Attach this schema to the collection. */
Note.attachSchema(NotesSchema);

/** Make the collection and schema available to other code. */
export { Note, NotesSchema };
