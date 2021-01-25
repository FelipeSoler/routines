// Módulos
const db = require('../dbConnection');

const controller = {};
const connection = db();

controller.agregar = (req, res) => {
    const datos = req.body;
    /* const {nombreEjercicio, grupoMuscular, equipamiento} = req.body; */
    connection.query("INSERT INTO ejercicios SET ?", [datos], (err, rows) => {
        if(err) console.error(err);
        res.redirect('/');
    })
};



module.exports = controller;