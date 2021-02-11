import React from 'react';
import Button from "@material-ui/core/Button";

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
        <Button
          size="small"
          target="_blank"
          rel="noreferrer"
          href={props.link}
          variant="contained"
          style={{
            borderWidth: 1,
            color: "white",
            borderColor: "blue",
            borderStyle: "solid",
            backgroundColor: "#1f98f4",
            position: "absolute",
            marginTop: 232,
            marginLeft: 85
          }}>Deployed App
        </Button>
    </li>
    </>
  );
}

export default CardItem;