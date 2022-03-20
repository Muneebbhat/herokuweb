const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const staticPath = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,'../templates/views')
const partialspath = path.join(__dirname,'../templates/partials')
const port = process.env.PORT || 8000
// console.log()

app.set('view engine', 'hbs')
hbs.registerPartials(partialspath)
app.set('views', viewspath )
app.use(express.static(staticPath))



app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/counter',(req,res)=>{
    res.render('counter')
})

app.listen(port,()=>console.log(`listening to the port ${port}`))



