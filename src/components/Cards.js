import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import two from "../images/two.jpg";
import nine from "../images/nine.jpg";
import three from "../images/three.jpg";
import four from "../images/four.jpg";
import eight from "../images/eight.jpg";

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src={nine}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'/>
            
            <CardItem
              src={two}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'/>
          </ul>

          <ul className='cards__items'>
            <CardItem
              src={three}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'/>
            
            <CardItem
              src={four}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'/>
            
            <CardItem
              src={eight}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;