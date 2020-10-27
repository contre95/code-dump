const yargs = require('yargs');
const geocode = require('./geocode/geocode');
// const geocode = require('./playground/promise-2');
const weather = require('./weather/weather');

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


geocode.Address(argv.address, (errorMessege, results) => {
  if (errorMessege) {
    console.log(errorMessege);
  } else {
    // console.log(JSON.stringify(results));
    console.log(results);
    weather.Weather(parseFloat(results.lon), parseFloat(results.lat), 'a644310bfd21c1b4b2f50e48fda90666', (errorMessege, results) => {
      if (errorMessege) {
        console.log(errorMessege);
      } else {
        console.log(results);
      }
    });
  }
});

// var martinezID = 3435910;
// var appID = "a644310bfd21c1b4b2f50e48fda90666";


// https://api.openweathermap.org/data/2.5/weather?lat=-34.61&lon=-58.38&APPID=a644310bfd21c1b4b2f50e48fda90666&units=metric
// https://api.openweathermap.org/data/2.5/weather?id=3435910&APPID=a644310bfd21c1b4b2f50e48fda90666
