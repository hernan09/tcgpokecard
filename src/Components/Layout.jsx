import React, { Component } from 'react';
import './layaout.css';
import WeatherComponent from './WeatherComponent/default';
import FormComponentData from './FormDataEntry/default';

class LayoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <WeatherComponent></WeatherComponent>
      </>
    );
  }
}

export default LayoutPage;
