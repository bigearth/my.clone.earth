import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

function action() {

  return {
    chunks: ['home'],
    title: 'Home Page',
    component: <Layout><Home /></Layout>,
  };
}

export default action;
