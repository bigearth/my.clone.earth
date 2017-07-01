import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action({ fetch }) {

  return {
    chunks: ['home'],
    title: 'Home Page',
    component: <Layout><Home /></Layout>,
  };
}

export default action;
