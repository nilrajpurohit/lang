const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const port = 3000;
const app = express();
app.use(bodyparser.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send("Hello From Server !");
})

app.post('/enroll', (req, res) => {
  console.log(req.body);
  res.status(401).send({
    "message": "Data Recived !"
  })
})

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port)
})
