import React, { Component } from 'react'
import {View} from 'react-native'
import Motion from './Motion'

export default class MotionWrapper extends Component {

  constructor (props: *) {
    super(props)
    this.state = {
      color: props.defaultColor || '#2EB1FF'
    }
  }

  componentWillReceiveProps (nextProps) {
    Motion.buttonPressed((color) => this.setState({color}), nextProps.sendData)
  }

  componentWillUnmount () {
    Motion.stop()
  }

  render() {
    var {color} = this.state
    return (
      <View style={{backgroundColor: color}}>
        {this.props.children}
      </View>
    );
  }
}
