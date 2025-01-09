require('dotenv').config();
const cors = require('cors');
const express = require('express');
const subscribeRouter = require('./route/subscribe');

const { urlencoded } = express;
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(urlencoded({ extended: true }));

require('./db');

app.use(cors({
  origin: process.env.FRONT_END,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
}));

app.use("/api", subscribeRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
