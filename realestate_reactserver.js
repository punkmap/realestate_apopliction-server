const express = require('express');
const path = require('path');
const app = express();

const appDir = '../../sites/realestate/build'

app.use(express.static(path.join(__dirname, appDir)));
app.get('/realestatetest', function(req, res) {
    res.send('﴾͡๏̯͡๏﴿ O`RLY? [̲̅$̲̅(̲̅5̲̅)̲̅$̲̅] '+path.join(__dirname, appDir, 'index.html'));
});
app.get('/realestate', function(req, res) {
  res.sendFile(path.join(__dirname, appDir, 'index.html'));
});

//app.listen(80);
app.listen(3002);