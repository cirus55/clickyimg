//Require express and initialize 
const express = require('express');
const app = express();

//Define middleware
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
