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
    const { firstName, lastName, image, referralCode, carMake, carType, licensePlate, color, carYear, destination  } = data;
    const owner = Meteor.user().username;
    Drivers.insert({ firstName, lastName, image, referralCode, carMake, carType, licensePlate, color, carYear, owner, destination},
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
        <Grid container centered style={{ padding: '1.5em 0em',backgroundColor: '#e2e2e2',}}>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Header as="h2" textAlign="center">Personal information and car details</Header>
            <Header disabled as = 'h4' textAlign="center">Only name and car make are visible before booking</Header>
            <AutoForm size='small' ref={ref => { fRef = ref; }} schema={DriverSchema} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name = 'firstName'/>
                <TextField name = 'lastName'/>
                <TextField name = 'image'/>
                <TextField name = 'referralCode'/>
                <SelectField name = 'carMake'/>
                <SelectField name = 'carType'/>
                <TextField name = 'color'/>
                <SelectField name='carYear'/>
                <TextField name='licensePlate'/>
                <SelectField name='destination'/>
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
