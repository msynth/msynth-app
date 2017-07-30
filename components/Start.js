// @flow
import React, {Component} from 'react'
import {StatusBar, StyleSheet, Platform} from 'react-native'
import Swiper from 'react-native-swiper'
import Welcome from './Welcome'
import God from './God'
import {MotionWrapper} from '../libs/motion'
// import subscribe from '../libs/PubNub'

export default class Start extends Component {
  constructor(props){
    super(props);
    this.state = {
      sendData: false,
      subscribers: 0
    }

    this.buttonPressed = this.buttonPressed.bind(this);
  }

  // componentWillMount() {
  //   // subscribe((response) => {
  //     // this.setState({subscribers: response.occupancy})
  //     // console.log(response)
  //   // })
  // }

  buttonPressed(){
    console.log('button pressed');
    console.log(this.state.sendData);
    this.setState({ sendData: !this.state.sendData});
  }

  render(): * {
    return (
      <MotionWrapper style={styles.wrapper} sendData={this.state.sendData}>
        <StatusBar barStyle='light-content' />
          <Swiper style={styles.swiper} paginationStyle={styles.swiperPagination}>
            <Welcome buttonPressed={this.buttonPressed} sendData={this.state.sendData} subscribers={this.state.subscribers}/>
            <God />
          </Swiper>
      </MotionWrapper>
    )
  }

}

let styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1
  },
  swiper: {
    marginTop: (Platform.OS === 'ios') ? 10 : 0
  },
  swiperPagination: {
    bottom: (Platform.OS === 'ios') ? '5%' : '10%'
  }
})
