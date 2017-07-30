// @flow
import React, {PureComponent} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity, Linking, Platform, TouchableHighlight} from 'react-native'
import {logo} from '../libs/Images'

export default class Welcome extends PureComponent {
  constructor(props){
    super(props);
  }

  render(): * {
    const buttonLabel = this.props.sendData ? 'Stop' : 'Start';
    return <View style={styles.wrapper}>
      <Image source={logo} style={styles.logo} />
      <TouchableOpacity style={styles.button}>
        <TouchableHighlight onPress={() => this.props.buttonPressed()}>
          <Text style={styles.credit}>{buttonLabel}</Text>
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
    width: 200,
    height: 80,
    resizeMode: 'contain'
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: (Platform.OS === 'ios') ? '20%' : '15%'
  },
  credit: {
    fontSize: 12,
    color: '#ffffff'
  },
  matzielabLogo: {
    width: 20,
    height: 20,
    marginLeft: 5,
    marginRight: 5
  }
})
