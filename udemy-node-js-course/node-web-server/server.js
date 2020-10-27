const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();


hbs.registerPartials(__dirname + '/views/partials/');

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.set('view engine', 'hbs');



app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now} : ${req.method} ${req.url}`;
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log("Unable to write the log");
    }
  });
  console.log(log);
  next();
});

app.use( (req,res,next)=>{
  res.render('maintenance.hbs');
});

app.use(express.static(__dirname + '/public'));
app.get('/blog', (req, res) => {
  res.render('blog.hbs', {
    page_name: 'My blg',
    page_title: 'My Blog'
  })
});

app.get('/', (req, res) => {
  res.render('welcome.hbs', {
    minutes: new Date().getMinutes(),
    hour: new Date().getHours(),
    page_name: "Home Page",
    page_title: "Contre Web"
  });
});

app.get('/bad', (req, res) => {
  // console.log(req);
  res.send({
    errorMessege: 'Unable to get what you want'
  });
});

app.listen(8080, () => {
  console.log('Server is up on por 8080');
});
