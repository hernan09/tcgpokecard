import React, { useEffect, useState, useRef } from 'react';
import './driven.css';

function Driven({ data, loader }) {
  const myref = useRef();
  const [flag, setFlag] = useState(false);

  const classPokemon = [
    {
      pokename: 'Grass',
      icon: 'https://www.kindpng.com/picc/m/316-3164678_pokemon-symbol-png-transparent-png.png',
    },
    {
      pokename: 'Bug',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/240px-Pok%C3%A9mon_Bug_Type_Icon.svg.png',
    },
    {
      pokename: 'Lightning',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH1elmnoXfefk-78O12__EuJri5RY4G8zh5A&usqp=CAU',
    },
    {
      pokename: 'Dragon',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/1200px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png',
    },
    {
      pokename: 'Water',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/2048px-Pok%C3%A9mon_Water_Type_Icon.svg.png',
    },
    {
      pokename: 'Darkness',
      icon: 'https://pngset.com/images/the-strongest-attacks-for-each-type-in-pokmon-go-dark-type-pokemon-logo-symbol-trademark-moon-outer-space-transparent-png-2603328.png',
    },
    {
      pokename: 'Metal',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSGUJSwGW0wDJHT-SLoLqKF-Q8_7gziDt6hxQwpBprMJnTajKknx-78p2SoIkLG8FkZ4&usqp=CAU',
    },
    {
      pokename: 'Colorless',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/1200px-Pok%C3%A9mon_Normal_Type_Icon.svg.png',
    },
    {
      pokename: 'Psychic',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZY_wptqdjEv7LsgH73FeKqhJzr4oT5ultA&usqp=CAU',
    },
    {
      pokename: 'Fire',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/1200px-Pok%C3%A9mon_Fire_Type_Icon.svg.png',
    },
    {
      pokename: 'Fighting',
      icon: 'https://e7.pngegg.com/pngimages/374/734/png-clipart-pokemon-types-pokemon-trading-card-game-video-symbol-blue-fire-dragon-orange-logo.png',
    },
    {
      pokename: 'Ice',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvBN1h83YXcTGPoSzRhE_SnFly5n-OX5dKg&usqp=CAU',
    },
    {
      pokename: 'Ghost',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/800px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png',
    },
    {
      pokename: 'Fairy',
      icon: 'https://logodix.com/logo/565521.jpg',
    },
    {
      pokename: 'Ground',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS39NTuVG7XbrLOrXa05UKyNCk_PljW_Dra7w&usqp=CAU',
    },
    {
      pokename: 'Poison',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/800px-Pok%C3%A9mon_Poison_Type_Icon.svg.png',
    },
  ];

  useEffect(() => {
    console.log('loader', loader);
  }, []);

  const cancelFlag = (poketype) => {
    console.log('la flag', poketype);
    setFlag(false);
  };
  const changeFlag = (e) => {
    console.log('value', e.target.value);
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
                <div key={index} className="content-icon">
                  <a
                    href="#"
                    key={index}
                    className="list-group-item list-group-item-action hvr-curl-bottom-right"
                    onClick={cancelFlag}
                  >
                    <img src={item.icon} className="span-icon" />
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
                <div className="spinner-border text-primary" role="status">
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
