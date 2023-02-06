
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

const usuariosJSON = JSON.stringify(usuarios);
localStorage.setItem("usuarios", usuariosJSON);


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
    let nuevoNombre = document.getElementById("crearNombre").value;
    let numeroCuenta = document.getElementById("crearNroCuenta").value;
    const nuevoSaldo = 0;
    const nuevoUsuario = new Usuario(nuevoNombre, numeroCuenta, nuevoSaldo);
    usuarios.push(nuevoUsuario);
    if (nuevoNombre !== usuarios.nombre && numeroCuenta !== usuarios.nroCuenta) {
        let padreCrear = document.getElementById("datosCrear");
        let datosCrear = document.createElement("h3");
        datosCrear.innerHTML = "El usuario " + nuevoNombre + " con el numero de cuenta " + numeroCuenta + " se ha ingresado con exito.";
        padreCrear.appendChild(datosCrear);
        const nuevoUsuarioJSON = JSON.stringify(nuevoUsuario);
        localStorage.setItem("usuario nuevo", nuevoUsuarioJSON);
        console.log(usuarios);
    } else {
        let padreCrear = document.getElementById("datosCrear");
        let errorCrear = document.createElement("h3");
        errorCrear.innerHTML = "El usuarios ya existe o le faltan completar datos";
        padreCrear.appendChild(errorCrear);

    }
};



function solicitarPrestamo() {
    nombre = document.getElementById("nombrePrestamo").value;
    numeroCuentaPrestamo = document.getElementById("nroCuentaPrestamo").value;
    let montoDeDinero = parseInt(document.getElementById("montoPrestamo").value);
    let cantidadDeCuotas = parseInt(document.getElementById("cuotasPrestamo").value);
    const encontrarNroCuenta = usuarios.some((usuarios) => usuarios.nroCuenta === numeroCuentaPrestamo);
    const tazaUno = 0.15;
    const tazaDos = 0.10;

    if (encontrarNroCuenta === true && cantidadDeCuotas <= 6) {
        let padrePrestamo = document.getElementById("datosPrestamo");
        let datosPrestamo = document.createElement("h3");
        datosPrestamo.innerHTML = "Su numero de cuenta es correcto " +
            ". Deberá pagar un total de $" + (montoDeDinero + montoDeDinero * tazaDos) +
            " en " + cantidadDeCuotas + " cuotas de $" + (montoDeDinero + montoDeDinero * tazaDos) / cantidadDeCuotas;
        padrePrestamo.appendChild(datosPrestamo);
    } else if (encontrarNroCuenta === true && cantidadDeCuotas >= 7) {
        const padrePrestamo = document.getElementById("datosPrestamo");
        const datosPrestamo = document.createElement("h3");
        datosPrestamo.innerHTML = "Su numero de cuenta es correcto " +
            ". Deberá pagar un total de $" + (montoDeDinero + montoDeDinero * tazaUno) +
            " en " + cantidadDeCuotas + " cuotas de $" + (montoDeDinero + montoDeDinero * tazaUno) / cantidadDeCuotas;
        padrePrestamo.appendChild(datosPrestamo);
    } else {
        const padrePrestamo = document.getElementById("datosPrestamo");
        const datosPrestamo = document.createElement("h3");
        datosPrestamo.innerHTML = "El numero ingresado no existe.";
        padrePrestamo.appendChild(datosPrestamo);
    }
};


function buscarUsuario() {

    let nombreUsuario = document.getElementById("buscarUnUsuario").value;
    const encontrar = usuarios.some((usuarios) => usuarios.nombre === nombreUsuario);

    if (encontrar === true) {
        let padreBuscar = document.getElementById("datosBuscar");
        let datosBuscar = document.createElement("h3");
        datosBuscar.innerHTML = "El usuario " + nombreUsuario + " existe en nuestra lista de usuarios."
        padreBuscar.appendChild(datosBuscar);
    } else {
        let padreBuscar = document.getElementById("datosBuscar");
        let datosBuscar = document.createElement("h3");
        datosBuscar.innerHTML = "El usuario " + nombreUsuario + " no existe en nuestra lisata de usuarios."
        padreBuscar.appendChild(datosBuscar);
    }

};

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



/*let operacion = prompt("Seleccione la operacion que desea realizar: 1-Crear usuario, 2-Solicitar prestamo, 3-Buscar usuario, -Salir-");

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
}*/


