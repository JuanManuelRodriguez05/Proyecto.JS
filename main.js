
//Simulador de prestamista:

class Usuario {

    constructor(nombre, nroCuenta, saldo) {
        this.nombre = nombre;
        this.nroCuenta = nroCuenta;
        this.saldo = saldo;
    }

}

//Array:
const usuarios = [
    { 
        nombre: "Pedro", 
        nroCuenta: "223344", 
        saldo: 1200,
    },
    {  
       nombre: "Marcos", 
       nroCuenta: "554433", 
       saldo: 5400,
    }
    
];

// Funciones:

function ingresarUsuario() {
    let nombreApellido = prompt("Ingrese nombre y apellido del usuario que desea ingresar");
    const anioDeNacimiento = parseInt(prompt("Ingrese su año de nacimiento"));
    let anioActual = 2023;
    let tuEdad = anioActual - anioDeNacimiento;
    console.log("Bienvenido " + nombreApellido + " su edad es de " + tuEdad + " años");

    while (tuEdad < 18) {
        alert("Este sitio es solo para mayores de edad");
        tuEdad = parseInt(prompt("Ignrese su año de nacimiento"));

    }
}

function crearUsuario() {
    const nuevoNombre = prompt("Ingrese su nombre de usuario");
    const numeroCuenta = prompt("Ingrese su numero de cuenta");
    const nuevoSaldo = 0;
    const nuevoUsuario = new Usuario(nuevoNombre, numeroCuenta, nuevoSaldo);
    usuarios.push(nuevoUsuario);
    alert("Su usuario se ha creado con exito");
}

function solicitarPrestamo() {
    nombre = prompt("Ingrese su nombre de usuario");
    numeroCuentaPrestamo = prompt("Ingrese su numero de cuenta");
    const encontrarNroCuenta = usuarios.some((usuarios) => usuarios.nroCuenta === numeroCuentaPrestamo);

    if (encontrarNroCuenta === true) {
        console.log("Su numero de cuenta es correcto");
    } else {
        console.log("El numero ingresado no existe");
        alert("El numero de cuenta que ingreso no existe");
        numeroCuenta = prompt("Ingrese su numero de cuenta nuevamente");
    }

    let montoDeDinero = parseInt(prompt("Ingrese el monto de dinero que necesita"));
    let cantidadDeCuotas = parseInt(prompt("Ingrese la cantidad de cuotas que desee"));
    const tazaUno = 0.15;
    const tazaDos = 0.10;

    if (cantidadDeCuotas <= 6) {
        console.log("Deberá pagar un total de $" + (montoDeDinero + montoDeDinero * tazaDos));
        console.log("En " + cantidadDeCuotas + " cuotas de $" + (montoDeDinero + montoDeDinero * tazaDos) / cantidadDeCuotas);
    } else {
        console.log("Deberá pagar un total de $" + (montoDeDinero + montoDeDinero * tazaUno));
        console.log("En " + cantidadDeCuotas + " cuotas de $" + (montoDeDinero + montoDeDinero * tazaUno) / cantidadDeCuotas);
    }
}

function buscarUsuario() {

    let nombreUsuario = prompt("Ingrese el nombre del usuario que desea buscar");
    const encontrar = usuarios.some((usuarios) => usuarios.nombre === nombreUsuario);

   if(encontrar === true){
    console.log("El usuario que busca si existe");
   }else{
    console.log("El usuario no existe");
   }
}

// Funcion de ornden superor:

/*function calcularRecargo (porcentaje){
    return (monto) => (porcentaje * monto) / 100;
}
const seisOmenos = calcularRecargo(10);
const sieteOmas = calcularRecargo(15);

let monto = parseInt(prompt("Ingrese el monto que desea verificar"));
let cantidadDeMeses = parseInt(prompt("Ingrese la cantidad de meses"));

if (cantidadDeMeses <= 6){
    console.log(seisOmenos(monto));
}else{
    console.log(sieteOmas(monto));
}*/


ingresarUsuario()


let operacion = prompt("Seleccione la operacion que desea realizar: 1-Crear usuario, 2-Solicitar prestamo, 3-Buscar usuario, -Salir-");

while (operacion !== "Salir") {

    switch (operacion) {

        case "1":
            crearUsuario()
            console.log(usuarios);
            break;

        case "2":
            solicitarPrestamo()
            break;

        case "3":
            buscarUsuario()
            break;

        default:
            console.log("La operacion no existe");
    }

    operacion = prompt("Seleccione la operacion que desea realizar: 1-Crear usuario, 2-Solicitar prestamo, 3-Buscar usuario, -Salir-");
}


