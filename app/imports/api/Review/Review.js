import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const Review = new Mongo.Collection('Review');

/** Define a schema to specify the structure of each document in the collection. */
const ReviewSchema = new SimpleSchema({
  review: String,
  owner: String,
  contactId: String,
  createdAt: Date,
 }, { tracker: Tracker });
/** Attach this schema to the collection. */
Review.attachSchema(ReviewSchema);

/** Make the collection and schema available to other code. */
export { Review, ReviewSchema };
