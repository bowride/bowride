import React from 'react';
import { Segment } from 'semantic-ui-react';
import { AutoForm, ErrorsField, HiddenField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import PropTypes from 'prop-types';
import { Review, ReviewSchema } from '../../api/Review/Review';

/** Renders the Page for adding a document. */
class AddReview extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { review, owner, driverId, createdAt } = data;
    Review.insert({ review, owner, driverId, createdAt },
      (error) => {
        if (error) {
          swal('Review Error', error.message, 'error');
        } else {
          swal('Success', 'Review added successfully', 'success');
          formRef.reset();
        }
      });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
            <AutoForm ref={ref => { fRef = ref; }} schema={ReviewSchema} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField label="Write a Review" name='review'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
                <HiddenField name='owner' value={this.props.owner}/>
                <HiddenField name='driverId' value={this.props.driverId}/>
                <HiddenField name='createdAt' value={new Date()}/>
              </Segment>
            </AutoForm>
    );
  }
}

AddReview.propTypes = {
  owner: PropTypes.string.isRequired,
  driverId: PropTypes.string.isRequired,
};

export default AddReview;
