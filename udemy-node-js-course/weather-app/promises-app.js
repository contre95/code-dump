const yargs = require('yargs');
const geocode = require('./geocode/geocode');
// const geocode = require('./playground/promise-2');
const weather = require('./weather/weather');
const axios = require('axios');
const argv = yargs
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Address to fetch weather',
      string: true
    },
    cityID: {
      demand: false,
      alias: 'c',
      describe: 'City ID to provide weather info',
      string: false,
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  var encoded_address = encodeURIComponent(argv.address);
  var geocode_url = 'http://maps.googleapis.com/maps/api/geocode/json?address=' + encoded_address;

axios.get(geocode_url).then((response)=> {
  if (response.data.status === "ZERO_RESULTS") {
    throw new Error('Unable to get to the servers');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var lon = response.data.results[0].geometry.location.lng;
  console.log(response.data.results[0].formatted_address);
  var weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=a644310bfd21c1b4b2f50e48fda90666&units=metric`;
  return axios.get(weatherURL);
}).then((response)=>{
  console.log(response.data.main.temp);
}).catch((e)=>{
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connecto to servers');
  }
})


// var martinezID = 3435910;
// var appID = "a644310bfd21c1b4b2f50e48fda90666";


// https://api.openweathermap.org/data/2.5/weather?lat=-34.61&lon=-58.38&APPID=a644310bfd21c1b4b2f50e48fda90666&units=metric
// https://api.openweathermap.org/data/2.5/weather?id=3435910&APPID=a644310bfd21c1b4b2f50e48fda90666
