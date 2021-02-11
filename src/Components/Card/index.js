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
              link="https://devdan13.github.io/employeeDirectory/"
            />
            <CardItem
              src='https://github.com/DevDan13/images/blob/main/img/searched-book.png?raw=true'
              text='This app allows you to search, view, and save books.'
              label='Books'
              path='https://github.com/DevDan13/google-books-search'
              link="https://google-book-search-app13.herokuapp.com/"
            />
            <CardItem
              src='https://github.com/DevDan13/images/blob/main/img/covid-locator.png?raw=true'
              text='Find Covid Testing sites near your immediate location and choose one to receive map coordinates.'
              label='Public Service'
              path='https://github.com/DevDan13/covid-locator-dan-copy'
              link="https://gavin56.github.io/covid-locator/"
            />
          </ul>
          <ul className='card-items'>
            <CardItem
              src='https://github.com/DevDan13/images/blob/main/img/eat-burger.png?raw=true'
              text='Full stack app that uses an MVC structure to apply CRUD for burgers.'
              label='Food'
              path='https://github.com/DevDan13/eat-da-burger'
              link="https://devour-hour.herokuapp.com/"
            />
            <CardItem
              src='https://github.com/DevDan13/images/blob/main/img/fitness-tracker.png?raw=true'
              text='Add and complete new exercises and see them tracked over the period of 7 days on the dashboard.'
              label='Fitness'
              path='https://github.com/DevDan13/Fitness-Tracker'
              link="https://workouttracker13.herokuapp.com/?id=600424486d817a0015b624cf"
            />
            <CardItem
              src='https://github.com/DevDan13/images/blob/main/img/quokka-homepage.png?raw=true'
              text='Set up an account on Quokka and begon to buy and sell listings on this e-commerce site.'
              label='E-commerce'
              path='https://github.com/DevDan13/Quokka-Marketplace-DevDan13'
              link="https://quokka-marketplace-devdan13.herokuapp.com/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;