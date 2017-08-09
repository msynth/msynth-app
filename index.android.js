// @flow
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import Home from './components/Home'

export default class mSynth extends Component {
  render() {
    return (
      <Home />
    );
  }
}

AppRegistry.registerComponent('mSynth', () => mSynth);
