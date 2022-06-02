const concat = require('concat-files');
 
  concat([
    "./src/Action.mjs",
    "./src/Pipe.mjs",
  ], "./prebuild/pipe.mjs", function(err) {
    if (err) throw err
    console.log('done');
  });