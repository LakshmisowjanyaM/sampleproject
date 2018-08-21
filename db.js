let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect("mongodb://root:message123@ds161551.mlab.com:61551/messagestore", {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

// // mongoose.connect("mongodb://root:root@ds213229.mlab.com:13229/messageStore");
// mongoose.connect("mongodb://root:root@ds161551.mlab.com:61551/messagestore");
//mongoose.connect('mongodb://127.0.0.1/messageStore');