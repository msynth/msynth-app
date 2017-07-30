import React, { Component } from 'react'
import {View} from 'react-native'
import Imagination from './Imagination'

export default class ImaginationWrapper extends Component {

  constructor (props: *) {
    super(props)
    this.state = {
      color: props.defaultColor || '#2EB1FF'
    }
  }

  componentWillReceiveProps (nextProps) {
    Imagination.buttonPressed((color) => this.setState({color}), nextProps.sendData)
  }

  componentWillUnmount () {
    Imagination.stop()
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
