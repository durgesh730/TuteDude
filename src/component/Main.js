import React, { Component } from 'react';
import First from './First';
import Fourth from './Fourth';
import Navbar from './Navbar';
import Second from './Second';
import Third from './Third';

export default class Main extends Component {
  render() {
    return (
      <>
        <Navbar />
        <First head="UI/UX > Refer & Earn"/>
        <Second />
        <Third />
        <Fourth/>
      </>
    )
  }
}
