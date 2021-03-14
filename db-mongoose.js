
const mongoose = require('mongoose');

// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://localhost:27017/VaguecationDB",
//     {useNewUrlParser:true}
//   );

function dbConnect(url = "mongodb://localhost:27017/VaguecationDB"){
    return mongoose.connect(url,{ useUnifiedTopology: true })
    .then(() => console.log(`Mongoose is connect to  ${url}`))
    .catch(err => 
        console.error('Mongoose failed to connect'))

}


module.exports = {
    dbConnect,
}