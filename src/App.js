import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Driven from './components/datadriven/driven';
import image from '../src/assets/Images/paisaje.gif';
import Buttons from './components/botonera/buttons';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    getCards();
  }, [page]);

  const changeFlag = (e) => {
    setFlag(!flag);
  };
  const getCards = () => {
    setLoader(false);
    axios(
      `https://api.pokemontcg.io/v2/cards/?page=${
        localStorage.getItem('page') || 1
      }&pageSize=12`
    ).then((resp) => {
      setData(resp.data);
      setLoader(true);
    });
  };

  const ChangeNextPage = () => {
    setPage(page + 1);
    if (page >= 250) {
      setPage(1);
    }
    localStorage.setItem('page', page);
    getCards();
  };

  const ChangeBackPage = () => {
    setPage(page - 1);
    if (page <= 1) {
      setPage(1);
    }
    localStorage.setItem('page', page);
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
                <label
                  className="form-check-label"
                  for="flexSwitchCheckChecked"
                >
                  Filter for type
                </label>
              </div>
            </div>
          </fieldset>
        </div>
        <Buttons
          flag={flag}
          setFlag={setFlag}
          data={data}
          setData={setData}
        ></Buttons>
        {<Driven loader={loader} data={data} setData={setData}></Driven>}
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
            <a href="#">Developed </a>
          </li>
          <li className="breadcrumb-item">
            <a href="#"> From by</a>
          </li>
          <li className="breadcrumb-item active">Hernan</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
