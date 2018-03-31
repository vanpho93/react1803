import React, { Component } from 'react';
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

class Word extends Component {
  render() {
    const { en, vn } = this.props;
    return (
      <div>
        <h3>{en}</h3>
        <p>{vn}</p>
      </div>
    );
  }
}
