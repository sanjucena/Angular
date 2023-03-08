const express = require('express');
const app = express();

app.get('/backend', (req, res) => {
    res.json({
        "who are you" : "I am NodeJS backend"
})
})

app.get('/name', (req, res) => {
    res.json({
        "what you do" : "I am Developer"
})
})

app.get('/nodeDeveloper', (req, res) => {
    res.send('<h1> want 2 become node developer</h1>');
})

app.use(express.static('front-end-angular-test'));

app.listen(3000, (req, res) => {
    console.log('Express API is running at port 3000');
})