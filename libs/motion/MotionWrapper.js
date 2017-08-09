import React, { Component } from 'react'
import {View, Dimensions, Image} from 'react-native'
import Motion from './Motion'
import {ball} from '../Images'

export default class MotionWrapper extends Component {

  constructor (props: *) {
    super(props)
    this.state = {
      color: props.defaultColor || '#2EB1FF',
      x: Dimensions.get('window').width / 2,
      y: Dimensions.get('window').height / 2,
    }
  }

  componentWillReceiveProps (nextProps) {
    Motion.buttonPressed((color) =>
      this.setState({color}),
      (x,y) => {
        x = this.scaleValue(x, 'width');
        y = this.scaleValue(y, 'height');
        this.setState({x, y})
      },
      nextProps.sendData
    )
  }

  componentWillUnmount () {
    Motion.stop()
  }

  scaleValue(value, parameter) {
    value = value + 1;
    value = value * (Dimensions.get('window')[parameter] / 2);
    if(parameter === 'height'){
      value = Dimensions.get('window').height - value;
    }
    return value;
  }

  render() {
    var {color} = this.state
    return (
      <View style={{backgroundColor: color}}>
        <Image style={{top: this.state.y -25, left: this.state.x -25, position: 'absolute'}} source={ball}/>
        {this.props.children}
      </View>
    );
  }
}
