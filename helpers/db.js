const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect( process.env.DB_STRING , { useCreateIndex: true, useNewUrlParser: true , useUnifiedTopology: true});
    mongoose.connection.on('open', () => {
        console.log('MongoDB : Connected');
    });

    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: error', err);
    });

    mongoose.Promise = global.Promise;
};

//'mongodb+srv://burak:1234abcd@movidb-fvma6.gcp.mongodb.net/moviDB?retryWrites=true&w=majority'