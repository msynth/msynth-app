const PubNub = require('pubnub');

const pubnub = new PubNub({
  publishKey : 'pub-c-ff1da703-9b2a-41df-bdd4-96e21bbfb0b8',
  subscribeKey : 'sub-c-d1024ca8-74bb-11e7-8153-0619f8945a4f'
})
function publish (channelName, data) {
  const publishConfig = {
    channel : channelName,
    message : data
  };


  console.log('publishConfig', publishConfig);
  pubnub.publish(publishConfig, function(status, response) {
    console.log(status, response);
  });
}

// function subscribe(callback){
//   // console.log('inside Subscribe block', PubNub.hereNow)
//   pubnub.hereNow(
//     {
//         channels: ["sensor_data"],
//         channelGroups : [],
//         includeUUIDs: false,
//         includeState: true
//     },
//     function (status, response) {
//       console.log(response)
//       callback(response)
//         // handle status, response
//     }
//   );
// }


// export default publish;
export default publish;
