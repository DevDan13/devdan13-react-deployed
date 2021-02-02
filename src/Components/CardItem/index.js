import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='card-item'>
        <a className='card-item-link' target="_blank" href={props.path} rel="noreferrer">
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
        </a>
      </li>
    </>
  );
}

export default CardItem;