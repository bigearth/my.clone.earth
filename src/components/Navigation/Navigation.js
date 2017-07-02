import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import Auth from '../../services/Auth/Auth';

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {'auth': false};
  }

  handleLogin(e) {
    e.preventDefault();
    let auth = new Auth();
    auth.login();
  }

  handleLogout(e) {
    e.preventDefault();
    let auth = new Auth();
    auth.logout();
  }

  componentDidMount() {
    let auth = new Auth();
    let userObj = {};
    if(auth.isAuthenticated()) {
      userObj = auth.getSession();
    }
    this.setState({
      'auth': auth.isAuthenticated(),
      'user': userObj
    });
  }

  render() {

    return (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="/about">About</Link>
        <Link className={s.link} to="/contact">Contact</Link>
        <span className={s.spacer}> | </span>
        { !this.state.auth && (
          <span>
            <a className={s.link} href="#" onClick={this.handleLogin.bind(this)}>
              Login
            </a>
            <span className={s.spacer}>or</span>
            <a className={s.link} href="#" onClick={this.handleLogin.bind(this)}>
              Sign up
            </a>
          </span>
        )}
        { this.state.auth && (
          <a className={s.link} href="#" onClick={this.handleLogout.bind(this)}>
            Logout
          </a>
        )}
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
