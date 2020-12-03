// const express = require('express');
const mongoose = require('mongoose');
const Student = require('../models/studentsModel')

mongoose.connect(`mongodb+srv://ferbert15:${process.env.MATLASSPASS}@cluster0.xz1d7.mongodb.net/${process.env.NAME}?retryWrites=true&w=majority`,{useNewUrlParser:true, useUnifiedTopology:true})


module.exports = {
    getStudents: async function(req,res){
        const studentList = await Student.find();
        console.log('respuesta de la base de datos', studentList);
        // res.send('obtener estudiantes');
        res.json(studentList)
    },
    updateStudent: async function(req,res){
        // const newStudent = req.body;
        await Student.updateOne({nombre:req.body.nombre},
            {nombre: req.body.nuevonombre});
        res.send('actualizado')

    },
    addStudent: async function(req,res){
        // creo un nuevo modelo de student
        const studentToAdd = new Student();

        studentToAdd.nombre = req.body.nombre;
        studentToAdd.edad= req.body.edad;
        studentToAdd.curso= req.body.curso;
        studentToAdd.altura= req.body.altura;

        await studentToAdd.save();
        res.send('estudiante añadido')
        
    },
    eraseStudent: async function(req, res){

        await Student.deleteOne({nombre:req.body.nombre});

        res.send('eliminado');
    }
    
}