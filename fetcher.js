const fs = require('fs');
const request = require(`request`);

const args = process.argv.slice(2); // input from CL

//request
request(args[0], function (error, response, body) {
  if (error) {
    console.error('error:', error); // Print the error if one occurred
  }

  //write file 
  fs.writeFile(args[1], body, err => {
    if (err) {
      console.error(err);
    }

    console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`)
  });
});
