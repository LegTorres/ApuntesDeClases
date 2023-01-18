/**
 * Creamos una variable donde almacenamos las caracteristicas de la libreria importada con el siguiente
 *  codigo y usamos la funcion require("nombreLibrerias") para poder usar las librerias que hemos 
 * instalado a traves de NPM
 * 
 * Declaramos la constante cors para trabajar con la libreria cors.
 */
const express = require("express")
const cors = require("cors")
/**
 * Creamos una variable que almacenara la aplicacion que representara a nuestro servidor y que se encargara
 * de ponerle el codigo para recibir las peticiones de nuestros clientes y que puieda responderles. 
 * para eso usamos la variable creada mas ariba como si fuera una funcion 
 */
const app = express()
/**
 * La funcion express.static nos sirve para poder conectarnos servidor de node desde cualquier dispositivo
 * en nuestra red.
 * En los parametros escribimos la carpeta que alojara los archivos y recursos para poder acceder a ellos
 * desde nuestro navegador. Por convencion se suele nombrar a la carpeta public.
 */
app.use(express.static('public'))
/**
 * Le especificamos a la aplicacion que use la libreria cors a traves del metodo .use(libreria())
 *  y la libreria se utiliza como una funcion, por lo tanto debe agregarsele los parentesis.
 * Como vamos a empezar a trabajar con peticiones tipo POST para recibir datos de los usuarios 
 * vamos a activar las peticiones que soporten el JSON como parte de su cuerpo, y lo hacemos con el 
 * metodo .json() de la libreria express
 * 
 */
app.use(cors())
app.use(express.json())
/**
 * Creamos una variable para agregar los jugadores. la declararemos como una lista vacia.
 */
const jugadores = []
/**
 * Creamos una clase que va a representar a todos los jugadores.
 */
class Jugador{
    constructor(id){
        this.id = id
    }

    asignarMokepon(mokepon){
        this.mokepon = mokepon
    }
    
    actualizarPosicion(x, y){
        this.x = x
        this.y = y
    }

    asignarAtaques(ataques){
        this.ataques = ataques
    }
}
/**
 * Creamos la clase mokepon
 */
class Mokepon{
    constructor(nombre){
        this.nombre = nombre
    }
}
/**
 * la funcion get() nos sirve para que cada vez que un cliente solicite un recurso vamos a realizar algo.
 * Tenemos que indicarle dos cosas en los parametros: primero, en que url va a solicitar esos recursos
 * y segundo, como vamos a procesar esa solicitud (como vamos a recibir los datos de esa peticion y
 * como vamos a responder a la peticion).
 * con la funcion send("Respuesta") enviamos una respuesta al usuario.
 * Modificamos nuestro primer endpoint ("/") y le agregamos un nombre("/unirse") que es a donde los 
 * jugadores podfran llamar este recurso para poder unirse al juego, y luego en lugar de responder con un 
 * saludo que lo haga devolviendo un id random para el jugador.
 * Con la linea donde declaramos la constante id usamos lo que se conoce como un template string, es decir
 * hacemos que ese numero se convierta en una cadena de texto para hacer que el id siempre lo manejemos 
 * como texto.
 * creamos un obvjeto de la clase Jugador y le pasamos como parametro el id que generamos
 * Despues insertamos el id del jugador en la lista de jugadores.
 * 
 *  
 * Por medidas de seguridad, lo legitimo seria que la peticion venda de una pagina que este alojada en 
 * el mismo sitio, de lo contrario nos devolvera un error de "Access-Control-Allow-Origin", para evitar
 * esto es necesario indicarle especificamente que este tipo de solicitudes se pueden aceptar por 
 * medio de una cabecera a traves de la funcion setHeader(). Para habilitar todos los origenes
 * se puede usar como argumento '*', pero debemos ser muy cuidadosos al utilizar este parametro, 
 * porque puede ser muy inseguro.       
 */
app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`
    const jugador = new Jugador(id)

    jugadores.push(jugador)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send(id)
})
/**
 * Creamos un nuevo servicio para que se utilicen peticiones con el metodo post
 * Es buena practica que cada servicio se encargue de una sola tarea.
 * Creamos una variable conocida como tipo PARAMETRO, que es una variable que viene en la URL
 * al momento de realizar la peticion, y en nuestro caso la usaremos para almacenar el id del jugador
 * que esta seleccionando el mokepon. Las variables en express se definen con dos puntos(:) delante del
 * nombre de la variable.
 * Seguido de eso, ya podemos poner la funcion callback que procesa la solicitud 
 * 
 * Creamos una constante llamada jugadorId, y en ella almacenamos lo que se agregue al post como parametro
 * a traves de la propiedad req.params.nombreDelParametro o en caso de no obtenerlo que nos devuelva una 
 * cadena vacia. Mostramos la lista de jugadores que se conecten y sus id, y luego de eso finalizamos la
 * respuesta para que no se quede cargando el servidor con el metodo .end()
 * 
 * La peticion la hacemos desde el frontEnd en la funcion de seleccionarMascotaJugador().
 */
app.post("/mokepon/:jugadorId", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const nombre = res.req.body.mokepon || ""
    const mokepon = new Mokepon(nombre)
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarMokepon(mokepon)
    }
    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})
/**
 * Creamos un nuevo servicio para que envie las cordenadas de nuestro mokepon a nuestro servidor.
 * 
 */
app.post("/mokepon/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].actualizarPosicion(x,y)
    }
    const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id)

    res.send({enemigos})
})
/**
 * Creamos nun servicio para recibir los ataques de nuestra mascota.
 */
 app.post("/mokepon/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const ataques = res.req.body.ataques || []

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarAtaques(ataques)
    }
        
    res.end()
})
/**
 * 
 */
app.get("/mokepon/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const jugador = jugadores.find((jugador) => jugador.id === jugadorId)
    res.send({
        ataques: jugador.ataques || []
    })
})
/**
 * 
 * Le decimos a nuestra aplicacion que escuche peticiones en el puerto 8080, ademas de un callback
 */
app.listen(8080, () => {
    console.log('Servidor funcionando correctamente')
})