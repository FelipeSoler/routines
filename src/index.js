// Módulos 
const express = require('express');
const path = require('path');
const app = express();

// Settings 
app.set('port', 4000); // Configuración del puerto
app.engine('html',require('ejs').renderFile); // Motor de plantilla 
app.set('view engine', 'ejs'); // Configuración del motor de plantillas.
app.set('views', path.join(__dirname, 'views')); // Configuración de la ruta views.

// Midlewares
app.use(express.urlencoded({extended : false}));

// Routes
app.use(require('./routes/'));

// Static Files 

app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
}); // Configuración del puerto (4000)
