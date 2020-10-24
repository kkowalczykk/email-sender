const express = require("express");
require("dotenv").config();
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
      res.send('email-sender');
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port:  ${PORT}`));


app.use('/send', require('./sendRouter'));