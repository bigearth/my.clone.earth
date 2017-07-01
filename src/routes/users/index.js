import React from 'react';
import Layout from '../../components/Layout';
import Users from './Users';
import Auth from '../../services/Auth/Auth';

const title = 'Users';

async function action({params, fetch}) {
  let auth = new Auth();
  if(!auth.isAuthenticated()) {
    window.location.href = '/';
  }
  const resp = await fetch(`${process.env.REST_URL}/users/${params.id}`, { method: 'GET' });
  const user = await resp.json();
  return {
    chunks: ['users'],
    title,
    component: <Layout><Users title={title} user={user}/></Layout>,
  };
}

export default action;
