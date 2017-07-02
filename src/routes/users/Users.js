import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Users.css';
import Auth from '../../services/Auth/Auth';

class Users extends React.Component {

  componentDidMount() {
    let auth = new Auth();
    if(!auth.isAuthenticated()) {
      window.location.href = '/';
    }
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Profile</h1>
          <p>Username: {this.props.user.userName}</p>
          <p>Email: {this.props.user.email}</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Users);
