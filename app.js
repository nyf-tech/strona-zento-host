const path = require('path');

const express = require('express');

const port = 80;

const app = express();
app.use(express.static(path.join(__dirname, 'view')))
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/view/index.html`);
});
app.listen(80, () => {
    console.log('Application listening on port 80!');
});
