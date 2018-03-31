import React, { Component } from 'react';

import { Word } from './components/Word';
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  render() {
    const url = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    return (
      <div>
        <Word en="One" vn="Mot" />
        <Word en="Two" vn="Hai" />
      </div>
    );
  }
}
