const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})

/* const fs = requiere ('fs');

fs.readdir(process.argv[2],
  (err,list) => {
    list.filter(item.indexOf('/') > = 0
  (process.argv[3]) > = 0)
    .map(item => console.log(item));
  }) */
