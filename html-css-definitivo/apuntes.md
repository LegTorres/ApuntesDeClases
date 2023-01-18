# **CURSO DEFINITIVO DE HTML Y CSS**

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

___
# **ETIQUETAS MULTIMEDIA**


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

## **Cual es la funcion de la etiqueta `<figure> </figure>`?**
Es un contenedor mas apropiado para almacenar una imagen, ilustracion, diagrama, etc. Se puede usar en conjunto con la etiqueta `<figcaption> </figcaption>` para mostrar una pequeña descripcion de la imagen, como el autor, fuente, etc.
> Nota: La etiqueta **figure** representa contenido independiente, a menudo con un titulo. Por lo general contiene imagenes a las que se hace referencia en texto principal, pero que se puede mover a otra pagina o a un apendice sin que afecte al flujo principal.
Ejemplo:
~~~html
<figure>
    <img
        src="./pics/tinified/small.jpg"
        alt="Es una imagen de un perrito"
    />
    <figcaption>Es una imagen de un perrito</figcaption>  
</figure>
~~~

## **Cual es la etiqueta HTML utilizada para insertar un video en nuestra pagina?**
~~~html
<video src="./videos/video.m4v#t=10,60" controls preload="auto"></video>
~~~
> El atributo `controls` es necesario para mostrar los botones de control en el video. Es un atributo que no necesita de un valor para funcionar.

> El atributo `preload` hace que el video empiece a cargar desde el inicio del renderizado de la pagina para que cuando el usuario quiera visualizarlo este disponible. Nota: Solo hace que el video se cargue desde el principio, no que se reproduzca automaticamente, ya que dicho comportamiento es considerado una mala practica y algunos navegadores penalizan su uso.

> El agregado `#t=10,60` implica que al darle reprodicir al video, este comenzara el segundo **10** y que se detendra en el segundo **60**.

## **Cual seria la forma recomendable de agregar fuentes de diferentes formatos de un video?**
Utilizando la etiqueta `<source>`. Por ejemplo:
~~~html
<video controls preload="auto">
    <source src="./videos/video.m4v#t=10,60"/>
    <source src="./videos/video.mp4#t=10,60"/>
    <source src="./videos/video.webm#t=10,60"/>
</video>
~~~
> Esto es util en caso de que el navegador no reconozca alguno de los formatos de video. Omitira los que **no** reconoce y reproducira aquel que **si**.

___
# **FORMULARIOS**

## **Cual seria un ejemplo de formulario en HTML?**
La etiqueta `<form> </form>` define un formulario. Dentro de ella se colocan los diferentes input para obtener la informacion del usuario.

Se define el tipo de `input` por medio del atributo `type`. Algunos ejemplos mas comunes son los siguientes:
- `text`: Define un input de tipo texto.
- `date`: Define un input de tipo fecha.
- `time`: Define un input de tipo hora.

~~~html
<form action="">
    <label for="nombre">
        <span>Ingresa tu nombre:</span>
        <input type="text" id="nombre" placeholder="Cual es tu nombre?">
    </label>
    <label for="inicio-clase">
        <span>Ingresa tu fecha de inicio a clases:</span>
        <input type="date" id="inicio-clase">
    </label>
    <label for="horario">
        <span>Ingrese su horario:</span>
        <input type="time" id="horario">
    </label>
    <input type="submit">
</form>
~~~

> El atributo `placeholder` coloca un texto auxiliar dentro del delemento input.

> El atributo `for` de la etiqueta `label` vincula una etiqueta `input` a traves del **id** de esta ultima, por lo tanto, el `id` de un elemento debe ser igual que el `for` de su respectivo `label`

> El elemento de tipo `submit` genera un boton que enviara al servidor la informacion recogida en los campos en nuestra pagina web.

## **Ejemplo de creacion de un calendario dentro de un formulario HTML**
La manera mas facil de crear un calendario para programar eventos en un sitio web es a traves input de tipo `datetime-local`, lo cual creara un input en el que podemos escoger el **dia**, el **mes**, el **año**, y la hora de una sola vez. El codigo seria asi:

~~~html
<input type="datetime-local" id="calendario" name="calendario">
~~~

Otra manera seria creando las etiquetas para dia, semana, mes, y hora de manera individual. Esto, si bien es un poco mas laborioso permite tener un mayor control al momento de trabajar con las fechas. Ejemplo:

~~~html
<input type="time" id="hora" name="hora"/>

<input type="date" id="dia" name="dia"/>

<input type="week" id="semana" name="semana"/>

<input type="month" id="mes" name="mes"/>
~~~

> El atributo `name` en el ejemplo anterior, identifica un input dentro de el formulario, y nos permite hacer referencia al control cuando la informacion contenida es enviada.

## **Haciendo uso de `autocomplete` y `require`**
El atributo `autocomplete` permite dar la opcion de rellenar automaticamente la informacion en el campo correspondiente de un formulario, siempre que esta se haya ingresado en el navegador previamente, ya sea en esta pagina o en otra. Los valores del atributo `autocomplete` **no** se fijan automaticamente en nuestros campos de formulario. Deben ser especificados por el desarrollador y elegidos por el usuario al momento de rellenar la informacion.

El atributo `require` hace que rellenar el campo especificado sea de caracter obligatorio. Es un atributo que no necesita un **valor**.

Ejemplos:

~~~html
<input type="text" id="nombre" name="nombre" autocomplete="name" required>

<input type="email" id="correo" name="correo" autocomplete="email" required>

<input type="text" id="pais" name="pais" autocomplete="country" required>

<input type="number" id="cp" name="cp" autocomplete="postal-code" required>
~~~

## **Etiqueta `select`**
~~~html
<select name="cursos" id="">
    <option value="JavaScript">JavaScript</option>
    <option value="HTML 5">HTML 5</option>
    <option value="CSS 3">CSS 3</option>
    <option value="Web Standars">Web Standars</option>
</select>
~~~
> Nota: El atributo `value` es especialmente importante en esta etiqueta, debido a que si no se especifica no se enviara el valor seleccionado al momento de mandar la informacion del formulario, enviando un campo vacio. 

Es mas recomendable utilizar la etiqueta `input` con el atributo `list`, seguido de la etiqueta `<datalist> </datalist>`, dentro de la cual se colocaran las etiquetas `<option> </option>`, en lugar de la etiqueta select, pues es mas accesible al haber multitud de opciones a elegir, sobretodo al acceder al formulario desde un dispositivo movil, pues esta opcion nos permite escribir lo que estamos buscando para filtrar resultados, ademas que permmite capturar el texto que hayamos escrito aun si ese no se encuentra entre las opciones a elegir.
En este caso no se debe escribir contenido dentro de la etiqueta `option`, pues lo que sera visible sera el valor del atributo `value` y no su contenido.

Ejemplo:
~~~html
<input list="clases">
<datalist id="clases">
    <option value="JavaScript"></option>
    <option value="HTML 5"></option>
    <option value="CSS 3"></option>
    <option value="Web Standars"></option>
</datalist>
~~~

## **Diferencia y similitudes entre input tipo `submit` y la etiqueta `button`**
Ambos se pueden utilizar para enviar la informacion del formulario. Al la etiqueta `button` se le puede agregar el atributo `type="submit"` y tendra la misma funcion que la etiqueta `input`. 
- La etiqueta `button` se abre y se cierra, mientras que el input tipo `submit` no.
- Para modificar el texto en la etiqueta `button` lo hacemos escribiendo el contenido en la etiqueta. Para hacerlo en la etiqueta `input`, lo hacemos especificandolo como valor en el atributo `value`.
- La etiqueta `button` es mas flexible y personalizable que la etiqueta `input`.


___
# **MANEJO DE CSS**

## ***Definicion de CSS*
CSS (Cascading Style Sheets), es el estandar para poder dar estilos a nuestros documentos HTML.

##   **Etiquetas para aplicar CSS en un documento HTML**
se puede aplicar estilos CSS de varias maneras.

La forma mas recomendada es enlazando nuestra pagina web a un archivo con extencion **.css** a traves de la etiqueta `link`. dentro del `head` de nuestro documento HTML.
~~~html
<link rel="stylesheet" href="archivo.css">
~~~
La segunda forma de agregar estilos es escribiendo el codigo CSS dentro de las etiquetas `style` en el head de nuestro documento HTML. Esto es recomendable solo si son muy pocas lineas de codigo CSS, ya que hara mas pesada nuestra pagina y tardara mas en cargar.
~~~html
<style>
    /*Codigo CSS*/
</style>
~~~
Y la tercer forma es aplicando el codigo CSS con el atributo `style` dentro de una etiqueta HTML. A esto se le llama **Estilo embebido**. Hay que tratar de evitar esta practica lo mas que se pueda.
~~~html
<p style="color: blue; font-size: 30px;">Parrafo de texto.</p>
~~~

## **Tipos de selectores CSS**

 **Selectores Basicos**:
- **Selectores de Tipo**:
Que coincidan con el nombre de una etiqueta HTML.
- **Selector de Clase**:
Que coincidan con el atributo `class` de la etiqueta HTML. Se especificarla escribiendo el signo de punto `(.)` delante del nombre de clase.
- **Selector de Identificador Unico (id)**:
Que coincida con el atributo `id` de la etiqueta HTML. Se especifica colocando el simbolo de numeral `(#)` delante del nombre de id.
> Para nombrar clases en CSS es recomendable usar la tecnica **BEM**, una de las mas utilizadas en desarrollo.
- **Selector de Atributo**:
Que coincidan con el atributo y valor especificado. Se especifica escribiendo el nombre de la etiqueta HTML, seguido de atributo y valor entre corchetes. Por ejemplo: `a[href="URL"]{ }`
- **Selector Universal**:
Selecciona todos los elementos del documento mediante un asterisco (*).
> Recomendacion: Es recomendable agregar en todos los proyectos es selector universal para establecer un `marging` y `padding` en 0 ademas de hacer uso de la propiedad `box-sizing`, para evitar problemas con los bordes en nuestros proyectos. Ejemplo:
~~~css
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
~~~

**Selectores Combinadores** (Union de dos o mas selectores):
- Combinadores Descendientes:
Todos los elementos del selector de la derecha que son hijos del selector de la izquierda, independientemente de la profundidad. Van separados por espacio. Ejemplo: 
        `padre hijo { }`
- Combinador de Hijo Directo:
Todos los elementos de la redecha que son hijos directos (En el primer nivel de profundidad) de la izquierda. Estan separados por el simbolo mayor que (>). Por ejemplo:
        `padre > hijos_directos { }`
- Combinador de Elementos Adyacentes:
Todos los elementos del selector de la derecha que esten adyacentes (que compraten el mismo padre y estan inmediatamente situados hacia abajo de otro elemento)  al selector de la izquierda. Estan separados por el signo mas (+). Ejemplo:
        `elemento_html + elemento_adyacente { }`
- Combinador General de Hermanos:
Todos los elementos del selector de la derecha que son hermanos (Que comparten el mismo padre y estan situados hacia abajo de otro elemento) de selector de la izquierda. Estos selectores estan separados por el simbolo de virgulilla (~). 
> Nota: Una vez cumplida la regla especificada en el combinador(A inmediatamenbte despues de B), no importa si las siguentes etiquetas cumplen esa condicion, el estilo se aplicara siempre.

**Selectores Pseudoclases**:
- Definen el estilo de un estado especial de un elemento. Por ejemplo si esta posicionado el puntero del mouse sobre un elemento o si un enlace ha sido visitado o no, etc.  La pseudoclase va separada del selector por los dos puntos (:). Ejemplo:
    `selector : pseudoclase { }`

**Selectores Pseudoelementos**:
- Definen el estilo de una parte especifica de un elemento. Los pseudoelementos van separados de los selectores por dos puntos dobles (::). Ejemplo:
    `selector ::pseudoelemento { }`
> Nota: No debe haber espacio entre los dos puntos dobles y el pseudoelemento.

## **Herencia en CSS**
Es el codigo de CSS que se va a transferir de un padre a un hijo. En el siguiente ejemplo se puede ver como `h1` hereda el tamaño de fuente de la etiqueta `html` utilizando el valor `inherit` en la propiedad `font-size`
~~~css
html {
    font-size: 12px;
}

h1 {
    font-size: inherit;
}
~~~

## **Especificidad en los selectores**
**Importancia:**
1.  Hoja de estilo de agente de usuario. (Estilos del navegador)
2.  Declaraciones normales en hojas de estilo de autor. (Nuestro CSS)
3.  Declaraciones importantes en hojas de estilo de autor. (Utilizando el !important)

**Especificidad**
|Selectores|Especificidad|Descripcion|
|--|--|--|
|!important|1.0.0.0.0|Es el mas importante de todos|
|Inline styles|0.1.0.0.0|Estilos dentro de la etiqueta HTML|
|#id|0.0.1.0.0|Elementos que tienen un id|
|.class|0.0.0.1.0|Elementos que tienen una clase|
|tag|0.0.0.0.1|Etiquetas de HTML|
> Nota: La especificidad se puede combinar si aplica mas de un tipo de selector: Por ejemplo: Si tenemos una etiqueta que tiene un id y una clase, eso tendra mas importancia para el navegador al momento de aplicar estilos que aquellas que solo tienen un id, ya que su especificidad de suma.
> Nota: Editores como **Visual Studio Code** ayudan a identificar la especificidad que posee un selector cuando pasamos el puntero del mouse sobre el. Por ejemplo si muestra un `1.0.1` quiere decir que este selector tiene la especificidad de un **ID** y de una **Etiqueta** mas no el de una clase, pues su valor esta en cero.
> No se recomienda usar demasiados IDs en nuestro documento HTML, ya que el abuso puede ocasionar conflictos al momento de aplicar estilos con CSS.

**Orden de las fuentes**

Las declaraciones al final del documento anularan a las que sucedan antes en caso de conflicto. Eso aplica tambien a los documentos CSS si tenemos enlazada nuestra pagina web a mas de uno.

## **Reglas de cascada**
En el caso de darse un conflicto en la declaracion el navegador evaluara lo siguiente en el orden a continuacion hasta encontrar la que aplique para resolver el conflicto:
1. Las declaraciones tienen diferente origen o *!important*?
2. Tienen algun *Inline style*?
3. Los selectores tienen una especificidad diferente?

> En caso de que el resultado sea verdadero aplica la declaracion copn la mayor prioridad. Si no es el caso, entonces utiliza la declaracion que viene en su fuente original.

## **Cuatro tipos de combinadores que nos permiten combinar multiples selectores y crear una mayor especificidad.**
- Hermano adyacente o cercano (Adjacent Sibling):  
`h2 + p { }` En este caso aplica estilos a los **parrafos** que estan inmediatamente despues de un **h2**
- Hermano general (General sibling):  
`h2 ~ p { }`Aplica estilos a los **parrafos** que sean hermanos generales (esten en el mismo contenedor con un **h2**, sin importar si son inmediatos o no)
- Hijo:  
`div > p { }` Aplica estilo a un **parrafo** que sea hijo directo de un **div**. Un hijo directo es aquella etiqueta que esta contenida dentro de la etiqueta padre pero fuera de cualquier otra etiqueta.
- Descendiente (Descendant):  
`div p { }` Aplica a todos los **parrafos** que esten dentro de un **div**, ya sean hijos directos o si esta dentro de otra etiqueta.

## **Tipos de medidas en CSS**
- Medidas absolutas:  
Estas no cambian sin importar el tamaño de la pantalla.
    - **pixeles (px)**. 
- Medidas relativas:  
Medidas en base al tamaño de la pantalla del dispositivo deonde visualizaremos nuestra pagina.
    - **Porcentaje (%)**
    - **Elemento (em)**:  
    El elemento tomara el tamaño de fuente que tiene el padre directo y eso equivaldra a **1em**. Por ejemplo, los navegadores por defecto asignan un tamaño de fuente de **16px** heredada desde la etiqueta **html**, por lo que **1.5em** serian **24px**. Es importante tomar en cuenta que el aplicar a varios elementos anidades una medidas en **em** pueden tener resultados no deseados si no somos cuidadosos con la aplicacion de esta medida.
    - **Root em (rem)**
    - **(max-width / min-width)**
    - **(max-height / min-height)**
    - **Viewport width (vw)**
    - **Viewport height (vh)**