
// BOTONES
let botonDinero = document.getElementById("cogerDinero")
let botonSiguienteTexto = document.getElementById("siguienteTexto")
let botonNada = document.getElementById("nada")
let botonVolver = document.getElementById("volver")
let botonSaltarTexto = document.getElementById("saltarTexto")
let botonTaberna = document.getElementById("irBarra");
let botonPagar = document.getElementById("pagarTrago");
let botonPagarCama = document.getElementById("pagarCama");
let botonTabernero = document.getElementById("tabernero");
let botonVolverJugar = document.getElementById("volverJugar");
let botonJugarDados = document.getElementById("jugarDados");
let botonComoJugar = document.getElementById("comoJugar")
let botonAceptarDestino = document.getElementById("aceptarDestino")
let botonMolestar = document.getElementById("molestar")

// --------------------------------------------------

// OBJETIVOS
let contadorObjetivos = 1;
let flechaObjetivo = document.getElementById("flechaObjetivo1")
let objetivo = document.getElementById("objetivo1")
let estadoObjetivo;
// -------------------------------------------------------

// TEXTOS
let textosTotales = 1;
let contadorTextos = 1;
let borradores;
let texto = document.getElementById("texto1")
let dialogo = document.getElementById("texto1").innerText
let cuadroTexto = document.querySelector(".cuadroTexto")
// -------------------------------------------------------

// IMAGENES PERSONAJES
let narradores = document.getElementsByClassName("narrador")
let nombres = document.getElementsByClassName("nombre")
let contadorNarradores = narradores.length;;
// ----------------------------------------------------------

// DADOS
let resultadoDadoJugador
let resultadoDadoLudopata
// -------------------------------------------

// VARIOS
let contadorTragos = 0;
let escena;
let i = 0;
let oro;
let bolsaOro = document.getElementById("cantidadOro")
// ---------------------------------------------------


// -------------------------------------- FUNCIONES DE TEXTO --------------------------------------------------------------

// Esta funcion asigna el texto que toca a la escena
function asignarTexto() {
    // Mientras sea true asigno el nuevo texto , si es false significa que no existe el texto y no hago nada
    if (document.getElementById("texto" + contadorTextos)) {
        texto = document.getElementById("texto" + contadorTextos)
        dialogo = document.getElementById("texto" + contadorTextos).innerText
    }
}

// Vacia la <p> que se va a mostrar por pantalla para que no salga un valor doble y muestra la <p> donde se va a escirbir
function vaciarP() {
    document.getElementById("texto" + contadorTextos).innerHTML = "";
    texto.style.display = "block";
}

// Escondes todas las <p> para que no se acumulen en pantalla
function esconderP() {
    for (let contador = 1; contador < textosTotales; contador++) {
        borradores = document.getElementById("texto" + contador);
        borradores.style.display = "none";
    }
}


// Esta funcion hace que las letras salgan de 1 en 1 
function mostrarLetras() {
    // La primera vez que se entre a la funcion se esconderan todas las <p> y se vaciará la que toca
    if (i == 0) {
        esconderP()
        vaciarP();
        soloBotonSaltarTexto()
    }
    // Añado el caracter que esta en la posicion especifica de i 
    texto.innerHTML += dialogo.charAt(i);
    i++;
    switch (escena) {
        case 1:
            setTimeout(escena1, 50);
            break;
        case 2:
            narradoresEscena2()
            setTimeout(escena2, 50);
            break;
        case 3:
            narradoresEscena3()
            setTimeout(escena3, 50);
            break;
        case 5:
            setTimeout(escena5, 50);
            break;
        case 6:
            setTimeout(escena6, 50);
            break;
    }
}

// Esta funcion hace que salga todo el texto
function saltarTexto() {
    i = dialogo.length + 10
    texto.innerHTML = dialogo;
}

// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------


// ------------------------ ESCENAS -----------------------
function escena1() {
    if (i < dialogo.length) {
        mostrarLetras()
    } else {
        esconderBotonSaltarTexto();
        mostrarBotonesEscena1();
        i = 0;
        contadorTextos++;
        asignarTexto();
    }
}

function escena2() {
    if (i < dialogo.length) {
        mostrarLetras()
    } else {
        esconderBotonSaltarTexto();
        mostrarBotonesEscena2()
        i = 0;
        contadorTextos++;
        asignarTexto();
    }
}


function escena3() {
    if (i < dialogo.length) {
        mostrarLetras()
    } else {
        esconderBotonSaltarTexto();
        mostrarBotonesEscena3()
        i = 0;
        contadorTextos++;
        asignarTexto();
    }
}

function escena5() {
    if (i < dialogo.length) {
        mostrarLetras()
    } else {
        esconderBotonSaltarTexto();
        mostrarBotonVolverJugar()
        i = 0;
    }
}

function escena6() {
    if (i < dialogo.length) {
        mostrarLetras()
    } else {
        esconderBotonSaltarTexto();
        mostrarBotonVolverJugar()
        i = 0;
    }
}

// Cuando se hace un objetivo tengo que saltar a una linea de texto determinada , con esta funcion lo hago
function accionEspecial(cont) {
    contadorTextos = cont;
    asignarTexto();
    // Da igual a que escena llame , porque tengo definida la escena en asignarEscena
    escena3();
}


// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------



//-------------------------------- FUNCIONES FIJAS ----------------------------

function cambiarEscena(esc) {
    setTimeout(function () {
        window.location.href = "escena" + esc + ".html"
    }, 1000);
}

// Esta funcion pone el cuadro de texto arriba
function cuadroTextoArriba() {
    cuadroTexto.style.top = "5%"
}

// Declaro en que escena estoy
function declararEscena(e) {
    escena = e;
}


// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------



// ------------------------ ENSEÑAR O ESCONDER NARRADORES --------------------------

// Esconde al jugador
function esconderJugador() {
    narradores[0].style.display = "none"
    nombres[0].style.display = "none"
}

// Muestra al jugador
function mostrarJugador() {
    narradores[0].style.display = "block"
    nombres[0].style.display = "block"
}

// Esconde al tabernero
function esconderTabernero() {
    narradores[1].style.display = "none"
    nombres[1].style.display = "none"
}

// Muestra al tabernero
function mostrarTabernero() {
    narradores[1].style.display = "block"
    nombres[1].style.display = "block"
}

// Esconde al tabernero
function esconderTabernero() {
    narradores[1].style.display = "none"
    nombres[1].style.display = "none"
}

// Muestra al guerrero
function mostrarGuerrero() {
    narradores[2].style.display = "block"
    nombres[2].style.display = "block"
}


// Esconde al guerrero
function esconderGuerrero() {
    narradores[2].style.display = "none"
    nombres[2].style.display = "none"
}

// Muestra al judaor de dados
function mostrarJugadorDados() {
    narradores[1].style.display = "block"
    nombres[1].style.display = "block"
}


// Esconde al jugador de dados
function esconderJugadorDados() {
    narradores[1].style.display = "none"
    nombres[1].style.display = "none"
}


// Muestra a los narradores cuando toca en la escena 2
function narradoresEscena2() {
    if (i == 1 && contadorTextos == 1) {
        esconderGuerrero()
        esconderJugadorDados()
    } else if (i == 1 && contadorTextos == 2) {
        esconderJugador();
        esconderGuerrero()
        mostrarJugadorDados();
    } else if (i == 1 && (contadorTextos == 4 || contadorTextos == 6)) {
        esconderJugador();
        esconderJugadorDados()
        mostrarGuerrero();
    } else if (i == 1 && contadorTextos == 5) {
        mostrarJugador();
        esconderGuerrero()
    }
}

// Muestra a los narradores cuando toca en la escena 3
function narradoresEscena3() {
    if (i == 1 && contadorTextos == 1) {
        esconderTabernero()
    } else if (i == 1 && contadorTextos == 2) {
        esconderJugador();
        mostrarTabernero();
    } else if (i == 1 && contadorTextos == 8) {
        esconderTabernero()
        mostrarJugador();
    }
}



// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------


// -------------------------------- ENSEÑAR O ESCONDER BOTONES -----------------------------------

function esconderBotonSaltarTexto() {
    botonSaltarTexto.style.display = "none"
}

function mostrarBotonDinero() {
    botonDinero.style.display = "inline"
}
function mostrarBotonSiguienteTexto() {
    botonSiguienteTexto.style.display = "inline"
}
function mostrarBotonNada() {
    botonNada.style.display = "inline"
}
function mostrarBotonVolver() {
    botonVolver.style.display = "inline"
}
function mostrarBotonSaltarTexto() {
    botonSaltarTexto.style.display = "inline"
}
function mostrarBotonTaberna() {
    botonTaberna.style.display = "inline"
}
function mostrarBotonPagar() {
    botonPagar.style.display = "inline"
}


function mostrarBotonPagarCama() {
    botonPagarCama.style.display = "inline"
}

function mostrarBotonTabernero() {
    botonTabernero.style.display = "inline"
}

function mostrarBotonVolverJugar() {
    botonVolverJugar.style.display = "inline"
}

function mostrarBotonAceptarDestino() {
    botonAceptarDestino.style.display = "inline"
}

function mostrarBotonComoJugar() {
    botonComoJugar.style.display = "inline"
}

function mostrarBotonJugarDados() {
    botonJugarDados.style.display = "inline"
}


// Muestra en el orden que toca los botones de la escena 1
function mostrarBotonesEscena1() {
    switch (contadorTextos) {
        case 1:
            mostrarObjetivos();
            break;
        case 2:
            mostrarBotonDinero();
            break;
        case 3:
            mostrarBotonSiguienteTexto();
            break;
        case 4:
            mostrarBotonSiguienteTexto();
            break;
        case 5:
            limpiarBotones();
            break;
    }
}

function mostrarBotonesEscena2() {
    switch (contadorTextos) {
        case 1:
            mostrarObjetivos();
            mostrarBotonTaberna();
            break;
        case 2:
            mostrarBotonComoJugar()
            mostrarBotonJugarDados();
            mostrarBotonTaberna();
            break;
        case 3:
            mostrarBotonJugarDados();
            mostrarBotonTaberna();
            break;
        case 4:
            botonMolestar.style.display = "inline"
            mostrarBotonTaberna();
            break;
        case 5:
            mostrarBotonSiguienteTexto();
            break;
        case 6:
            mostrarBotonAceptarDestino();
            break;
    }
}


// Muestra en el orden que toca los botones de la escena 3
function mostrarBotonesEscena3() {
    switch (contadorTextos) {
        case 1:
            mostrarBotonSiguienteTexto();
            break;
        case 2:
            mostrarBotonPagar();
            mostrarBotonPagarCama();
            mostrarBotonVolver();
            mostrarObjetivos();
            break;
        case 3:
            mostrarBotonPagar();
            mostrarBotonPagarCama();
            mostrarBotonVolver();
            break;
        case 4:
            mostrarBotonPagar();
            mostrarBotonPagarCama();
            mostrarBotonVolver();
            break;
        case 5:
            mostrarBotonPagar();
            mostrarBotonPagarCama();
            mostrarBotonVolver();
            break;

        case 6:
            mostrarBotonAceptarDestino();
            break;

        case 7:
            // Este caso es cuando le digo que no tiene dinero , en el caso de que pida una cama y no pueda pedirla y despues una bebida tengo que decirle que pase al texto 2 y despues se le sumara 1 en la funcion de escena , en caso de pedir algo y no poder paragarlo siempre va a volver a este caso por la funcion quitar oro
            mostrarBotonPagar();
            mostrarBotonPagarCama();
            mostrarBotonVolver();
            contadorTextos = 2;
            break;
        case 8:
            mostrarBotonDinero()
            mostrarBotonNada();
            break;
        case 9:
            mostrarBotonSiguienteTexto();
            break;
        case 10:
            mostrarBotonTabernero();
            mostrarBotonVolver();
    }
};

// Esconde todos los botones
function limpiarBotones() {
    let botones = document.getElementsByTagName("button")
    for (let c = 0; c < botones.length; c++) {
        botones[c].style.display = "none"
    }
}

// Esconde todos los botones excepto el de saltarTexto
function soloBotonSaltarTexto() {
    limpiarBotones();
    mostrarBotonSaltarTexto();
}

// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------


//--------------------------------------------- OBJETIVOS -----------------------------------------------------

function incializarObjetivoEscena3() {
    localStorage.setItem("objetivo3", true);
}

function finalizarObjetivoEscena3() {
    localStorage.setItem("objetivo3", false);
}

// Muestra los obvetivos disponibles
function mostrarObjetivos() {
    estadoObjetivo = localStorage.getItem("objetivo3");
    if (escena == 3) {
        if (estadoObjetivo === "true") {
            contadorObjetivos--;
            for (contadorObjetivos; contadorObjetivos > 0; contadorObjetivos--) {
                flechaObjetivo = document.getElementById("flechaObjetivo" + contadorObjetivos)
                objetivo = document.getElementById("objetivo" + contadorObjetivos)
                flechaObjetivo.style.display = "block"
                objetivo.style.display = "block"
            }
        }
    } else {
        contadorObjetivos--;
        for (contadorObjetivos; contadorObjetivos > 0; contadorObjetivos--) {
            flechaObjetivo = document.getElementById("flechaObjetivo" + contadorObjetivos)
            objetivo = document.getElementById("objetivo" + contadorObjetivos)
            flechaObjetivo.style.display = "block"
            objetivo.style.display = "block"
        }
    }

}

// Esconde y elimina un objetivo ya cumplido
function esconderObjetivo(numObjetivo) {
    flechaObjetivo = document.getElementById("flechaObjetivo" + numObjetivo)
    objetivo = document.getElementById("objetivo" + numObjetivo)

    flechaObjetivo.remove()
    objetivo.remove()
}

// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------



// -------------------------------FUNCIONES DE ORO---------------------------------------------------------------

// Inicializo el oro del jugador
function incializarOro() {
    localStorage.setItem("oro", 10);
}

// Muestro el oro del jugador
function mostrarOro() {
    bolsaOro.innerHTML = localStorage.getItem("oro");
    document.getElementById("cantidadOro").innerHTML = localStorage.getItem("oro");
}

// Añado el oro del jugador
function añadirOro(oroGanado) {
    let oro = parseInt(localStorage.getItem("oro"))
    oro = oro + parseInt(oroGanado);
    localStorage.setItem("oro", oro);
    bolsaOro.innerHTML = localStorage.getItem("oro");
}

// Quita el oro al jugador
function quitarOro(oroPerdido) {
    // Asigo oro al localSotrage de oro
    oro = parseInt(localStorage.getItem("oro"))
    if (oroPerdido > oro) {
        contadorTextos = 7;
        asignarTexto();
    } else {
        oro = oro - parseInt(oroPerdido);
        localStorage.setItem("oro", oro);
        bolsaOro.innerHTML = localStorage.getItem("oro");
    }
}


function cama() {
    let oro = localStorage.getItem("oro");
    if (oro >= 30) {
        cambiarEscena(6);
    }
}
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------


// ----------------------- FUNCIONES MUERTE -------------------------------

// Calculo los tragos , si toma 4 muere , si se llama a la funcion pero no tiene oro no se añaden tragos
function tragos() {
    let oro = localStorage.getItem("oro");
    if (oro >= 0) {
        contadorTragos++;        
        if (contadorTragos == 4) {
            contadorTextos = 6;
            asignarTexto();
            escena3()
            limpiarBotones()
            mostrarBotonAceptarDestino()
        } else {
            escena3();
        }

    }
}

// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------



//---------------------------------------- FUNCION DADOS ---------------------------------------------------

function dados() {
    let oro = localStorage.getItem("oro");
    if (oro >= 5) {
        resultadoDadoJugador = Math.floor(Math.random() * 6) + 1;
        resultadoDadoLudopata = Math.floor(Math.random() * 6) + 1;
        quitarOro(5)
        if (resultadoDadoJugador > resultadoDadoLudopata) {
            añadirOro(10)
        } else if (resultadoDadoJugador == resultadoDadoLudopata) {
            añadirOro(5)
        }
        document.getElementById("jugadorDados").innerHTML = "El jugador de dados ha sacado un : " + resultadoDadoLudopata;
        document.getElementById("jugador").innerHTML = "Has sacado un :  " + resultadoDadoJugador;
    } else {
        document.getElementById("texto6").style.display = "block";
    }
}

// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------


// CONTADORES DE OBJETIVOS Y TEXTOS
while (document.getElementById("flechaObjetivo" + contadorObjetivos) && document.getElementById("objetivo" + contadorObjetivos)) {
    contadorObjetivos++;
}
while (document.getElementById("texto" + textosTotales)) {
    textosTotales++;
}

