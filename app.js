const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {

    res.writeHead(200, { 'content-type': 'text/html' });
    fs.createReadStream('index.html').pipe(res);
  });
 


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server Running.');
});