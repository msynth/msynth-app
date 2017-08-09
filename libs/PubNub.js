const PubNub = require('pubnub');

export const pubnub = new PubNub({
  publishKey : 'pub-c-ff1da703-9b2a-41df-bdd4-96e21bbfb0b8',
  subscribeKey : 'sub-c-d1024ca8-74bb-11e7-8153-0619f8945a4f',
  uuid: new Date().toISOString()
})

export function publish (channelName, data) {
  const publishConfig = {
    channel : channelName,
    message : data
  };

  // UNCOMMENT to see message sent to Pubnub
  // console.log('publishConfig', publishConfig);

  pubnub.publish(publishConfig, function(status, response) {
    console.log(status, response);
  });
}

export function subscribe(channelNamesArray) {
  pubnub.subscribe({
    channels: channelNamesArray,
    withPresence: true
  })
}

export function unsubscribe(channelNamesArray) {
  pubnub.unsubscribe({
    channels: channelNamesArray
  })
}

// channelNamesArray: [Array] of strings, containing channel names
export function hereNow(channelNamesArray) {
  // returning a promise since hereNow() returns a promise
  return pubnub.hereNow({
    channels: channelNamesArray,
    includeUUIDs: true,
    includeState: true
  })
}
