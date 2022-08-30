import React, { useEffect, useRef } from 'react';
import './driven.css';

function Driven({ data, loader }) {
  const myref = useRef();

  useEffect(() => {
    console.log('loader', loader);
  }, []);

  return (
    <div className="content_driven">
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
