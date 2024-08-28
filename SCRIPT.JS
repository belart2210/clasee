var alumnos = [
{
    "nombre": "Gamaliel",
    "apellido":"Garcia"
},
{
    "nombre": "Pedro",
    "apellido":"Perez"
},
{
    "nombre": "Cosme",
    "apellido":"Contreras"
},
{
    "nombre": "Maria",
    "apellido":"Martinez"
},
]
window.onload =function(){


var contenedor = document. getElementById("contenedor");
for (let index = 0; index < alumnos.length; index++) {
    var titulo = document.createElement("h1");
    titulo.textContent= alumnos[index].nombre  ;
    titulo.classList.add("nombre");
    

    var Apellidos = document.createElement("h2");
    Apellidos.textContent= alumnos[index].apellido ; 
    Apellidos.classList.add("Apellidos");
    
    var section =document.createElement("section");
    section.classList.add("contenedorchiquito");

    section.appendChild(titulo);
    section.appendChild(Apellidos);
     var boton = document.createElement("input");
     boton.type="checkbox";
     section.appendChild(boton);


     
    contenedor.appendChild(section);
    //alert("nombre" + alumnos[index].nombre + " Apellido " + alumnos[index].apellido)
}

}
