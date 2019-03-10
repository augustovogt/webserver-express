const express = require('express')
const app = express();

const hbs = require ('hbs');

require('./views/hbs/helpers/helpers');

const port = process.PORT || 3000


app.use( express.static(__dirname + '/public'));
hbs.registerPartials( __dirname + '/views/parciales')

app.set('view engine', 'hbs');

// Helpers hbs



app.get('/',  (req, res) =>{

  res.render('home',{
      nombre: "AuGusto"
  });
});

app.get('/about',  (req, res) =>{

  res.render('about');
});


 
app.listen(port,()=>{
    console.log(`Escuchando en el puerto ${ port }`);
})
