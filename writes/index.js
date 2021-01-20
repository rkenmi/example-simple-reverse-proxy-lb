// index.js
const express = require('express');
const app = express();
app.post('/', (req, res) => {
    res.send('Write Request Sent!')
    res.status(200).end()
})
app.listen(5001, () => console.log('API Server is up'));