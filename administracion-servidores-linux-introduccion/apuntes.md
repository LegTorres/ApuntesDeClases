# **INTRODUCCION A LA ADMINISTRACION DE SERVIDORES LINUX**

## **Habilidades de un Administrador de Sistemas**
Algunas habilidades clave que debe manejar un administrador de servidores (tambien conocido como SysAdmin) serian las siguientes:
- **Control de Accesos**:  
Esta habilidad hace referencia a poder controlar el acceso de los diferentes usuarios o grupos a los diferentes archivos, recursos del sistema, etc.
- **Monitoreo del Sistema**:  
Todo administrador debe saber quien esta accediento al sistema en todo momento y cuantos recursos de software o hardware estan utilizando.
- **Administracion de Recursos**:  
Decidir cuantos recursos, como por ejemplo memoria o almacenamiento  vamos a asignar a cada usuario o proceso dependiendo de su requerimientos.
- **Troubelshooting**:  
Es, quizas, la habilidad mas importante que debe tener un administrador de sistemas, ya que siempre van a ocurrir errores, ya sean humanos, de actualizaciones, o incluso de cenexiones. Por eso es importante saber que esta pasando en el sistema, y de esa manera poder resolver cualquier problema que surja.
- **Instalacion y Mantenimiento de Software**.
- **Creacion de Respaldos**.
- **Documentacion**.

## **Roles que puede desempeñar un SysAdmin**
- **DevOpe Engineer**:  
Se enfoca en los procesos y metodologias para la correcta liberacion en el proceso de desarrollo de software. Es decir, crear servidores de testing, poder mandar a produccion el codigo y tener las mejores practicas.
- **Site Reliability Engineer**:  
Se enfocan en que los sistemas de software operen de manera correcta y con el mayor grado de confiabilidad posible. Basicamente consiste en que las aplicaciones siempre esten disponibles para que los usuarios y las aplicaciones las puedan consumir.
- **Security Operations Engineer**:  
Encargados de mantener la seguridad de los sistemas a nivel de red y aplicaciones.
- **Algunos otros roles**:
    - **Network Engineer**:  
    Se encargan de que todo a nivel de red este bien y que todos los servidores esten conectados y configurados de manera correcta.
    - **Database Administrator**:  
    Esta enfocado a gestionar servidores que ofrecen servicios relacionados con bases de datos.
    - **Network Operation Center Engineer**:  
    Ingenieros que se encargan de dar mantenimiento a servidores en data center.
    - **MLOps Engineer**:  
    Es un SysAdmin que se enfoca en sistemas de inteligencia artificial o machine learning.
    - **Cloud Engineer**:  
    Son administradores de sistemas que adminstran servidores o servicios directamente en la nube.

## **Que Es un Servidor?**
Un servidor es un grupo de recursos tecnologicos (software y hardware) que cumplen con uno o varios propositos. Estos usualmente reciben peticiones de un cliente y luego otorgan una respuesta. Los servidores se popularizaron en la decada de los 70s y 80s, y seguian una arquitectura denominada **mainframe-terminal**. la mainframe era una computadore enorme con muchos recursos de hardware y software a la cual se conectaban pequeñas terminales a las que se les denominaba **dumb terminals**. Estas terminales, una vez conectadas al mainframe tenian la posibilidad de ejecutar muchas operaciones basicas.

En la actualidad, se utiliza una arquitectura muy parecida a la descrita mas arriba, pero con equipos que cuentan con una cantidad de recursos muy superiores a los del pasado. En lugar de terminales se utilizan **clientes** los cuales pueden ser una computadora, una laptop, un telefono inteligente que por medio de **internet** se conectan a un **servidor**.

## **Tipos de Servidores**
Los servidores se especializan dependiendo de la tarea que vayan a realizar. Algunos ejemplos de ellos son:  
- **Web (Frontend, Backend)**:  
Alojan aplicaciones que tengan que ver con la web para que se pueda acceder a ellas por medio de un navegador o aplicacion.
- **Bases de Datos**
- **De Pruebas**
- **Videojuegos**
- **Medios**:  
Son servidores encargados de almacenar archivos como fotografias, videos y poder compartirlos con determinados usuarios.
- **Emails**
- **Impresion**
- **Archivos y Recursos (SFTP, SMB)**:  
Se encargan exclusivamente de almacenar archivos y que estos puedan ser compartidos entre diferentes usuarios, por ejemplo, de una oficina o una red privada.
- **VoIP**:  
Se encargan de crear servicios para llamadas telefonicas a traves de internet.
- **Otros Mas**

## **Que Es un Sistema Linux/UNIX?**
Linux es el **kernel** o nucleo de un sistema operativo. Comunmente se encuentra a los diferentes sistemas operativos Linux dentro de la familia **GNU/Linux** y esta formado por la inmensa cantidad de software montado sobrte el nucleo de Linux. Los diferentes sistemas GNU/Linux son conocidos como **distribuciones**. Algunas de las distrubuciones Linux mas utilizadas para servidores son **RedHat (REL)**, **Ububtu Server**, y **Debian**.

## **Arquitectura de un Sistema UNIX/Linux**
La arquitectura de un sistema operativo de tipo UNIX/Linux esta conformado por direfentes **capas**:
1. **Hardware**:  
Son todos los dispositivos fisicos conectados al sistema (discos, mouse, memoria, procesador, teclado, etc.)
2. **Kernel**:  
Es la clave de todo sistema operativo Linux. Es la pieza de software que nos permite controlar todo el hardware de nuestro servidor como el uso de memoria o CPU, por ejemplo.
3. **Shell**:  
Es la interfaz que esta entre el kernel y el usuario. Es quien nos permite ejecutar comandos y pasarlos a un sistema de bajo nivel.
4. **Utilities (Aplicaciones)**:  
Es donde el usuario interactua directamente. Es en esta capa donde trabajan nuestros comandos y aplicaciones.

## **Software Libre y Open Source**
El **software libre** es aquel que cumple con las cuatro libertades siguientes:

0. La libertad de **ejecutar** el programa.
1. La libertad de **estudiar** el funcionamiento del programa y modificarlo.
2. La libertad de **redistribuir**.
3. La libertad de **distribuir copias de sus versions modificadas** a otras personas.

El **Open Source** es aquel que aunque comparta el codigo fuente de una aplicacion mantiene ciertas restricciones y limitaciones. Por ejemplo, una empresa puede tener el derecho a compartir el codigo fuente de algun proyecto pero no necesariamente puede tener el derecho de venderlo o redistribuirlo.

## **Sietemas Operativos y Distribuciones**
Una distribucion es un sistema operativo que puede usar el Kernel de Linux. Estas pueden variar en el formato, manejador de paquetes y popularidad. 

Existen diferentes versiones de un mismo sistema operativo. Por ejemplo, hay versiones de soporte extendido denominadas **LTS** que por norma cuentan con un soporte de 5 años y que son las recomendable para instalar.

En **Debian** existen los repositorios **Non-free** son aquellos repositorios que contienen paquetes con licencias no aprobadas por los lineamientos de la **Debian Free Software**.

Tambien existen difenrentes manera en como se distribulle el software en las diferentes distribuciones. Las mas comunes son dos:
- **Rolling Release**:  
Las actualizaciones se publican al momento de desarrollarse. Algunos ejemplos son las distribuciones como **Arch Linux** y **Gentoo-based**.
- **Fixed Release**:  
Las actualizaciones son primeramente probadas y posteriormente son publicadas.

## **Ecosistemas Donde se Encuentran Nuestros Servidores?**
Dependiendo de las necesidades los servidores se pueden alojar en diferentes ecosistemas. Por ejemplo:
- **On Premise**:  
Todo el hardware y software del servidor es alojado y mantenido por la organizacion propietaria de el servidor.
- **Cloud**:  
Son servidores alojados en la nube, ya sea publica o privada. Estos servidores le pertenecen a otra empresa quienn es la encargada del hardware, software y de darles mantenimiento. El SysAdmin solo se encarga de administrarlo.
- **Hybrid**:  
Es una combinacion de servicios on-premise y cloud.

En la actualidad, la inmensa mayoria de los servidores se encuentran alojados en **data centers**.

## **Formas de Montar un Servidor**
Existen diversas maneras de montar un servidor linux. Las mas utilizadas son:
- **Instalacion Directa**:  
Se instala un sistema operativo para ocupar el 100% de los recursos de software y hardware dedicados ya sea en un solo servicio o varios.
- **Virtualizacion**:  Se instala el software que sirve como **host** conocido como **hypervisor** que administra los recursos para crear multiples **guests** o **maquinas virtuales**. Un ejemplo de Hypervisor podria ser **VirtualBox**.
Existen dos tipos de hypervisors.
    - **Tipo 1 (Bare-metal)**:  
    Consiste en montar el Hypervisor (a nivel de firmware directamente) en la capa de hardware. Esto nos permite crear nuestros guest a traves de una shell o linea de comandos. Laventaja de este ripo de virtualizacion es que **no necesita de un sistema operativo para funcionar**. El kernel de Linux posee una variacion llamada **KVM (Kernel Virtualizatio Machine)** que nos permite crear un Hypervisor para administrar los recursos de esta forma.
    - **Tipo 2 (Hosted)**:  
    Este tipo de virtualizacion consiste en, sobre nuestro hardware, montar un sistema operativo y sobre el montamos un Hypervisor que manejara los guest.

Es muy comun el uso de **contenedores**, que por lo general son sistemas que van a correr sobre **docker** o sistemas que soporten contenedores.  Un contenedor no es lo mismo que una maquina virtual, y la diferencia radica en que la maquina virtual tiene sus recursos fisicos directamente asignados, mientras que un contenedor, aunque se podria considerar como una especie de "virtualizacion" ya que comparte recursos con el sistema operativo principal, pero no es tan personalizable como una maquina virtual, sobretodo al momento de la asignacion de hardware. Un contenedor es mucho mas libiano que una maquina virtual, por lo general pesan en orden de MB mientras que las VMs pesan por lo general GBs.

# **Instalacion y configuracion de VirtualBox**
Para el curso utilizaremos el software VirtualBox, de preferencia sobre Windows o Linux, ya que en los nuevos dispositivos MacOS que usan el procesador M1 epor el momento generan problemas para crear servidores.

Luego de instalado VirtualBox devemos crear nuestra primera maquina virtual para eso seguimos los siguientes pasos:  
- Damos click a el boton **Nueva**.
- Ingresamos el **nombre** de nuestra maquina virtual, el archivo **.ISO** y la informacion de nuestra maquina virtual.
- Configuramos la cantidad de **memoria** y el numero de **procesadores** que contendra nuestra VM.
- Configurar la cantidad de espacio del **disco virtual**.
- Mostrara un resumen de las configuraciones de nuestra VM, damos click en **Terminar**.
- Teniendo seleccionada nuestra VM le damos click a boton **Configuracion**.
- Nos vamos a la opcion **Red**, luego en la opcion **Conectado a:** escogemos la opcion **Adaptador puente**, y escogemos el adaptador de red de nuestro sistema operativo en la opcion **nombre:**. Damos click en **Aceptar**

## **Instalacion de Ubuntu Server**

Para comenzar con el proceso de instalacion de Ububtu Server damos click en el boton **Iniciar** y se nos abrira una ventana con la carga del sistema operativo. Para interactuar con la VM solo necesitamos dar click en cualquier parte de la ventana que simula la pantalla de nuestra VM.  
Una vez cargando seguimos los siguientes pasos:
- Seleccionamos la opcion **Probar o instalar Ubuntu Server**.
- Selecionamos el **Idioma** de nuestra distribucion.
- Seleccionamos la **Distribucion de Teclado**.
- Escogemos el **tipo de instalacion**. Esta puede ser la instalacion minima o completa.
- Escogemos nuestro **adaptador de Red**. En caso de haberlo seleccionado en el momento de crear nuestra VM sera mas sencillo. Por lo general sera la opcion **enp0s3 eth -**.
- Configuracion del **servidor Proxi**. Estos servidores son los encargados de monitorizar todo el trafico de nuestra red. Para el caso actual podemos dejarlo en blanco.
- Configurar los **repositorios del sistema operativo** en caso de que queramos modificarlo.
- Configuramos las **particiones de nuestro disco**.Podemos elegir entre usar el disco entero o hacer un particionado custom. Es aqui donde podemos seleccionar la opcion de **encriptar el grupo LVM con LUKS**. Esto nos permite agregar una contraseña para nuestro servidor pueda arrancar.
- **Verificamos** las configuraciones hechas.
- Nos pedira que confirmemos las configuraciones y le damos enter a **Continuar**.
- Creamos nuestro **Perfil de Usuario**.
- Escogemos **Instalar servidor OpenSSH** para las conexiones remotas.
- Escogemos en caso de preferirlo, podemos **configurar nuestro servidor de una manera especifica** escogiendo los paquetes que podamos necesitar, como paquetes para trabajar con contenedores... etc.
- Comienza la **instalacion de sistema operativo**. Luego solo necesitamos reiniciar el sistema e iniciar sesion con nuestro usuario y contraseña.

>En la particion **BIOS grub Spacer** se instala el gestor de arranque del sistema (grub). 

> Para salir de la maquina virtual soolo necesitamnos presionar dos veces la tecla **Ctrl Derecha**.

En caso de que aparezca un mensaje de error **Kernel driver not installed (rc=-1908)** en nuestra distribucion Linux podemos solucionarlo instalando el siguiente paquete y luego reiniciamos:

~~~bash
sudo pacman -S linux61-virtualbox-host-modules
~~~