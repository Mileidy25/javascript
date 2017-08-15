/* const fs = require('fs');

const content = fs.readFile(process.argv[2],
  'utf8', (err,data) => {
    if (err) {
      console.log(err);
    }
      console.log(data.split('/n').length-1);
  }) */

  const fs = require('fs');

  const contents = fs.readFileSync(process.argv[2]);
  const lines = contents.toString().split('\n').length - 1;

  console.log(lines);
