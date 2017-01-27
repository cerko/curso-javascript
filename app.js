


var persona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        pais: "España",
        ciudad: "Las Palmas GC"
    }
}


console.log(persona.nombre);
console.log(persona.direccion);
console.log(persona.direccion.pais);

persona.direccion.zipcode = 35019;
console.log(persona.direccion.zipcode);
