var http = require('http')
var url = require('url')

var server = http.createServer(function(req, res) {


  var time = url.parse(req.url, true).query.iso
  var path = url.parse(req.url, true).pathname

  var date = new Date(time)

  if (path == '/api/parsetime') {
    res.writeHead(200, { 'content-Type' : 'application/json' })
    res.end(JSON.stringify({
              'hour' : date.getHours(),
              'minute' : date.getMinutes(),
              'second' : date.getSeconds()
            }))
  } else if (path == '/api/unixtime') {
    res.writeHead(200, { 'content-Type' : 'application/json' })
    res.end(JSON.stringify({
              'unixtime' : date.getTime()
            }))
  } else {
    res.writeHead(404)
    res.end('try a valid path!!!')
  }
})

server.listen(process.argv[2])