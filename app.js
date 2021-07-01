const express = require('express');
var path = require('path');
const app = express();
const port = 6969;


app.use(express.static(path.join(__dirname,)));

app.get('', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})



app.listen(port, () => console.info(`Listening on port ${port}`))