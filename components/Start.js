// @flow
import React, {Component} from 'react'
import {StatusBar, StyleSheet, Platform} from 'react-native'
import Swiper from 'react-native-swiper'
import Welcome from './Welcome'
import AboutView from './AboutView'
import BasicArt from './BasicArt'
import InfoView from './InfoView'
import {ImaginationWrapper} from '../libs/imagination-react-native'
import Artworks from '../libs/Artworks'

export default class Start extends Component {
  constructor(props){
    super(props);
    this.state = {
      sendData: false,
    }

    this.buttonPressed = this.buttonPressed.bind(this);
  }

  buttonPressed(){
    console.log('button pressed');
    console.log(this.state.sendData);
    this.setState({ sendData: !this.state.sendData});
  }

  render(): * {
    return (
      <ImaginationWrapper style={styles.wrapper} sendData={this.state.sendData}>
        <StatusBar barStyle='light-content' />
          <Swiper style={styles.swiper} paginationStyle={styles.swiperPagination}>
            <Welcome buttonPressed={this.buttonPressed} sendData={this.state.sendData}/>
          </Swiper>
      </ImaginationWrapper>
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
