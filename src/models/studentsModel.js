
// importo mongoose
const mongoose = require('mongoose');

// para utilizar squemas de mongoose
const Schema = mongoose.Schema;

// defino el esquema de mi entidad. String , Number, son clases de mongoose no tipos de datos
const StudentSchema = new Schema({
    
    nombre: String,
    edad: Number,
    curso: String,
    altura: Number
});

module.exports = mongoose.model('Student', StudentSchema);