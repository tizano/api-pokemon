const mongoose = require('mongoose');

const mongoUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/tractr-api`;

mongoose.connect(
  mongoUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,
    w: 'majority'
  },
  (err) => {
    if (!err) console.log('Mongodb connected');
    else console.error(`Connection error :  ${err}`);
  }
);
