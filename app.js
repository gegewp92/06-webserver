require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

const opts = {
  nombre: 'Gabriel',
  titulo: 'Curso de Node'
}

//Handlebars(template engine) ver documentacion https://github.com/pillarjs/hbs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials'); // tambien recibe un param opcional que es un callback por si hay un error   err => {}

//Servir contenido estatico
app.use( express.static('public') );

// app.get('/', (req, res) => {
//   res.send('Home page')
// })

// app.get('/hola-mundo', (req, res) => {
//     res.send('Hola Mundo')
//   })



//Renderizo una view con handlebars. (req, res) => {}  controlador que maneja la vista
app.get('/', (req, res) => {
  res.render('home', opts);
})

app.get('/generic', (req, res) => {
  res.render('generic', opts);
})

app.get('/elements', (req, res) => {
  res.render('elements', opts);
})

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html')
//   })

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html')
//   })

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
    //console.log(__dirname); -> E:\Cursos\Projects\curso-node\06-webserver
  })  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })