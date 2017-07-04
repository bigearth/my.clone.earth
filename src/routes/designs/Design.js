import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Design.css';

class Design extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Design</h1>
          <p>ID: {this.props.design.title}</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Design);
