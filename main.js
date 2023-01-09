
function ingresarUsuario() {
    let nombreApellido = prompt("Ingrese nombre y apellido del usuario que desea ingresar");
    const anioDeNacimiento = parseInt(prompt("Ingrese su año de nacimiento"));
    let anioActual = 2023;
    let tuEdad = anioActual - anioDeNacimiento;
    console.log("Bienvenido " + nombreApellido + " su edad es de " + tuEdad + " años");

    while (tuEdad < 18) {
        alert ("Este sitio es solo para mayores de edad")
        tuEdad = parseInt(prompt("Ignrese su año de nacimiento"));
    
    }
    
}



ingresarUsuario()


let montoDeDinero = parseInt(prompt("Ingrese el monto de dinero que necesita"));
let cantidadDeCuotas = parseInt(prompt("Ingrese la cantidad de cuotas que desee"));
const tazaUno = 0.15;
const tazaDos = 0.10;

if (cantidadDeCuotas <= 6) {
    console.log("Usted deberá pagar un total de $" + (montoDeDinero + montoDeDinero * tazaDos));
    console.log("En " + cantidadDeCuotas + " cuotas de $" + (montoDeDinero + montoDeDinero * tazaDos) / cantidadDeCuotas);
} else {
    console.log("Usted deberá pagar un total de $" + (montoDeDinero + montoDeDinero * tazaUno));
    console.log("En " + cantidadDeCuotas + " cuotas de $" + (montoDeDinero + montoDeDinero * tazaUno) / cantidadDeCuotas);
}




