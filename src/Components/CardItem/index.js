import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='card-item'>
        <Link className='card-item-link' target="_blank" to={{ pathname: props.path}} >
          <figure className='card-item-pic-wrap' data-category={props.label}>
            <img
              className='card-item-img'
              alt='Project img'
              src={props.src}
            />
          </figure>
          <div className='card-item-info'>
            <h5 className='card-item-text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;