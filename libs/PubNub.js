const PubNub = require('pubnub');

const pubnub = new PubNub({
  publishKey : 'pub-c-ff1da703-9b2a-41df-bdd4-96e21bbfb0b8',
  subscribeKey : 'sub-c-d1024ca8-74bb-11e7-8153-0619f8945a4f'
})
function publish (data) {
  const publishConfig = {
    channel : 'sensor_data',
    message : data
  };
  // console.log('SANITY MF:', publishConfig);
  console.log('publishConfig', publishConfig);
  pubnub.publish(publishConfig, function(status, response) {
    console.log(status, response);
  });
}

export default publish;
