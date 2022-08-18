import React, { useEffect, useState, useRef } from 'react';
import './driven.css';

function Driven({ data, loader }) {
  const myref = useRef();
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log('loader', loader);
  }, []);

  const changeFlag = () => {
    if (flag) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };
  return (
    <div className="content_driven">
      <div className="top">
        <fieldset className="form-group">
          <legend className="mt-4 filtros">Filtros</legend>
          <div className="content-check">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="optionsRadios"
                id="optionsRadios1"
                value="option1"
              />
              <label className="form-check-label" for="optionsRadios1">
                filtrar por formato
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="optionsRadios"
                id="optionsRadios2"
                value="option2"
              />
              <label className="form-check-label" for="optionsRadios2">
                filtrar por expancion
              </label>
            </div>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                name="optionsRadios"
                id="optionsRadios3"
                value="option3"
              />
              <label className="form-check-label" for="optionsRadios3">
                filtrar por tipo
              </label>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="main">
        {' '}
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
