const express = require('express')
const db = require('./db')



const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());

const port = 3000;
//pizza shop backend
app.get('/', (req, res) => {
  res.send('Welcome to the Pizza Shop!')
})




//import routes
const personRoutes = require('./routes/PersonRoutes');
const MenuRoutes = require('./routes/MenuRoutes');
//use routes
app.use('/person', personRoutes);
app.use('/order', MenuRoutes);
    

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})