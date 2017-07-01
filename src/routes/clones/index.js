/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Clones from './Clones';

const title = 'Clones';

function action(context) {
  return {
    chunks: ['clones'],
    title,
    component: <Layout><Clones title={title} clone_id={context.params.clone_id}/></Layout>,
  };
}

export default action;
