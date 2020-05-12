import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import swal from 'sweetalert';
import {
  AutoForm,
  ErrorsField,
  HiddenField,
  LongTextField,
  SelectField,
  SubmitField,
  TextField
} from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { Drivers, DriverSchema } from '../../api/driver/Driver';

/** Renders the Page for editing a single document. */
class EditDriver extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const { firstName, lastName, carMake, carType, image, licensePlate, color, carYear, destination, _id } = data;
    Drivers.update(_id, { $set: { firstName, lastName, image, carMake, carType, licensePlate, color, carYear, destination  } }, (error) => (error ?
        swal('Error', error.message, 'error') :
        swal('Success', 'Item updated successfully', 'success')));
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
        <Grid container centered>
          <Grid.Column>
            <p><br/></p>
            <Header as="h2" textAlign="center">Edit Driver Profile</Header>
            <AutoForm schema={DriverSchema} onSubmit={data => this.submit(data)} model={this.props.doc}>
              <Segment>
                <TextField name='firstName'/>
                <TextField name='lastName'/>
                <TextField name='image'/>
                <SelectField name = 'carMake'/>
                <SelectField name = 'carType'/>
                <TextField name = 'color'/>
                <SelectField name='carYear'/>
                <TextField name='licensePlate'/>
                <TextField name='destination'/>
                <SubmitField value='Submit'/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
EditDriver.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Drivers');
  return {
    doc: Drivers.findOne(documentId),
    ready: subscription.ready(),
  };
})(EditDriver);