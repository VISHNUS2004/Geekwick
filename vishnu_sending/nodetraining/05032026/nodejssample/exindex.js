const express = require('express')

const app = express();

app.get('/firstsample',(req, res) => {
    res.send("Hello, Geekwick - TL")

});

app.listen(5000, () => {console.log('server is running on port 5000');});