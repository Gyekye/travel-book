import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Navbar';
import Card from './components/Card';


function Page(){
  return(
    <div>
      <Header />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
ReactDOM.render(
    <Page />,
    document.getElementById('root')
);
