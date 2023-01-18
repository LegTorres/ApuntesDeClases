const sectionReiniciar = document.getElementById('reiniciar')
sectionReiniciar.style.display = 'none'

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')

const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado') 
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedor-ataques')

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputLangostelvis
let inputTucapalma
let inputPydos
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego 
let botonAgua  
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
/**
 * Creando la clase para los mokepones con su constructor
 * la propiedad ataques[] no la agregaremos al momento de crear el objeto sino despues, 
 * como objeto literal
 */
class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}
/**
 * Creando cada uno de nuestros objetos de la clase mokepon con sus diferentes propiedades
 */
let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)
let langostelvis = new Mokepon('Langostelvis', './assets/mokepons_mokepon_hipodoge_attack.png', 5)
let tucapalma = new Mokepon('Tucapalma', './assets/mokepons_mokepon_hipodoge_attack.png', 5)
let pydos = new Mokepon('Pydos', './assets/mokepons_mokepon_hipodoge_attack.png', 5)
/**
 * Insertando los ataques de cada unboi de los mokepones para que puedan ser insertados 
 * en nuestro documento HTML con el texto que aparecera en el 
 * boton(nombre: 'Agua') y el id de este(id: 'boton-agua') 
 */
hipodoge.ataques.push(
    { nombre: 'Agua', id: 'boton-agua'},
    { nombre: 'Agua', id: 'boton-agua'},
    { nombre: 'Agua', id: 'boton-agua'},
    { nombre: 'Fuego', id: 'boton-fuego'},
    { nombre: 'Tierra', id: 'boton-tierra'},
) 
capipepo.ataques.push(
    { nombre: 'Tierra', id: 'boton-tierra'},
    { nombre: 'Tierra', id: 'boton-tierra'},
    { nombre: 'Tierra', id: 'boton-tierra'},
    { nombre: 'Agua', id: 'boton-agua'},
    { nombre: 'Fuego', id: 'boton-fuego'},
) 
ratigueya.ataques.push(
    { nombre: 'Fuego', id: 'boton-fuego'},
    { nombre: 'Fuego', id: 'boton-fuego'},
    { nombre: 'Fuego', id: 'boton-fuego'},
    { nombre: 'Agua', id: 'boton-agua'},
    { nombre: 'Tierra', id: 'boton-tierra'},
) 
langostelvis.ataques.push(
    { nombre: 'Agua', id: 'boton-agua'},
    { nombre: 'Agua', id: 'boton-agua'},
    { nombre: 'Agua', id: 'boton-agua'},
    { nombre: 'Fuego', id: 'boton-fuego'},
    { nombre: 'Tierra', id: 'boton-tierra'},
) 
tucapalma.ataques.push(
    { nombre: 'Agua', id: 'boton-agua'},
    { nombre: 'Agua', id: 'boton-agua'},
    { nombre: 'Agua', id: 'boton-agua'},
    { nombre: 'Fuego', id: 'boton-fuego'},
    { nombre: 'Tierra', id: 'boton-tierra'},
) 
pydos.ataques.push(
    { nombre: 'Agua', id: 'boton-agua'},
    { nombre: 'Agua', id: 'boton-agua'},
    { nombre: 'Agua', id: 'boton-agua'},
    { nombre: 'Fuego', id: 'boton-fuego'},
    { nombre: 'Tierra', id: 'boton-tierra'},
) 
/**
 * insertando todos nuestros mokepones creados ya con todas sus propiedades y ataques
 * en nuestro arreglo mokepones.
 */
mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,tucapalma,pydos)
/**
 * Funcion que se ejecutara al momento de cargar nuestra pagina web.
 * Recorremos nuestro arreglo mokepones con la funcion forEach y por cada objeto mokepon
 * guardado en el arreglo creamos nuestro codigo HTML y lo almacenamos en la variable opcionDeMokepones
 * y con las estructuras ${mokepon.propiedad} insertamos nuestras propiedades de los mokepones en el
 * codigo HTML para que el contenido sea dinamico.
 * Insertamos nuestro codigo HTML en el div contenedorTarjetas y con el simbolo += hacemos que vaya 
 * insertando el valor del mokepon correspondiente a cada ciclo uno por uno.
 * 
 * Creamos las variables de los input dentro de la funcion forEach() para que asi no nos arroje 
 * errores porque algun elemento no se haya creado al momento ejecutar la linea de codigo,
 * pues estos, al no ser creados en el archivo HTML sino a traves de javascript podrian no existir
 * si se les asigna un valor mas arriba. Lo mismo con la funcion addEventListener().
 */
function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'
    
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
            <input type="radio" name="mascota" id=${mokepon.nombre} />
            <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label>
        `  
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
        inputLangostelvis = document.getElementById('Langostelvis')
        inputTucapalma =  document.getElementById('Tucapalma')
        inputPydos = document.getElementById('Pydos')
    })
    
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
/**
 * Seleccionamos la mascota del jugador en base al id del input que hemos seleccionado,
 * luego pasamos el valor del id de ese input a las variables 
 * spanMascotaJugador(que es nuestro parrafo HTML que muestra la mascota seleccionada
 * en la seccion de los ataques) y a mascotaJugador.
 * Luego llamamos la funcion extraerAtaques(mascotaJugador) y a la funcion 
 * seleccionarMascotaEnemigo()
 */
function seleccionarMascotaJugador(){
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputHipodoge.checked){ 
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } 
    else if (inputCapipepo.checked){ 
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } 
    else if (inputRatigueya.checked){ 
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } 
    else if (inputLangostelvis.checked){ 
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    } 
    else if (inputTucapalma.checked){ 
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    } 
    else if (inputPydos.checked){ 
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    } 
    else {
        alert('Selecciona una mascota por favor')
        reiniciarJuego()    
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}
/** 
* En la funcion estraerAtaques(mascotaJugador) recorremos el arreglo de que contiene nuetros 
* mokepones, y, cuando lleguemos a la mascota que hayamos seleccionado extraemos sus ataques 
* y los almacenamos en la variable interna ataques, y liego pasamos esa variable como 
* parametroa la funcion mostrarAtaques().
*/
function extraerAtaques(mascotaJugador){
    let ataques 
    for (let i = 0; i < mokepones.length; i++){
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
  }
  mostrarAtaques(ataques)
} 
 /**
  * En esta funcion recorremos el arreglo que contiene todos los ataques de nuestro mokepon, y
  * por cada ataque dentro del arreglo creamos nuestro codigo HTML guardandolo en la variable
  * ataquesMokepon y lo pasamos al div contenedorAtaques uno por uno. Creando asi nuestros 
  * botones de ataque.
  * En el arreglo botones, al utilizar la funcion querySelectorAll(selectorDeCSS) guardamos todos 
  * los botones que coinciden con la clase .bAtque.
  */
function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `
            <button id=${ataque.id} class="boton-de-ataque bAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon

    })
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.bAtaque')
}
/**
 * En esta funcion recorremos nuestro arreglo botones y por cada boton que contenga
 * que le cree a ese boton un addEventListener(). 
 * Con la linea boton.addEventListener('click', (e) => {...}) estamos haciendo referencia al evento 
 * click del boton (la e hace referencia al evento en si) y en el contenido entre corchetes
 * programaremos lo que nos permita saber a cual de todos los botones de ataque le hemos hecho click,
 * y que debera hacer con base al ataque que hemos elegido.
 * e.target.textContent nos devuelve el texto del boton al que se le ha hecho click
 * y luego podemos compararlo con otro valor para que en base a la seleccion podamos insertar el
 * ataque correspondiente dentro del arreglo ataqueJugador. juego cambiamos el color del boton
 * y lo deshabilitamos. Despues de haber hecho click a nuestro boton de ataque llamamos la funcion 
 * ataqueAleatorioEnemigo(
 * 
 * La palabra boton es de uso interno, al parecer no cambia el resultado sin importar
 * como se llame ni si fue declarada previamente o no.
 */
function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener('click',(e) =>{
            if(e.target.textContent === 'Fuego'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            else if(e.target.textContent === 'Agua'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            else{
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
}
/**
 * Seleccionamos la mascota del enemigo de forma aleatoria en base al arreglo de los mokepones
 * e insertamos el nombre del mokepon seleccionado en el parrafo HTML que muestra la mascota 
 * del enemigo
 */
function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}
/**
 * Generamos un ataque aleatorio para nuestro enemigo e insertamos el resultado en nuestro arreglo
 * ataqueEnemigo. Luego llamamos la funcion iniciarPelea()
 */
function ataqueAleatorioEnemigo(){
   let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUEGO')
    }
    else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push('AGUA')
    }
    else {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}
/**
 * Llamamos a la funcion combate() solo si el nuestro arreglo ataqueJugador ya 
 * tiene almacenados 5 elementos.
 */
function iniciarPelea() {
    if (ataqueJugador.length === 5){
        combate()
    }
}
/**
 * Creamos esta funcion para que en la funcion combate() nos almacene el resultado de 
 * cada combate de modo sincronizado en ambos combatientes. 
 */
function indexAmbosOponente(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
/**
 * En esta funcion recorremos un ciclo for basado en la longitud de nuestro arreglo ataqueJugador 
 * y en cada iteracion comparamos el valor con la del enemigo en esa posicion, almacenamos ambos 
 * resultados en las variables indexAtaqueJugador e indexAtaqueEnemigo (NO SON ARREGLOS?????)
 * con la funcion indexAmbosOponentes(index, index) y dependiendo el resultado llamamos la funcion
 * crearMensaje('') con el resultado si ganamos, empatamos o perdimos; modificamos el numero de 
 * victorias nuestras y del enemigo dependiendo del resultado e insertamos las victorias en el 
 * parrafo HTML vidas-jugador y vidas-enemigo.
 * Luego llamamos a la funcion revisaVidas() que en nuestro caso esta contando las victorias.
 */
function combate() {
    for (let index = 0; index < ataqueJugador.length; index++){
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponente(index, index)
            crearMensaje("EMPATE")
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else if(ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA'){
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else if(ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO'){
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else if(ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA'){
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else {
            indexAmbosOponente(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVidas()
}
/**
 * Esta funcion nos permite revisar si, dependiendo las victorias tanto nuestras como del
 * enemigo, hemos ganado, perdido o empatado, y mostrar en el navegador el resultado
 */
function revisarVidas(){
    if(victoriasJugador === victoriasEnemigo){
        crearMensajeFinal('Esto fue un EMPATE!')
    } 
    else if(victoriasJugador > victoriasEnemigo){
        crearMensajeFinal('GANASTE!!!')
    }
    else{
        crearMensajeFinal('PERDISTE. :(')
    }
}

function crearMensaje(resultado){
    let nuevoAtaqueDelJugador = document.createElement('p') 
    let nuevoAtaqueDelEnemigo = document.createElement('p') 

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador) 
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo) 
}

function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = 'Fin del Juego, ' + resultadoFinal 
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)