const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log('request made')
  console.log(req.url, req.method)

  res.setHeader("Content-Type", 'text/html')
  

  let path = ''


  switch(req.url) {
    case '/': {
      res.statusCode = 200
      path += 'index.html'
      break
    }
    case '/about': {
      res.statusCode = 200
      path += 'about.html'
      break
    }
    case '/contact-me': {
      res.statusCode = 200
      path += 'contact-me.html'
      break
    }
    default: {
      res.statusCode = 404
      path += '404.html'
    }
  }

  fs.readFile(path, (err, data) => {
    if(err) console.log(err)
    res.end(data)
  })

})

server.listen(8080, "localhost", () => {
  console.log('listening on port 8080')
})