import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header, Image , Divider, Icon} from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { backgroundColor:'green', backgroundSize:"content"};
    return (
        <Menu style={menuStyle} stackable inverted className="navbar">
          <Menu.Item as={NavLink} activeClassName="" exact to="/" alignment='center'>
            <Header inverted as='h1'><Image size='massive' centered src="/images/bowride-logo.png"/>BowRide</Header>
          </Menu.Item>
          {this.props.currentUser ? (
              [<Menu.Item as={NavLink} activeClassName="active" exact to="/listDrivers" key='addContacts'>I want to Ride  <Icon name='street view' size='large'/></Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/add_driverinfo" key='add'>I want to Drive  <Icon name='car' size='large'/></Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/map" key='map'>Google Maps<Icon name='map outline' size='large'/></Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="" exact to="/profile" key='profile'> My Profile  <Icon name='user outline' size='large'/></Menu.Item>]
          ) : ''}
          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Menu.Item as={NavLink} activeClassName="" exact to="/admin" key='admin'>Admin</Menu.Item>
          ) : ''}

          <Menu.Item position="right">
            {this.props.currentUser === '' ? (
                <Dropdown color='black' text="Login" pointing="top right" icon={'user'}>
                  <Dropdown.Menu>
                    <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                    <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
                    <Divider/>
                    <Dropdown.Item icon="help circle" text="Help" as={NavLink} exact to="/"/>
                  </Dropdown.Menu>
                </Dropdown>
            ) : (
                <Dropdown text={this.props.currentUser} pointing="top right" icon={'user'}>
                  <Dropdown.Menu>
                    <Dropdown.Item text="My Profile" as={NavLink} exact to="/profile"/>
                    <Dropdown.Item text="Sign Out" icon="sign out"  as={NavLink} exact to="/signout"/>
                    <Divider/>
                    <Dropdown.Item icon="help circle" text="Help" as={NavLink} exact to="/"/>
                    <Dropdown.Item icon="comment alternate" text="Send Feedback" as={NavLink} exact to="/"/>
                  </Dropdown.Menu>
                </Dropdown>
            )}
          </Menu.Item>
        </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
