// @flow
import React, {PureComponent} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity, Platform, TouchableHighlight} from 'react-native'
import {god} from '../libs/Images'
import publish from '../libs/PubNub'
import pubnubClient from '../libs/pubnubClient'
import sound from '../libs/sound/Sound'

const DEFAULTS = ['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4', 'Sample 5'];

export default class God extends PureComponent {

  constructor () {
    super();

    this.state = {
      textForButtons: DEFAULTS
    }
  }

  componentWillMount () {
    pubnubClient.addListener({
      message: (message) => {
        this.setState({ textForButtons: message.message })
      }
    });

    // pubnubClient.subscribe({
    //   channels: ['update_samples']
    // });
  }

  publishSound (sound) {
    publish('artist_mode', sound);
  }

  // render () {
  //   return (
  //     <View style={styles.wrapper}>
  //       <Image source={logo} style={styles.logo} />
  //       <TouchableOpacity style={styles.button}>
  //         {this.state.textForButtons.map((text, i) => (
  //           <TouchableHighlight underlayColor='transparent' onPress={() => this.publishSound(`bassDrop${i}`)} key={`button-${i}`}>
  //             {/* conditional button style changing based on the prop. via: http://www.terrydiederich.com/changing-style-as-state-changes-in-react-native/ */}
  //             <View style={styles.buttonBoxStart}>
  //               <Text style={styles.buttonLabelStart}>{text}</Text>
  //             </View>
  //           </TouchableHighlight>
  //         ))}
  //       </TouchableOpacity>
  //     </View>
  //   )
  // }

  bassDrop0() {
    sound.soundSend('bassDrop0')
  }
  bassDrop1() {
    sound.soundSend('bassDrop1')
  }
  bassDrop2() {
    sound.soundSend('bassDrop2')
  }
  bassDrop3() {
    sound.soundSend('bassDrop3')
  }
  bassDrop4() {
    sound.soundSend('bassDrop4')
  }

  render(): * {
    const buttonLabel = 'bass drop'

    return <View style={styles.wrapper}>
      <Image source={god} style={styles.logo} />
      <TouchableOpacity style={styles.button}>
        <TouchableHighlight underlayColor='transparent' onPress={() => this.bassDrop0()}>
          {/* conditional button style changing based on the prop. via: http://www.terrydiederich.com/changing-style-as-state-changes-in-react-native/ */}
          <View style={styles.buttonBoxStart}>
            <Text style={styles.buttonLabelStart}>1</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='transparent' onPress={() => this.bassDrop1()}>
          {/* conditional button style changing based on the prop. via: http://www.terrydiederich.com/changing-style-as-state-changes-in-react-native/ */}
          <View style={styles.buttonBoxStart}>
            <Text style={styles.buttonLabelStart}>2</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='transparent' onPress={() => this.bassDrop2()}>
          {/* conditional button style changing based on the prop. via: http://www.terrydiederich.com/changing-style-as-state-changes-in-react-native/ */}
          <View style={styles.buttonBoxStart}>
            <Text style={styles.buttonLabelStart}>3</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='transparent' onPress={() => this.bassDrop3()}>
          {/* conditional button style changing based on the prop. via: http://www.terrydiederich.com/changing-style-as-state-changes-in-react-native/ */}
          <View style={styles.buttonBoxStart}>
            <Text style={styles.buttonLabelStart}>4</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='transparent' onPress={() => this.bassDrop4()}>
          {/* conditional button style changing based on the prop. via: http://www.terrydiederich.com/changing-style-as-state-changes-in-react-native/ */}
          <View style={styles.buttonBoxStart}>
            <Text style={styles.buttonLabelStart}>5</Text>
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
    width: 200,
    height: 80,
    marginTop: '10%',
    resizeMode: 'contain'
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
    borderColor: '#014457', // Outside Lands dark blue
    marginBottom: 10
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
