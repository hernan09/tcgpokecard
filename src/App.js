import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Driven from './components/datadriven/driven';
import image from '../src/assets/Images/paisaje.gif';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCards();
  }, [page]);

  const getCards = () => {
    setLoader(false);
    axios(
      `https://api.pokemontcg.io/v2/cards/?page=${page || 1}&pageSize=10`
    ).then((resp) => {
      setData(resp.data);
      setLoader(true);
      console.log(resp.data);
    });
  };

  const ChangeNextPage = () => {
    setPage(page + 1);
    if (page >= 250) {
      setPage(1);
    }
    console.log('la page', page);
    getCards();
  };

  const ChangeBackPage = () => {
    setPage(page - 1);
    if (page <= 1) {
      setPage(1);
    }
    getCards();
  };

  return (
    <div
      className="body_app"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="content-buttons">
        <button
          className="btn btn-dark btn-sm buttonpage"
          onClick={ChangeBackPage}
        >
          Back
        </button>
        <button
          className="btn btn-dark btn-sm buttonpage"
          onClick={ChangeNextPage}
        >
          Next
        </button>
      </div>
      <div className="content_box">
        {<Driven loader={loader} data={data}></Driven>}
        {/* {loader &&
          data?.data?.map((item, index) => {
            return (
              <div className="cards" key={index}>
                <img
                  className="imagecard hvr-grow"
                  src={item.images.small}
                ></img>
              </div>
            );
          })} */}
      </div>
      <div className="footer">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">PokeApp made</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">be</a>
          </li>
          <li className="breadcrumb-item active">Hernan</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
