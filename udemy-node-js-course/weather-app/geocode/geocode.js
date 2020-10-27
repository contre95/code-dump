const request = require('request');


function Address(address, callback) {
  var encoded_address = encodeURIComponent(address);
  request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=' + encoded_address,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to reach the servers');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address');
    } else if (body.status === 'OK') {
      callback(undefined, {
        Address: body.results[0].formatted_address,
        lon: body.results[0].geometry.location.lng,
        lat: body.results[0].geometry.location.lat,
      });
    }
  });
}



module.exports = {
  Address
};
