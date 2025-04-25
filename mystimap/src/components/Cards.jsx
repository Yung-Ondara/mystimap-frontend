import React, { useEffect, useState } from 'react';
import "./Cards.css";
import CardItem from './CardItem';

function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cards") // Make sure json-server is running
      .then(res => res.json())
      .then(data => setCards(data))
      .catch(err => console.error("Error fetching cards:", err));
  }, []);

  return (
    <div className='cards'>
      <h1>Check Out These EPIC Destinations!</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            {cards.slice(0, 2).map((card, index) => (
              <CardItem
                key={index}
                src={card.src}
                text={card.text}
                label={card.label}
                path={card.path}
              />
            ))}
          </ul>
          <ul className='cards__items'>
            {cards.slice(2).map((card, index) => (
              <CardItem
                key={index + 2} // avoid duplicate keys
                src={card.src}
                text={card.text}
                label={card.label}
                path={card.path}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
