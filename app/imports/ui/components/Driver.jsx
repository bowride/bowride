import React from 'react';
import { Card, Confirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Driver extends React.Component {

  removeItem(docID) {
    console.log(`item to delete is: ${docID}`);
    this.props.driver.remove(docID);
  }

  state = { open: false };

  open = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  delete = () => this.removeItem(this.props.driver._id);

  render() {
    return (
        <Card centered>
          <Card.Content>
            <Card.Header>{this.props.driver.firstName} {this.props.driver.lastName}</Card.Header>
            <Card.Meta>{this.props.driver.carMake}</Card.Meta>
            <Card.Meta>{this.props.driver.carType}</Card.Meta>
            <Card.Meta>{this.props.driver.carYear}</Card.Meta>
            <Card.Meta>{this.props.driver.licensePlate}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/edit/${this.props.driver._id}`}>Edit</Link>
          </Card.Content>
          <Card.Content extra>
            <button className="ui button" onClick={this.open}>Delete</button>
            <Confirm
                open={this.state.open}
                onCancel={this.close}
                onConfirm={this.close && this.delete}
            />
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Driver.propTypes = {
  driver: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Driver);
