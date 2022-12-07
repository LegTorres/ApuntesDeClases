# CURSO DEFINITIVO DE HTML Y CSS
## Cuestionario:
___
### **Que es el Frontend?**
Es la parte de un programa o dispositivo a la que un usuario puede acceder directamente. Son todas las tecnologías de diseño y desarrollo web que corren en el navegador y que se encargan de la interactividad con los usuarios.


### **Que debe saber un programador frontend?**
- HTML
- CSS
- JavaScript
- *Frameworks* o librerías que expanden sus capacidades para crear cualquier tipo de interfaces de usuarios. Por ejemplo:
    - Frameworks de JavaScript:
        - React JS
        - Redux
        - Angular JS
        - Vue JS
    - Frameworks de CSS
        - Bootstrap
        - Foundation CSS
        - Materialize CSS
    - Preprocesadores de CSS
        - Stylus
        - Sass
        - LESS
        - PostCSS, etc.
    - Compiladores y empaquetadores de JS
        - BABEL
        - Webpack
   

### **Que es el Backend?**
Es el responsable de manejar toda la logica detras de una peticion dada por el navegador hacia el servidor.

### **Que es un programador Full Stack?**
Es aquel que maneja tanto el *frontend* como el *backend*. La palabra *stack* (Pila o monton ingles) se refiera al grupo de tecnologias que componen un sitio web en todos los aspectos.

### **Cual es una de las caracteristicas que diferencian al backend del frontend?**
Es que el backend no tiene estandares, puesto que tiene varios lenguajes de programacion con los que debe trabajar. Cada uno de los lenguajes tiene sus propios frameworks como:
- Django (Python) 
- Lavarel (PHP)
- Rails (Ruby)
- Express (JavaScript)
- Spring (Java)

El backend tambien tiene en cuenta la **infraestructura** donde va a realizarse el *deploy* de su aplicacion, como por ejemplo:
- Google Cloud
- DigitalOcean
- AWS
- Heroku, entre otras.

### **Que es Deploy?**
Dependiendo del ambiente y de la tecnologia usada puede referirse a diferentes cosas, pero entre las mas comunes se refiera a: ***Implantar, colocar en posicion, habilitar para uso o, simplemente, publicar***

### **Cuales son los principales tipos de bases de datos?**
- Relacionales
- No relacionales

### **En que se basa la mayoria de interacciones entre el frontend y el backend?**
En el consumo de *API*

### **Cuales son algunas de las tecnologias full stack para desarrolladores?**
- LAMP (Linux, Apache, MySQL, PHP)
- MERN (MongoDB, Express.js, React, Node)
- PERN (PostgreSQL, Express.js, React, Node)

### **Que son los Sitios Web Estaticos y los Sitios Web Dinamicos?**
Los Sitios Web Estaticos, conocidos como *paginas informativas* o *landing pages* son aquellos cuya informacion se mantiene fija y su contenido no se actualiza. Por ejemplo:
- Menú de un restaurante
- Blog de viajes
- Página informativa de un negocio

En cambio los Sitios Web Dinamicos, tambien conocidos como **Aplicaciones Web** actualizan su informacion con respecto a la interaccion con el usuario. Dependen de bases de daros donde extraen e ingresan informacion. Ejemplos de sitios web dinamicos son:
- Sistema de reporte de ventas
- Linkedin
- Banca en línea


## **Cual es la estructura basica de HTML en una pagina web?**
- Container: contenedor principal
- Header: cabecera de la página. Aquí usualmente encuentras el logo y el menú de navegación del sitio.
- Main content: estructura principal. Por ejemplo, el feed o lista de publicaciones de una red social.
- Sidebar: contenido secundario de una página, que usualmente se encuentra a los lados del contenido principal (o main).
- Footer: pie de página. Esto se encuentra al fondo del sitio web, salvo en casos de sitios web donde el scroll (o navegación hacia abajo) es infinito, por ende, no tendría sentido ponerlo al fondo.

## **Cuales son los tres conceptos conforman la web?**
- URL: Uniform Resource Locator. El identificador único del sitio en el navegador (por ejemplo: <https://google.com>).
- HTTP: Protocolo de transferencia de hipertexto. Es el estándar que se utiliza para enviar datos a través de paquetes entre el cliente y el servidor.
- HTML: es el código que se emplea para estructurar el contenido de tu web, y darle sentido y propósito.

## **A que corresponden las siglas de HTML?** 
Corresponden a ***Hyper Text Markup Language*** (Lenguaje de Marcado de Hipertexto).
- Hyper Text significa que el texto tiene interactividad, conexión con otros documentos.
- Markup significa que le pone etiquetas a los elementos. Por eso también se le conoce como un lenguaje de etiquetas.
HTML es un lenguaje interpretado. Además, HTML es un estándar, así que no importa desde qué navegador o dispositivo se ejecute, el código sigue siendo el mismo en cualquier sitio.

## **Cual es la funcion de la etiqueta `<meta name="description" content="descripcion de la pagina">`?**
Muestra una descripcion sobre nuestra pagina web al momento de ser encontrada por algun buscador.

## **Cual es la funcion de la etiqueta `<meta name="robots" content="index,follow">`?**
Autoriza a que los robots de cualquier buscador para que pueda ayudarnos a colocar nuestra pagina con relacion a la busqueda que se hace.
> Para que el contenido de nuestra pagina no sea seguido se usa como valor del `content="index,nofollow"`.

## **Que etiqueta HTML le da un contexto semantico a las imagenes?**
La etiqueta `figure`.

## **Que caracteristica particular tiene la etiqueta `article`?**
La etiqueta `article` define la parte de nuestro contenido que puede vivir por sí mismo y pueden haber tantos como proyectos o eventos tenga nuestro portafolio.

## **Que funcion hace el atributo `href="#"` en una etiqueta de enlace?**
Evita que se reinicie la pagina al darle click al enlace.

## **Como se compone una etiqueta/elemento HTML?**
- Etiqueta de apertura
    - Atributos
        - Nombre del atributo
        - Valor del atributo
- contenido
- Etiqueta de cierre
> Nota: Una etiqueta puede tener tantos atributos como desees, y cada atributo tiene su propia funcion.

> Nota: No todas las etiquetas llevan una etiqueta de cierre. 

> Nota: Un elemento es la combinacion de una **etiqueta** mas su **contenido**

## **Cuales son los tipos de imagenes para la web?**
- **Lossless** (sin pérdida):
    - Capturan todos los datos del archivo original.
    - No se pierde nada del archivo original.
    - Puede comprimirse, pero podrá reconstruir su imagen al estado original
- **Lossy** (con pérdida):
    - Se aproximan a su imagen original.
    - Podría reducir la cantidad de colores en su imagen o analizar la imagen en busca de datos innecesarios.
    - Por consiguiente puede reducir su tamaño, lo que mejora el tiempo de carga de la página, pero pierde su calidad.
    - Los archivos tipo lossy son mucho más livianos que los archivos tipo lossless, por lo que son ideales para usar en sitios en donde el tamaño del archivo y la velocidad de descarga son importantes.

## **Cuales son los formatos de imagenes para la web?**
- **GIF** (Graphics Interchange Format): Formato de imagen sin pérdida, no se puede comprimir
- **PNG 8** (Portable Network Graphics): Formato de imagen sin pérdida, uso de colores de 256, se utiliza para logotipos e iconos para la página.
- **PNG 24** (Portable Network Graphics): Formato de imagen sin pérdida, utilización de colores ilimitados, alta calidad, si intentamos comprimir no ayudará demasiado por la gran cantidad de colores.
- **JPG / JPEG** (Photographic Experts Group): Formato de imagen con pérdida, perdemos calidad a la hora de comprimirlas, pero llegan a ser óptimas para la carga en la página web.
- **SVG** - Vector (Scalable Vector Graphics): Formato de imagen muy ligero sin pérdida, con svg no perdemos calidad, ya que está compuesta por vectores.
- **WebP**: Es un formato gráfico en forma de contenedor que sustenta tanto compresión con pérdida como sin ella. ​​Fue desarrollado por Google.

## **Cual es el tamaño optimo que debe pesar una imagen para la Web?**
70KB.

## **Cuales serian metodos recomendados para optimizar el peso de una imagen para la web?**
- Mejorar el tamaño de las imagenes:
    - Tiny PNG
- Retirar metadatos de las imagenes:
    - Verefix