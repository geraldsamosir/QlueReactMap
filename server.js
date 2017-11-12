const express = require('express')
const path = require('path');
const app = express()

app.set('port', (process.env.PORT || 5000))

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})