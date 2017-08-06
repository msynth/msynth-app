// @flow
import React, {Component} from 'react'
import {StatusBar, StyleSheet, Platform} from 'react-native'
import Swiper from 'react-native-swiper'
import Welcome from './Welcome'
import God from './God'
import {MotionWrapper} from '../libs/motion'
import { pubnub, subscribe, hereNow, unsubscribe } from '../libs/PubNub'

export default class Start extends Component {
  constructor(props){
    super(props);
    this.state = {
      sendData: false,
      subscribers: 0
    }

    this.buttonPressed = this.buttonPressed.bind(this);
    this.hereNow = hereNow.bind(this)


  }

  componentDidMount() {
    subscribe(['sensor_data-pnpres']);

    // NOTE: This is not working to get & set the initial occupancy.
    // this.fetchSubscribers();

    // pubnub presence callback function
    pubnub.addListener({
        presence: (presenceEvent) => {
          // console.log('LISTENER: PRESENCE EVENT OCCUPANCY', presenceEvent.occupancy)
          this.updateSubscribers(presenceEvent.occupancy)
        }
    })

  }

  // uses pubnub's hereNow function to query the channel
  fetchSubscribers() {
    console.log('COMPONENT DID MOUNT... fetchSubscribers')
    this.hereNow(['sensor_data'])
      .then((response) => {
        // console.log('HERENOW complete response', response)
        this.setState({subscribers: response.totalOccupancy})
        // this.updateSubscribers(response.totalOccupancy)
      })
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
  }

  updateSubscribers(occupancy) {
    // console.log('UPDATING OCCUPANCY WITH: ', occupancy)
    this.setState({ subscribers: occupancy })
  }

  buttonPressed() {

    if(!this.state.sendData) {
      subscribe(['sensor_data']);
    } else {
      unsubscribe(['sensor_data']);
    }

    this.setState({ sendData: !this.state.sendData});
  }

  render(): * {
    var { sendData, subscribers } = this.state
    return (
      <MotionWrapper style={styles.wrapper} sendData={sendData}>
        <StatusBar barStyle='light-content' />
          <Swiper style={styles.swiper} paginationStyle={styles.swiperPagination}>
            <Welcome buttonPressed={this.buttonPressed} sendData={sendData} subscribers={subscribers}/>
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
