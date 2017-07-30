import { Accelerometer } from 'react-native-sensors'
import { Platform } from 'react-native'
import publish from '../PubNub'
// import { debounce } from 'lodash'

// Values for scale
let ACCELEROMETER_MIN = Platform.OS === 'ios' ? 1 : -10
let ACCELEROMETER_MAX = Platform.OS === 'ios' ? -1 : 10

// const debouncedPublish = debounce(publish, 500)

class Motion {
  accelerationObservable: undefined
  updateInterval: 1000

  onColorChange = (colorChanged: Function) => {
    this.accelerationObservable = new Accelerometer({
      updateInterval: this.updateInterval
    })
    this.accelerationObservable.subscribe((data) => {
      // console.log('THIS IS IT - GO GO:', data);
      // debouncedPublish(data);
        publish(data);
      return rgbFromAccelerometer(data.x, data.y, data.z, (rgb) => colorChanged(rgb))
    })
  }

  buttonPressed = (colorChanged, sendData) => {
    if(sendData){
      this.onColorChange(colorChanged);
    } else {
      this.stop();
    }
  }

  stop = () => {
    this.accelerationObservable.stop()
  }
}

let rgbFromAccelerometer = (x: number, y: number, z: number, callback: Function): string => {
  let scaledX = x+(0-(ACCELEROMETER_MIN))
  let scaledY = y+(0-(ACCELEROMETER_MIN))
  let scaledZ = z+(0-(ACCELEROMETER_MIN))

  let xPercentage = makeBetween1And0(scaledX / (ACCELEROMETER_MAX * 2))
  let yPercentage = makeBetween1And0(scaledY / (ACCELEROMETER_MAX * 2))
  let zPercentage = makeBetween1And0(scaledZ / (ACCELEROMETER_MAX * 2))

  let R = Math.round(255 * xPercentage)
  let G = Math.round(255 * yPercentage)
  let B = Math.round(255 * zPercentage)

  callback(`rgb(${R}, ${G}, ${B})`)
}

let makeBetween1And0 = (num: number): number => {
  return num > 1 ? 1 : num < 0 ? 0 : num
}

export default new Motion()
