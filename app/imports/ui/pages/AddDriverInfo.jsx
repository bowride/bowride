import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { Drivers, DriverSchema } from '../../api/driver/Driver';

/** Renders the Page for adding a document. */
class AddDriverInfo extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { firstName, lastName, referralCode, carMake, licensePlate, color, carYear  } = data;
    const owner = Meteor.user().username;
    Drivers.insert({ firstName, lastName, referralCode, carMake, licensePlate, color, carYear, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Profile Updated!', 'success');
          formRef.reset();
        }
      });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Personal information and car details</Header>
            <Header disabled as = 'h4' textAlign="center">Only name and car make are visible before booking</Header>
            <AutoForm size='small' ref={ref => { fRef = ref; }} schema={DriverSchema} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name = 'firstName'/>
                <TextField name = 'lastName'/>
                <TextField name = 'referralCode'/>
                <SelectField name = 'carMake'/>
                <TextField name = 'color'/>
                <SelectField name='carYear'/>
                <TextField name='licensePlate'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddDriverInfo;
