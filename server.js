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

app.get('/', (req, res) => {
    res.sendFile(path.join(public, 'index.html'));
});

app.post('/get-data', (req, res) => {
    const n = 3;
    const x = Array.from({length: n}, (_, i) => i );
    const y = Array.from({length: n}, () => Math.random() );
    obj = [{
        x: x,
        y: y
    }]
    console.log(JSON.stringify(obj)) // debug
    res.send(obj)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})