import React, { Component } from 'react';

import { Word } from './components/Word';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Word wordInfo={{ en: 'One', vn: 'Mot', isMemorized: true }} />
        <Word wordInfo={{ en: 'Two', vn: 'Hai', isMemorized: false }} />
        <Word wordInfo={{ en: 'Three', vn: 'Ba', isMemorized: false }} />
        <Word wordInfo={{ en: 'Four', vn: 'Bon', isMemorized: true }} />
      </div>
    );
  }
}
