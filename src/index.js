require('dotenv').config();

const express = require('express');
const pruebaRouter = require('./routes/pruebaRouter')
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/prueba', pruebaRouter );

app.get('/', (req, res) =>{
    res.status(200).send('<h2>llama a la ruta especifica</2>');
});

app.listen(process.env.PORT, ()=> console.log('aplicación corriendo en el puerto 3000'))