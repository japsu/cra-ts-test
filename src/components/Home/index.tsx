import * as React from 'react';
import { Component } from 'react';

import './index.css';


const logo = require('./logo.svg');


export default class Home extends Component<null, null> {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/Home.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}