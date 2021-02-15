const express=require("express")
const server=express()
server.get("/", function respuesta(peticion, respuesta){
    respuesta.send("Hola mundo")
})

server.get("/ruta", function respuesta(peticion, respuesta){
    respuesta.send("Hola ruta")
})

server.get("/imagenes/paisajes", function respuesta(peticion, respuesta){
    respuesta.send("Hola imagenes")
})
server.listen(3000, function inicializacion(){
    console.log("Escuchando en.. http://localhost:3000/imagenes/paisajes")
})