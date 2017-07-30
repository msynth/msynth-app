const PubNub = require('pubnub');

const pubnub = new PubNub({
  publishKey : 'pub-c-f93b8ae2-0245-44ee-a7a4-43df0c64efd0',
  subscribeKey : 'sub-c-29c50ea0-74aa-11e7-8153-0619f8945a4f'
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
