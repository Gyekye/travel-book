import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Navbar';
import Card from './components/Card';

import Data from './database/placesData';
const path = './assets/images';


function Page(){
  const places = Data.map(place =>{
      return (
        <Card
          name={place.name}
          image={require(`${path}/${place.image}`)}
          country={place.country}
          mapUrl={place.mapUrl}
          description={place.description}
          startDate={place.dates.startDate}
          startYear={place.dates.startYear}
          endDate={place.dates.endDate}
          endYear={place.dates.endYear}
        />
      )
  })
  return(
    <div>
      <Header />
      {places}
    </div>
  )
}
ReactDOM.render(
    <Page />,
    document.getElementById('root')
);
