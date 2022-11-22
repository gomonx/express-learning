const express = require('express')

// make express object
const app = express()

// defind views folder 
app.set('views', __dirname + '/views') 
//or use app.use(express.static('views'));

// set template engine
app.set('view engine', 'pug')

// render home page with out title
app.get('/', function (req, res) {
  res.render('index')
})

// render about page with valiables
app.get('/about', function (req, res) {
  res.render('about',{
    title:'ABOUT',
    message:'about page',
    tools:['Node.js','Express.js','Pug.js']
  })
})

// set serve port
app.listen(3000)
