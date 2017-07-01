import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Callback.css';
import Auth from '../../services/Auth/Auth';

class Callback extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  componentDidMount() {
    var auth = new Auth();
    auth.handleAuthentication();
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.props.title}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Callback);
