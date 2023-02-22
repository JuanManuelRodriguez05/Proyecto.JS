
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

function renderizarEquipo(integrantes) {
    informacion.innerHTML = "";

    for (const integrante of integrantes) {
        const div = document.createElement("div");

        const h2 = document.createElement("h2");
        h2.innerHTML = `${integrante.nombre}`;

        const h3 = document.createElement("h3");
        h3.innerHTML = `${integrante.puesto}`;

        const h4 = document.createElement("h4");
        h4.innerHTML = `${integrante.mail}`;

        div.append(h2, h3, h4);

        informacion.append(div);
    }
}

fetch("/js/integrantes.json")
    .then((response) => {
        return response.json();
    })
    .then((responseIntegrantes) => {
        console.log(responseIntegrantes);

        renderizarEquipo(responseIntegrantes);

    })





