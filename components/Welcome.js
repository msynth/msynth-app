// @flow
import React, {PureComponent} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity, Linking, Platform, TouchableHighlight} from 'react-native'
import {logo} from '../libs/Images'

export default class Welcome extends PureComponent {
  constructor(props){
    super(props);
  }

  render(): * {
    const buttonLabel = this.props.sendData ? 'stop' : 'start';

    return <View style={styles.wrapper}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.info}># of Fans: {this.props.subscribers}</Text>
      <TouchableOpacity style={styles.button}>
        <TouchableHighlight underlayColor='transparent' onPress={() => this.props.buttonPressed()}>
          {/* conditional button style changing based on the prop. via: http://www.terrydiederich.com/changing-style-as-state-changes-in-react-native/ */}
          <View style={[styles.buttonBoxStart, this.props.sendData && styles.buttonBoxStop]}>
            <Text style={[styles.buttonLabelStart, this.props.sendData && styles.buttonLabelStop]}>{buttonLabel}</Text>
          </View>
        </TouchableHighlight>
      </TouchableOpacity>
    </View>
  }

}

let styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    width: 360,
    height: 144,
    marginTop: '40%',
    resizeMode: 'contain'
  },
  info: {
    position: 'absolute',
    backgroundColor: '#f26051',
    top: 50,
    right: 0,
    padding: 10
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: (Platform.OS === 'ios') ? '20%' : '15%'
  },
  buttonBoxStart: {
    // backgroundColor: 'rgba(139,168,42, 0.75)', // Outside Lands green
    backgroundColor: 'rgba(1,41,47, 0.65)', // Outside Lands dark forest green #026978
    width: 250,
    height: 80,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#014457' // Outside Lands dark blue
  },
  buttonBoxStop: {
    backgroundColor: 'rgba(242, 96, 81, 0.95)' // Outside Lands red
  },
  buttonLabelStart: {
    fontSize: 30,
    fontWeight: '700',
    // color: '#014457', // Outside Lands dark blue
    color: '#fdf9d7', // Outside Lands beige yellow
    textAlign: 'center'
  },
  buttonLabelStop: {
    color: '#ffffff'
  }
})
