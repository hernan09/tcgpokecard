import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import './_default.css';

const WeatherComponent = () => {
  const [lati, setLati] = useState(0);
  const [long, setLong] = useState(0);
  const [Temp, setTemp] = useState('');
  const [Max, setMax] = useState('');
  const [Min, setMin] = useState('');
  const [Country, setCountry] = useState('');
  const [Clima, setClima] = useState('');
  const [Icon, setIcon] = useState('');
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLati(position.coords.latitude);
      setLong(position.coords.longitude);

      if (lati !== 0 && long !== 0) {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
        };

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=f20b66a33b32ecfc690c95d0e610f495`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            setLoading(false);
            setTemp(Math.round(result.main.temp - 273));
            setMax(Math.round(result.main.temp_max - 273));
            setMin(Math.round(result.main.temp_min - 273));
            setCountry(result.sys.country);
            setClima(result.weather[0].description);
            console.log(result);
          })
          .catch((error) => console.log('error', error));
      }
    });
  });
  //api.openweathermap.org/data/2.5/weather?lat=-34.7008819&lon=-58.36031500000001&appid=f20b66a33b32ecfc690c95d0e610f495

  const MinmaxTemp = () => {
    return (
      <h4 className="content_values_temp">
        <span className="px-4">Min: {Min}&deg;C</span>
        <span className="px-4">Max: {Max}&deg;C</span>
      </h4>
    );
  };
  return (
    <div className="container_general">
      {Loading ? (
        <ReactLoading
          type="spinningBubbles"
          className="spiner_"
          color={'white'}
        ></ReactLoading>
      ) : (
        <div className="container_weather">
          <h1>
            Country <span>{Country}</span>
          </h1>
          <span>
            {' '}
            <i
              className="wi wi-day-rain display-1 fa-lg positionIcon"
              color="white"
            ></i>
            <h2 className="py-2 temp_data">Temp: {Temp}&deg;C</h2>
            {MinmaxTemp()}
          </span>
          <h3 className="py-3 content_clima">{Clima}</h3>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
