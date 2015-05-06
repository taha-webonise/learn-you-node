var fs = require('fs')
var path = require('path')

module.exports = function(dirname, extname, callback) {
  fs.readdir(dirname, function(err, list) {
    if (err)
      return callback(err)
    list = list.filter(function (file) {
      return (path.extname(file) == '.' + extname)
    })
    callback(null, list)
  })
}