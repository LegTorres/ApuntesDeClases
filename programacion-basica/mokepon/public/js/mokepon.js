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
/**
 * La etiqueta canvas nos crea un rectangulo en nuestra pagina en el que podemos
 * dibujar
 * Creamos nuestras constantes para el section que contendra el mapa y para el 
 * canvas que nos permitira dibujar nuestro mapa.
 */
const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let mokepones = []
let mokeponesEnemigos = []
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
let mascotaJugadorObjeto
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
let jugadorId = null
let enemigoId = null

/**
 * La funcion getContext('Dimension') nos permite usar el lienzo para dibujar dentro de el canvas.
 * le especificamos si vamos a trabajar en 2 o 3 dimensiones
 * Creamos la variable intervalo para definir el tiempo en el que el canvas esta actualizandose
 * de manera constante.
 * Creamos las el objeto para almacenar el mapa del fondo.
 */
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png'
/**
 * para saber el ancho de la pantalla usamos la propiedad window.innerWidth y le restamos la cantidad
 * de pixeles necesarios para que nos deje un margen a los lados. Para una imagen de 600 * 800
 * la formula seria la siguente. Luego lo agregamos a las dimensiones del mapa.
 * NOTA: las dimensiones no se acomodaran a medida que se vaya reduciendo el tamano de la pantalla
 * como en el caso de algun navegador.
 */
const anchoMaximoDelMapa = 350

let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
if (anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20
}
alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos
/**
 * Si al momento de crear una funcion o una clase le asignamos un valor por defecto a los parametros,
 * dicho parametreo se vuelve opcional al momento de llamar la funcion o crear un objeto.
 * Dentro de la clase creamos la funcion pintarMokepon() para llamarlas desde el objeto.
 * 
 * Cambiamos las propiedades de this.x y this.y para que los mokepones aparezcan en el mapa de
 * manera aleatoria.
 */
class Mokepon{
    constructor(nombre, foto, vida, fotoMapa, id = null){
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }

}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png')
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5, './assets/capipepo.png')
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5, './assets/ratigueya.png')
let langostelvis = new Mokepon('Langostelvis', './assets/mokepons_mokepon_hipodoge_attack.png', 5,'./assets/hipodoge.png')
let tucapalma = new Mokepon('Tucapalma', './assets/mokepons_mokepon_hipodoge_attack.png', 5,'./assets/hipodoge.png')
let pydos = new Mokepon('Pydos', './assets/mokepons_mokepon_hipodoge_attack.png', 5,'./assets/hipodoge.png')

/**
 * Creamos una lista para no repetir codigo en la creacion de la mascota enemiga y sus ataques.
 * PARA QUE LOS ATAQUES DEL MOKEPON NO SE PASEN CON FORMATO DE LISTA SE COLOCAN TRES PUNTOS(...)
 * DELANTE DEL NOMBRE DE LA VARIABLE. ASI EN LUGAR DE LA LISTA LOS ATAQUES PASAN COMO SI SE ESCRIBIERAN
 * UNO POR UNO
 */
const HIPODOGE_ATAQUES = [
    { nombre: 'Agua', id: 'boton-agua'},
    { nombre: 'Agua', id: 'boton-agua'},
    { nombre: 'Agua', id: 'boton-agua'},
    { nombre: 'Fuego', id: 'boton-fuego'},
    { nombre: 'Tierra', id: 'boton-tierra'},
]
hipodoge.ataques.push(...HIPODOGE_ATAQUES) 
//hipodogeEnemigo.ataques.push(HIPODOGE_ATAQUES)


const CAPIPEPO_ATAQUES = [
    { nombre: 'Tierra', id: 'boton-tierra'},
    { nombre: 'Tierra', id: 'boton-tierra'},
    { nombre: 'Tierra', id: 'boton-tierra'},
    { nombre: 'Agua', id: 'boton-agua'},
    { nombre: 'Fuego', id: 'boton-fuego'},
]
capipepo.ataques.push(...CAPIPEPO_ATAQUES) 
////capipepoEnemigo.ataques.push(...CAPIPEPO_ATAQUES) 

const RATIGUEYA_ATAQUES = [
    { nombre: 'Fuego', id: 'boton-fuego'},
    { nombre: 'Fuego', id: 'boton-fuego'},
    { nombre: 'Fuego', id: 'boton-fuego'},
    { nombre: 'Agua', id: 'boton-agua'},
    { nombre: 'Tierra', id: 'boton-tierra'},
]
ratigueya.ataques.push(...RATIGUEYA_ATAQUES)
//ratigueyaEnemigo.ataques.push(...RATIGUEYA_ATAQUES) 

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



mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,tucapalma,pydos)
/**
 * Ocultamos la sectionVerMapa cuando el juego recien se carga
 * Llamamos a la funcion unirseAlJuego() para que se conecte el servidor cuando infresamos en ella.
 */
function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'
    
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

    unirseAlJuego()
}
/**
 * Usamos la funcion fetch() que nos permite hacer llamadas a otros servicios por medio de 
 * http y nos permite indicar hacia que URI, y en que metodo(get, post...), y si es de tipo post nos 
 * permite tambien mandar los datos que irian en esa peticion (por defecto toma get si no se 
 * especifica otro metodo). En general se recibe una respuesta asincrona ya que el servidor puede
 * tardar en procesar esa informacion.
 * Una vez que lleguen la respuesta del servidor vamos a poder manejar esos datos de respuesta por medio 
 * de un callback a traves de un metodo de fetch que se llama then()
 * Para usar una llamada de tipo post seria agregando el argumento
 * fetch("http://localhost:8080/unirse", {
 *      method: "post"
 * })
 * 
 * La peticion, al ser asincrona, puede tardar en devolvernos una respuesta, por lo cual se debe 
 * utilizar junto al fetch la propiedad then(function(arg1){contenido...}) que recibe una funcion 
 * que es un callback que se va a ejecutar una vez haya recibido la respuesta del servidor.
 * 
 * fetch(url) hace un GET (una petición para obtener algo) a la URL que se le especifique
 * Esta función nos retornará algo (lo que sea que se haya definido en el código del servidor).
 * No podemos trabajar con lo que nos retorne directamente, ya que el servidor se tomará un 
 * Tiempo en responder.
 * Para eso utilizaremos el .then(func), que ejecutará el código de la función que le demos 
 * (en este caso, func), pasándole la respuesta del servidor como parámetro.
 * El .then suele ir por debajo de la función que hayamos llamado (fetch en este caso) e 
 * indentado, por pura estética nada más. Nótese que se puede hacer fetch(url).then(func) 
 * sin dejar ningún espacio.
 * function unirseAlJuego(){
    fetch("http://localhost:8080/unirse").then(function(res){
        console.log(res)
        if(res.ok){
            res.text() .then(function(respuesta){
                console.log(respuesta)
            })
        }
    })

}
 *
 * El primer console.log(res) nos devuelve el objeto de tipo response, para ver el contenido tendriamos
 * que convertirlo en texto con el metodo .text() luego de haber verificado que la respuesta este bien
 * (res.ok) y luego con el metodo .then(function(respuesta){...}), porque tambien es una promesa
 * y lo imprimimos en la consola ya convertido a texto.
 * 
 */
function unirseAlJuego(){
    fetch("http://localhost:8080/unirse")
        .then(function(res){
            console.log(res)
            if(res.ok){
                res.text() 
                    .then(function(respuesta){
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })
}
/**
 * La funcion fillRect() crea un rectangulo dentro del canvas. En los parametros se agrega 
 * donde se ubicara. los valores son los siguientes(x, y, ancho, alto)
 * para poner la imagen dentro del canvas creamos un objeto de la clase Image()
 * con la propiedar src le agregamos la ruta de la imagen, y para mostraslo lo hacemos
 * con la funcion drawImage(objetoDeImagen, x, y, ancho, alto)
 * Con la funcion setInterval(nombreDeFuncion, tiempoIntervaloEnMilisegundos) llamamos una 
 * funcion constantemente esperando un determinado tiempo.
 * 
 * Para agregar movimientos con el teclado usamos el evento llamado keydown
 * 
 * Movemos los addEventListener para la funcion iniciarMapa()
 * 
 * Agregamos la funcion seleccionarMokepon() para que envie el mokepon seleccionado al servidor
 */
function seleccionarMascotaJugador(){
    sectionSeleccionarMascota.style.display = 'none'

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
        //return
    }

    seleccionarMokepon(mascotaJugador)

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
}
/**
 * Creamos la funcion seleccionarMokepon() para enviar el mokepon seleccionado al backEnd
 *  En javascript podemos agregar un dato al metodo post de diferentes maneras: una de ellas es
 * usando el simbolo mas (+) para concatenarlo a la URL, o podemos hacerlo a traves de un 
 * template string usando comillas invertidas (`) y destro de los simbolos ${variable} podemos
 * agregar el valor que queramos a una cadena fija.
 * 
 * Esta funcion no necesita hacer uso del metodo .then(), debido a que no estamos esperando una respuesta
 * sino solo enviando informacion.
 * la variable jugadorId la declaramos arriba, como una variable global.
 */
function seleccionarMokepon(mascotaJugador){
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
        method:"post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
}
function extraerAtaques(mascotaJugador){
    let ataques 
    for (let i = 0; i < mokepones.length; i++){
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

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

function secuenciaAtaque(){
    botones.forEach((botonEditado) => {
        botonEditado.addEventListener('click',(e) =>{
            if(e.target.textContent === 'Fuego'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                botonEditado.style.background = '#112f58'
                botonEditado.disabled = true
            }
            else if(e.target.textContent === 'Agua'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                botonEditado.style.background = '#112f58'
                botonEditado.disabled = true
            }
            else{
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                botonEditado.style.background = '#112f58'
                botonEditado.disabled = true
            }
            //ataqueAleatorioEnemigo()
            if(ataqueJugador.length === 5){
                enviarAtaques()
            }
        })
    })
}
/**
 * Creamos la funcion para enviar los ataques de nuestra mascota.
 * 
 */
function enviarAtaques(){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}
/**
 * Definimos la funcion para hacer la peticion al servidor de los ataques de nuestro oponente.
 */
function obtenerAtaques(){
    fetch(`http://localhost:8080/mokepon/${enemigoId}/ataques`)
        .then(function(res){
            if (res.ok){
                res.json()
                    .then(function({ ataques }){
                        if(ataques.length === 5){
                            ataqueEnemigo = ataques
                            combate()
                        }
                    })
            }
        })
}
/**
 * 
 * Como elegimos la mascota enemiga a traves del mapa y no de forma aleatoria ya no es necesario 
 * hacerlo de manera aleatoria, en su lugar pasamos los valores de la mascota que hemos seleccionado
 * como enemiga para extraer su nombre y ataques 
 */
function seleccionarMascotaEnemigo(enemigo){
    /*let mascotaAleatoria = aleatorio(0, mokepones.length - 1)*/

    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()
}

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

function iniciarPelea() {
    if (ataqueJugador.length === 5){
        combate()
    }
}

function indexAmbosOponente(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    clearInterval(intervalo)

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
/**
 * Creamos la funcion para dibujar nuestro personaje.
 * Con la funcion .clearRect() limpiamos nuestro canvas. Se le debe indicar que parte de nuestro
 * canvas hay que limpia; en el siguiente ejemplo vamos a limpiar desde la posicion 0,0 hasta el
 * final del canvas, representado con las propiedades width y height.
 * Agregamos la velocidad para que actualice las posiciones de los mokepones sumando la velocidad
 * y asi las variables capipepo.x y capipepo.y tengan un nuevo valor que modifique su ubicacion.
 * 
 * Llamamos a la funcion enviarPosicion(x,y) para que envie al servidor nuestra posicion en el 
 * mapa 
 */
function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    /*lienzo.drawImage(
        mascotaJugadorObjeto.mapaFoto,
        mascotaJugadorObjeto.x,
        mascotaJugadorObjeto.y,
        mascotaJugadorObjeto.ancho,
        mascotaJugadorObjeto.alto
    )*/
    mascotaJugadorObjeto.pintarMokepon()

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    // capipepoEnemigo.pintarMokepon()
    // ratigueyaEnemigo.pintarMokepon()
    // hipodogeEnemigo.pintarMokepon()
    mokeponesEnemigos.forEach(function(mokepon){
        mokepon.pintarMokepon()
        revisarColision(mokepon)
    })
/**
    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY) {
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
    }
 */
}
/**
 * Creamos la funcion enviarPosicion() para enviar nuestra posicion en el mapa a nuestro servidor.
 * 
 * cuando la variable se llama igual que el valor (Como en el caso de abajo donde x y y 
 * tienen el mismo nombre que el valor se puede abreviar, y en vez de utilizar x = x, y = y se 
 * coloca una sola vez en nombre de la variable)
 */
 function enviarPosicion(x, y){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function (res) {
        if (res.ok){
            res.json()
            .then(function({ enemigos}) {
                console.log(enemigos)
                /** 
                 * Reemplazamos la funcion forEach porque ya no es necesario recorrer la lista 
                 * de mokepones, asi que los guardamos en la lista mokeponesEnemigos y en lugar
                 * de pintar el mokepon vamos a retornarlo.
                 * //enemigos.forEach(function(enemigo){
                 */
                mokeponesEnemigos = enemigos.map(function(enemigo){
                    let mokeponEnemigo = null
                    const mokeponNombre = enemigo.mokepon.nombre || ""
                    if (mokeponNombre === 'Hipodoge'){
                        mokeponEnemigo = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png', enemigo.id/*80, 120*/)
                    }
                    else if (mokeponNombre === 'Capipepo'){
                        mokeponEnemigo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5, './assets/capipepo.png', enemigo.id/*230, 195*/)
                    } 
                    else if (mokeponNombre === 'Ratigueya'){
                        mokeponEnemigo = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5, './assets/ratigueya.png', enemigo.id/*350, 260*/)
                    }

                    mokeponEnemigo.x = enemigo.x
                    mokeponEnemigo.y = enemigo.y

                    //mokeponEnemigo.pintarMokepon()
                    return mokeponEnemigo
                })

            })
        }
    })
   
 }
/**
 * Creamos las funciones para mover nuestra imagen dentro del canvas.
 * Se puede agregar un atributo a un boton en html para escuchar el evento desde el mismo boton
 * y no llamarlo desde javascrip, con el atributo onClick="funcionDeJavascript()" para llamar una
 * funcion al hacer click en el boton. Con la el atributo onmousedown="funcionDeJavascript()" llamamos
 * una funcion al hacer click sostenido. y con onmouseup="funcionDeJavascript()" ejecutamos una funcion 
 * al dejas de hacer click sostenido.
 * 
 * Como al hacer click sostenido necesitamos que la funcion se ejecute una sola vez ya no nos serviria
 * que llamen a la funcion pintarCanvas() ni que se mueva el mmokepon solo una vez, si no de manera
 * continuada.
 */
function moverDerecha(){
    /*capipepo.x = capipepo.x + 5
    pintarCanvas()*/
    mascotaJugadorObjeto.velocidadX = 5
}

function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -5

}

function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5
}

function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}
/**
 * Funcion para mover nuestro mokepon en el canvas a traves de el teclado
 * los adaEventListener en ocasiones devuelven un objeto de evento, que en el siguiente caso nos 
 * indicaria que tecla se preciono, por poner un ejemplo. 
 * Con la propiedad .key, para un addEventListener podemos saber que tecla se presiono. 
 */
function sePresionoUnaTecla(event){
    console.log(event.key)
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}
/**
 * Para hacer el mapa responsive tomamos las medidas de nuestra pantalla. Como ejemplo si estamos 
 * usando las medidas definidas de 800(ancho)x600(alto) de nuestra imagen pero queremos verlo en una 
 * pantalla de 200 de ancho podriamos calcular la altura nueva con la siguiente  formula para que 
 * sea proporcional nuevaAltura = 200 x 600 / 800
 */
function iniciarMapa(){
    /*mapa.width = 800
    mapa.height = 600*/

    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    sectionVerMapa.style.display = 'flex'
    intervalo = setInterval(pintarCanvas, 50) 

    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++){
        if(mascotaJugador === mokepones[i].nombre){
            return mokepones[i]
        }
    }
}
/**
 * Creamos una funcion para determinar si hay una colision entre dos elementos de el mapa.
 * Para eso comparamos una serie de valores haciendo referencia a los lados de los objetos
 * en el mapa. ejemplo: si se cumple alguna de las siguientes condiciones significa que NO
 * hay colision.
 *      abajoUno        <       arribaDos
 *      arribaUno       >       abajoDos
 *      derechaUno      <       izquierdaDos
 *      izquierdaUno    >       derechaDos
 * 
 * Luego de que se ha producido una colision ocultamos la secion del mapa y nos dirigimos
 * a la seccion preparada para el combate.
 * pasamos la mascota contra la que colisionamos como parametro para que sea esta contra la que
 * nos enfrentemos y no una mascota aleatoria.
 * 
 * Detenemos el intervalo y lo limpiamos con el metodo clearInterval(nombreDelIntervalo)
 * para que asi no nos llame la funcion detenerMoviemiento() en mas de una ocasion.
 */
function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if (abajoMascota < arribaEnemigo || 
        arribaMascota > abajoEnemigo || 
        derechaMascota < izquierdaEnemigo || 
        izquierdaMascota > derechaEnemigo
        ){
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)

    enemigoId = enemigo.id

    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
    /*alert('Hay colision con ' + enemigo.nombre)*/
}

window.addEventListener('load', iniciarJuego)