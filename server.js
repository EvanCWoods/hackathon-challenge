// Imports for app to run
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
var mysql = require('mysql2');

// Connect to the database
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'server_db'
});


// allow access to files in public folder
app.use(express.static("public"));


// get root and send the index.html file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// api end point to handle database queries
app.get("/api/servers", (req, res) => {
    const con = connection.connect("SELECT * FROM dummy_server", (err, results) => {
        if (err) {
            console.log(`Error \n ${err}`)
        } else {
            console.log(results);
        }
    });
});


// Run the app on PORT
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});