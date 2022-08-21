import React, { useEffect, useState, useRef } from 'react';
import './driven.css';

function Driven({ data, loader }) {
  const myref = useRef();
  const [flag, setFlag] = useState(false);
  const [typeload, setTypeload] = useState(false);
  const [expantionload, setExpantionload] = useState(false);
  const [formatload, setFormatload] = useState(false);
  useEffect(() => {
    console.log('loader', loader);
  }, []);

  const changeFlag = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case 'tipo':
        console.log('aca filtro por tipo', data);
        setFlag(true);
        setTypeload(true);
        break;
      case 'expancion':
        console.log('aca filtro por expancion', data);
        setFlag(true);
        break;
      case 'formato':
        console.log('aca filtro por formato', data);
        setFlag(true);
        break;
    }
  };
  return (
    <div className="content_driven">
      <div className="top">
        <fieldset className="form-group">
          <legend className="mt-4 filtros">Ordenar</legend>
          <div className="content-check">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="optionsRadios"
                id="optionsRadios2"
                value="expancion"
                onChange={changeFlag}
              />
              <label className="form-check-label" for="optionsRadios2">
                Por expancion
              </label>
            </div>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                name="optionsRadios"
                id="optionsRadios3"
                value="tipo"
                onChange={changeFlag}
              />
              <label className="form-check-label" for="optionsRadios3">
                Por tipo
              </label>
            </div>
          </div>
        </fieldset>
        {flag && (
          <div class="list-group">
            {data?.data?.map((item, index) => {
              return (
                <div>
                  {typeload && (
                    <a
                      href="#"
                      key={index}
                      class="list-group-item list-group-item-action"
                    >
                      {item.types[0]}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        )}
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
