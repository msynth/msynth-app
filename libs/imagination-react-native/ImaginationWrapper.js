import React, { Component } from 'react'
import {View} from 'react-native'
import Imagination from './Imagination'

export default class ImaginationWrapper extends Component {
  props: {defaultColor?: string}
  state: {color: string}

  constructor (props: *) {
    super(props)
    this.state = {
      color: props.defaultColor || '#2EB1FF'
    }
  }

  componentDidMount () {
    Imagination.onColorChange((color) => this.setState({color}))
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
