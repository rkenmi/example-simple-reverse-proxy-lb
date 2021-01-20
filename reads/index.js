// index.js
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Read Request Sent!')
})
app.listen(5000, () => console.log('Read Server is up'));