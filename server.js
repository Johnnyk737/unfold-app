let express = require('express')
let router = express.Router
let path = require('path')

let app = express()

app.use(express.static('build'));

// console.log(__dirname)
app.get('/', function(req, res) {
  // res.json("hello node")
  res.sendFile('index.html', { root: './public' });
});

// app.use('/', router)

const port = process.env.PORT || 3000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
