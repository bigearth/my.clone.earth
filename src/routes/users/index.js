import React from 'react';
import Layout from '../../components/Layout';
import Users from './Users';

const title = 'Users';

async function action({params, fetch}) {

  console.log(process.env.REST_URL);
  const resp = await fetch(`${process.env.REST_URL}/users/${params.username}`, { method: 'GET' });
  const user = await resp.json();
  return {
    chunks: ['users'],
    title,
    component: <Layout><Users title={title} user={user}/></Layout>,
  };
}

export default action;
