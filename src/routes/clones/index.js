import React from 'react';
import Layout from '../../components/Layout';
import Clone from './Clone';
import _ from 'lodash';

const title = 'Clone';

async function action({params, fetch}) {
  const resp = await fetch(`${process.env.REST_URL}/users/${params.id}`, { method: 'GET' });
  const user = await resp.json()
  let clone = _.filter(user.clones, (clone, index) => {
    return clone.title == params.clone_id;
  });

  return {
    chunks: ['clones'],
    title,
    component: <Layout><Clone title={title} clone={clone[0]}/></Layout>,
  };
}

export default action;
