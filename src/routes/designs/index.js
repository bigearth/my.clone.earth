import React from 'react';
import Layout from '../../components/Layout';
import Design from './Design';
import _ from 'lodash';

const title = 'Design';

async function action({params, fetch}) {
  const resp = await fetch(`${process.env.REST_URL}/users/${params.id}`, { method: 'GET' });
  const user = await resp.json()
  let design = _.filter(user.designs, (design, index) => {
    return design.title == params.design_id;
  });

  return {
    chunks: ['designs'],
    title,
    component: <Layout><Design title={title} design={design[0]}/></Layout>,
  };
}

export default action;
