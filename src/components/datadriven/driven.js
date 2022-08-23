import React, { useEffect, useState, useRef } from 'react';
import './driven.css';

function Driven({ data, loader }) {
  const myref = useRef();
  const [flag, setFlag] = useState(false);

  const classPokemon = [
    {
      pokename: 'Grass',
      icon: 'https://static.wikia.nocookie.net/pokemongo/images/0/0a/Icon_Grass.png/revision/latest/scale-to-width-down/25?cb=20171219195826',
    },
    {
      pokename: 'Bug',
      icon: 'https://static.wikia.nocookie.net/pokemongo/images/8/88/Icon_Bug.png/revision/latest/scale-to-width-down/25?cb=20171219195822',
    },
    {
      pokename: 'Lightning',
      icon: 'https://static.wikia.nocookie.net/pokemongo/images/1/1c/Icon_Electric.png/revision/latest/scale-to-width-down/25?cb=20171219195824',
    },
    {
      pokename: 'Dragon',
      icon: 'https://static.wikia.nocookie.net/pokemongo/images/d/d4/Icon_Dragon.png/revision/latest/scale-to-width-down/25?cb=20171219195823',
    },
    {
      pokename: 'Water',
      icon: 'https://static.wikia.nocookie.net/pokemongo/images/6/65/Icon_Water.png/revision/latest/scale-to-width-down/25?cb=20171219195830',
    },
    {
      pokename: 'Darkness',
      icon: 'https://static.wikia.nocookie.net/pokemongo/images/e/e9/Icon_Dark.png/revision/latest/scale-to-width-down/25?cb=20171219195823',
    },
    {
      pokename: 'Metal',
      icon: 'https://static.wikia.nocookie.net/pokemongo/images/3/38/Icon_Steel.png/revision/latest/scale-to-width-down/25?cb=20171219195830',
    },
    {
      pokename: 'Colorless',
      icon: 'https://static.wikia.nocookie.net/pokemongo/images/4/43/Icon_Normal.png/revision/latest/scale-to-width-down/25?cb=20171219195828',
    },
    {
      pokename: 'Psychic',
      icon: 'https://static.wikia.nocookie.net/pokemongo/images/c/ce/Icon_Psychic.png/revision/latest/scale-to-width-down/25?cb=20171219195829',
    },
    {
      pokename: 'Fire',
      icon: 'https://static.wikia.nocookie.net/pokemongo/images/0/0a/Icon_Fire.png/revision/latest/scale-to-width-down/25?cb=20171219195825',
    },
    {
      pokename: 'Fighting',
      icon: 'https://static.wikia.nocookie.net/pokemongo/images/f/f0/Icon_Fighting.png/revision/latest?cb=20171219195825',
    },
    {
      pokename: 'Ice',
      icon: 'https://static.wikia.nocookie.net/pokemongo/images/5/52/Icon_Ice.png/revision/latest/scale-to-width-down/25?cb=20171219195828',
    },
    {
      pokename: 'Ghost',
      icon: 'https://static.wikia.nocookie.net/pokemongo/images/7/7d/Icon_Ghost.png/revision/latest/scale-to-width-down/25?cb=20171219195826',
    },
    {
      pokename: 'Fairy',
      icon: 'https://static.wikia.nocookie.net/pokemongo/images/7/7f/Icon_Fairy.png/revision/latest/scale-to-width-down/25?cb=20171219195824',
    },
    {
      pokename: 'Ground',
      icon: 'https://static.wikia.nocookie.net/pokemongo/images/7/71/Icon_Ground.png/revision/latest/scale-to-width-down/25?cb=20171219195827',
    },
  ];

  useEffect(() => {
    console.log('loader', loader);
  }, []);

  const cancelFlag = () => {
    setFlag(false);
    console.log('la flag', flag);
  };
  const changeFlag = (e) => {
    console.log('value', e.target.value);
    console.log('aca filtro por tipo', data);
    setFlag(!flag);
    console.log('la flag', flag);
  };
  return (
    <div className="content_driven">
      <div className="top">
        <fieldset className="form-group">
          <div className="content-check">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                onChange={changeFlag}
              />
              <label className="form-check-label" for="flexSwitchCheckChecked">
                Filter for type
              </label>
            </div>
          </div>
        </fieldset>
        {flag === true && (
          <div className="list-group custom-list">
            {classPokemon.map((item, index) => {
              return (
                <div key={index} className="content-icon" onClick={cancelFlag}>
                  <a
                    href="#"
                    key={index}
                    className="list-group-item list-group-item-action hvr-curl-bottom-right"
                  >
                    {item.pokename}
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="main">
        {data?.data?.map((item, index) => {
          return (
            <div ref={myref} className="cards" key={index}>
              {loader && (
                <img
                  className="imagecard hvr-grow"
                  src={item.images.small}
                ></img>
              )}
              {!loader && (
                <div className="spinner-grow text-danger" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Driven;
