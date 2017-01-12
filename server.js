const express = require('express');
const app = express();

// Since the root/src dir contains our index.html
app.use(express.static(__dirname + '/src/'));
app.listen(process.env.PORT || 8080);
