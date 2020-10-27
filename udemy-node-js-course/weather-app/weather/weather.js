const request = require('request');


function Weather(lon, lat, appID, callback) {
  // console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${appID}&units=metric`);
  request({
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${appID}&units=metric`,
    json: true
  }, (error, response, body) => {
    if (error || body.cod=='400') {
      callback('Error el obtener el tiempo');
      console.log("EROR",body);
    } else {
      callback(undefined, {
        temperature: body.main.temp,
        humidity: body.main.humidity
      });
    }
  })
}

module.exports = {
  Weather
};
