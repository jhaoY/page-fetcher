// import required modules
const net = require('net');
const fs = require('fs');
const request = require('request');

// get first two arguments from CLI
const url = process.argv[2];
const outputFile = process.argv[3];

// use request function from request library
request(url, (error, response, body) => {
  if (error) {
    console.log('Error!', error);
  }
  fs.writeFile(outputFile, body, err => {
    if (err) {
      console.log(err);
    } else {
      fs.stat(outputFile, (err, stats) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Downloaded and saved ${stats.size} bytes to ${outputFile}`);
        }
      });
    }
  });
});