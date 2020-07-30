var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Contre'
  };
  setTimeout(callback(user),1000);
};

getUser(3,(userObject) => {
  console.log(userObject);
});
