import React from 'react';
import Layout from '../../components/Layout';
import Callback from './Callback';

const title = 'Please Wait...';

function action() {
  return {
    chunks: ['callback'],
    title,
    component: <Layout><Callback title={title} /></Layout>,
  };
}

export default action;
