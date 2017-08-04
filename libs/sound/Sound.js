import { publish } from '../PubNub'

class Sound {
  // data is a String that has the name of the sound being sent
  soundSend = (data) => {
    console.log('INSIDE SOUND', data)
    publish('artist_mode', data);
  }
}

export default new Sound()
