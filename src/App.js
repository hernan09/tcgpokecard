import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Driven from './components/datadriven/driven';
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
      `https://api.pokemontcg.io/v2/cards/?page=${page || 1}&pageSize=20`
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
    <div className="body_app">
      <div className="content-buttons">
        <button
          className="btn btn-dark btn-sm buttonpage"
          onClick={ChangeBackPage}
        >
          BACK
        </button>
        <button
          className="btn btn-dark btn-sm buttonpage"
          onClick={ChangeNextPage}
        >
          NEXT
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
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Library</a>
          </li>
          <li class="breadcrumb-item active">Data</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
