const express = require('express');
const app = express();
const dotenv  = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(console.log('DB connected!')).catch(err => console.log(err));

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/posts', postRoute);

PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`)
})