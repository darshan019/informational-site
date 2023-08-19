const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log('request made')
  console.log(req.url, req.method)

  res.setHeader("Content-Type", 'text/html')
  

  let path = ''

  if(req.url == '/')  path += 'index.html'
  else if(req.url == '/about')  path += 'about.html'
  else if(req.url == '/contact-me')  path += 'contact-me.html'
  else  path += '404.html'

  fs.readFile(path, (err, data) => {
    if(err) {
      console.log(err)
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end(`<h1>Error: 404</h1><p>The page you are looking for doesn't exist.</p> <a href="/">Back home.</a>`);
    }
    res.end(data)
  })

})

server.listen(8080, "localhost", () => {
  console.log('listening on port 8080')
})