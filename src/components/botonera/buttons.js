import React from 'react';
import './buttons.css';
import ArrayPokemonTypes from '../array';

let arrayFilter = { data: [] };

const buttons = ({ flag, setFlag, data, setData }) => {
  const handleClick = (e, poketype) => {
    arrayFilter.data = [];
    data.data.forEach((element) => {
      if (poketype === element.types[0]) {
        arrayFilter.data.push(element);
      }
    });
    setFlag(false);
    setData(arrayFilter);
  };
  return (
    <div>
      {flag === true && (
        <div className="list-group custom-list">
          {ArrayPokemonTypes.map((item, index) => {
            return (
              <div key={index} className="content-icon">
                <a
                  key={index}
                  className="list-group-item list-group-item-action hvr-curl-bottom-right"
                  onClick={(event) => handleClick(event, item.pokeType)}
                >
                  <img src={item.icon} className="span-icon" />
                  {item.pokeType}
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default buttons;
