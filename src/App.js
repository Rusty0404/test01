import React from 'react';
import { render } from 'react-dom';
import './assets/styles/style.css';
import HeaderComponent from "./components/Header";
import Slider from "./components/Slider";
import Main from "./components/Main";
import MyMaps from "./components/Maps";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  render() {
    return(
        <div>
          <HeaderComponent />
          <Slider />
         <Main />
        </div>
    );
  }
}
