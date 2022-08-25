import React, { useEffect, useState, useRef } from 'react';
import './driven.css';
import ArrayPokemonTypes from './array';

function Driven({ data, loader, setData }) {
  const myref = useRef();
  const [flag, setFlag] = useState(false);
  const [filterFlag, setFilterFlag] = useState(false);

  const dataFiltrada = [];
  useEffect(() => {
    console.log('loader', loader);
  }, []);

  const handleClick = (e, poketype) => {
    data.data.filter((item) => {
      if (item.types[0] === poketype) {
        return dataFiltrada.push(item);
      }
    });
    console.log(dataFiltrada);
    setFilterFlag(true);
    console.log(filterFlag);
    setFlag(false);
  };
  const changeFlag = (e) => {
    setFilterFlag(!filterFlag);
    setFlag(!flag);
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
                <div className="spinner-border text-light" role="status">
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
