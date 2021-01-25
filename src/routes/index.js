const express = require('express');
const controller = require('../controllers/customerControllers');
const router = express.Router();


router.get('/', (req, res) =>{
    res.render('index.html',{title : 'Seguimiento'});
}); // Cuando accedo a la raíz del proyecto me retorna views/index.ejs

router.get('/ejercicios', (req, res) =>{
    res.render('ejercicios.html', {title : 'Ejercicios'});
});

router.post('/agregar', controller.agregar);


module.exports = router;