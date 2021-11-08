//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/alexandria'));

// app.get('/*', function(req,res) {
// res.sendFile(path.join(__dirname+'/dist/alexandria/index.html'));
// });

app.get('*', (req, res) => {
    res.sendFile(`/dist/alexandria/index.html`); // load the single view file (angular will handle the page changes on the front-end)
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
