const {MongoClient, ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017/';
MongoClient.connect(url,(err,client)=> {
    if (err) {
        return console.log('Unable to connect to Mongo DB');
    }
    console.log('Connected to Mongo DB server Succesfully');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //    text: 'Something here',
    //    completed: false
    // }, (err,result)=>{
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });
    //
    // db.collection('Users').insertOne({
    //     name: 'Lucas',
    //     age: 22,
    //     location: 'Buenos Aires, Maritinez'
    // }, (err, result)=>{
    //     if (err){
    //         return console.log("Unable to add Doctument to Users Collection",err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    //Fetch Data

    // db.collection('Todos').find({text: 'Something there'}).toArray().then((docs) =>
    //     {
    //        console.log('Todos:');
    //        console.log(JSON.stringify(docs, undefined,2));
    //     },(err) => {
    //         console.log(err);
    //         console.log('Hola manola');
    //     }
    // );
    // db.collection('Todos').find({text: 'Something there'}).count().then((docs) =>
    //     {
    //        console.log('Todos:');
    //        console.log(JSON.stringify(docs, undefined,2));
    //     },(err) => {
    //         console.log(err);
    //         console.log('Hola manola');
    //     }
    // );

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b9f091f5e37676dc2d86be6')}).then((result)=> {
        console.log(result);
    });
    // db.collection('Todos').deleteMany().then((result)=>{
    //     console.log(result);
    // });









    // var asd = db.collection('Todos').find();
    // console.log(asd);
    client.close();
});