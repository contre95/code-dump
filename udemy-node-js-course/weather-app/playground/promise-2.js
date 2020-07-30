const request = require('request');

var Address = (address) => {
  return new Promise((resolve, reject) => {
    var encoded_address = encodeURIComponent(address);
    request({
      url: 'http://maps.googleapis.com/maps/api/geocode/json?address=' + encoded_address,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to reach the servers' || body.status === 'ZERO_RESULTS');
      } else if (body.status === 'OK') {
        resolve({
          Address: body.results[0].formatted_address,
          lon: body.results[0].geometry.location.lng,
          lat: body.results[0].geometry.location.lat,
        });
      }
    });
  });
};

Address('Martinez, San Isidro').then((result) => {
  console.log(JSON.stringify(result));
}, (errorMsg) => {
  console.log(errorMsg);
});


module.exports = {
  Address
};
