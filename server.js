const express = require('express')
var morgan = require('morgan')
var path = require('path');

const app = express()
const port = 3000

// request logging
app.use(morgan('combined'))
// static files
var public = path.join(__dirname, '');
app.use('/', express.static(public));
// url-encoded forms
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(public, 'index.html'));
});

app.post('/get-data', (req, res) => {
    console.log('form data: '+JSON.stringify(req.body)) // form data
    const n = 3;
    const x = Array.from({length: n}, (_, i) => i );
    const y = Array.from({length: n}, () => Math.floor(Math.random() * 10) );
    // NB : nested arrays for restyle() syntax ! see https://github.com/plotly/plotly.js/issues/167#issuecomment-169720617 
    obj = {
        x: [x],
        y: [y]
    }

    // console.log(JSON.stringify(obj)) // debug
    res.send(obj)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})