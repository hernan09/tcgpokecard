import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
    console.log('loader', loader);
    axios(
      `https://api.pokemontcg.io/v2/cards/?page=${page || 1}&pageSize=30`
    ).then((resp) => {
      setData(resp.data);
      setLoader(true);
      console.log('loader', loader);
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
    console.log('la page', page);
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
      {!loader && (
        <img
          src={`https://www.miraflores.gob.pe/modulos/consultatramite_/img/loading.gif`}
          className="loader"
        ></img>
      )}
      <div className="content_box">
        {loader &&
          data?.data?.map((item, index) => {
            return (
              <div className="cards" key={index}>
                <img
                  className="imagecard hvr-grow"
                  src={item.images.small}
                ></img>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
