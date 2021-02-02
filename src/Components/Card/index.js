import React from 'react';
import './style.css';
import CardItem from '../CardItem/index';

function Card() {
  return (
    <div className='card'>
      <h1>Check out some of my work!</h1>
      <div className='card-container'>
        <div className='card-wrapper'>
          <ul className='card-items'>
            <CardItem
              src='https://github.com/DevDan13/images/blob/main/img/Employee-Sort.png?raw=true'
              text='A simple react app that generates 20 random users and allows for searching and sorting them.'
              label='Organization'
              path='https://github.com/DevDan13/Employee-Directory'
            />
            <CardItem
              src='https://github.com/DevDan13/images/blob/main/img/back-end-note-taker.png?raw=true'
              text='This app alows you to create, read, update, and delete notes.'
              label='Note keeping'
              path='https://github.com/DevDan13/back-end-note-taker'
            />
            <CardItem
              src='https://github.com/DevDan13/images/blob/main/img/covid-locator.png?raw=true'
              text='Find Covid Testing sites near your immediate location and choose one to receive map coordinates.'
              label='Public Service'
              path='https://github.com/DevDan13/covid-locator-dan-copy'
            />
          </ul>
          <ul className='card-items'>
            <CardItem
              src='https://github.com/DevDan13/images/blob/main/img/eat-burger.png?raw=true'
              text='Full stack app that uses an MVC structure to apply CRUD for burgers.'
              label='Food'
              path='https://github.com/DevDan13/eat-da-burger'
            />
            <CardItem
              src='https://github.com/DevDan13/images/blob/main/img/fitness-tracker.png?raw=true'
              text='Add and complete new exercises and see them tracked over the period of 7 days on the dashboard.'
              label='Fitness'
              path='https://github.com/DevDan13/Fitness-Tracker'
            />
            <CardItem
              src='https://github.com/DevDan13/images/blob/main/img/quokka-homepage.png?raw=true'
              text='Set up an account on Quokka and begon to buy and sell listings on this e-commerce site.'
              label='E-commerce'
              path='https://github.com/DevDan13/Quokka-Marketplace-DevDan13'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;