/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Clones.css';

class Clones extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Clones</h1>
          <p>ID: {this.props.clone_id}</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Clones);