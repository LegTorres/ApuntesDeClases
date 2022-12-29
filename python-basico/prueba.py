""" 
    Operadores en python
        + - * / 
        % se utiliza para obtener el modulo de una operacion.
        ** Se utiliza para elevar uun numero a una determinada potencia
        // se utiliza para hacer una division con enteros(esto es dejando un residuo)

    Operadores logicos:
        and 
        or
        not #Se usa para invertir el valor de una variable. Ej:
            es_estudiante = true
            not es_estudiante #cambia el valor de la variable a false

    Operadores de comparacion.
        ==      #Igual que
        !=      #Distindo que.
        >
        <
        >=
        <=
        
    Para declarar una variable en python no es necesario una palabra para definirla. Por ejemplo: numero1 = 3. 
    Si cambiamos el tipo de dato de una variable y le asignamos el nuevo dato a la misma variable, esta cambiara su tipo de dato por el nuevo. No es necesario crear una nueva variable para almacenar el valor nuevo.
    Para cambiar el tipo de dato de una variable podemos usar las siguientes funciones:
        int() Cambia un valor de cadena a uno de tipo entero.
        str() Cambia un valor ya sea entero o decimal al tipo cadena de texto.
        float() Cambia una valor al tipo de datos decimal.

    La funcion round(numero_decimal, cantidad_de_decimales) nos permite reducir el numero de decimales de un valor.

    Para escribir comentarios en diferentes lineas se usan las comillas triples. 
    Las variables NO PUEDEN empezar con un numero, las palabras siempre deben estar en minusculas, y  si estan formadas por varias palabras se separen con un guion bajo (_)

    Los 4 tipos de datos basicos que encontraremos en python son 4:
        Numeros enteros
        Numeros de punto flotantes
        Texto (Cadenas de caracteres)
        Booleanos (Verdadero y falso) #devuelve True o False (Nota: la inicial de True o False debe ser mayuscula)

    En python es indistinto utilizar comillas simples(') que comillas dobles(").
    Si el valor de una variable de texto lo escribes entre triple comilla python tomara en cuenta el numero de lineas que escribas, incluyendo los saltos de linea.

    Para concatenar textos en python se usa el simbolo mas (+)
    para repetir una cadena de texto un numero determinado de veces se usa el simbolo asterisco (*)

    la funcion input("Mensaje en pantalla: ") nos permite pedir al usuario que ingrese un dato en la pantalla y almacenarlo en una variable. El dato ingresado sera del tipo cadena, y para realizar operaciones debe convertirse a otro tipo de dato.

    Para dejar un espacio que no quieres programar en este momento puedes escribir la palabra reservada pass que le hara saber a python que escribiras ese codigo despues.

    Las estructuras en python deben respetar las sangrias de cuatro espacios, de lo contrario el programa no funcionara.

    Condicionales en python.

        Condicional IF
        if condicion:
            sentencia_del_programa1
        elif condicion_sino_si:
            sentencia_del_programa_2
        else:
            sentencia_del_programa3

    Bucles en python.

        Bucle WHILE
        while recorrido < LIMITE:
            sentencia
            recorrido = recorrido + 1

        El bucle while es denominado el bucle fundamental, ya que la mayoria de los lenguajes de programacion lo implementan de manera nativa.
        Para incrementar en 1 el valor de una variable se puede usar += 1.

        Bucle FOR
        for contador in range(numero_de_ciclos_menos_uno):
            sentencia
        
        La funcion range() en realidad contiene una lista de numeros desde el 0(si no se especifica con un primer parametro) hasta el valor entre parentesis. Nota, el bucle siempre llega a la posicion inmediata antes del especificado en el parametro de range. por ejemplo range(100) llegaria hasta 99.La variable que sirve de indice para cada ciclo del bucle no necesita ser declarada previamente. La funcion range() se puede sustituir por una cadena de texto, de esa forma el bucle recorreria la cadena caracter por caracter.
        Los bucles tambien se pueden interrumpir con la palabra reservada break y continue.
        Break: Finaliza el bucle.
        continue: Si lo usamos como condicion dentro de un ciclo no ejecutara el codigo siguientey saltara a la siguiente iteracion del bucle.

    Es recomendable crear las funciones en las lineas de arriba, para que cuando se necesiten esten disponibles. Python se va ejecutandop linea a linea de arriba a abajo
    Crear funciones en python:

        def nombre_de_la_funcion(parametro1, parametro2,):
            sentencia_de_la_funcion
            return valor_a_retornar

    Manejar cadenas.
        cadena.upper()                       Cambia todo el texto a mayusculas.
        cadena.capitalize()                  Cambia la primera letra a mayuscula.
        cadena.lower()                       Cambia toda el texto a minuscula.
        cadena.strip()                       Elimina los espacios innecesarios.
        cadena.replace(par1, par2)           Reemplaza el par1 por par2
        cadena[indice]                       Caracter en la posicion indice.
        len(cadena)                          Devuelve longitud de la cadena                               
        cadena[indice_inicial:indice_final]  Devuelve los caracteres desde el indice_inicial hasta el indice_final menos 1. Se puede obviar y tomara los caracteres en la posicion 0 o final. Un tercer elemento despues de indice final indicaria el numero de pasos que intercalariamos hasta llegar a indice_final. Ej: cadena = 'mi_nombre' cadena[0:10:2] nos devolveria 'm_obe' ya que iria de dos en dos. si el tercer valor es un numero negativo, entonces python recorrera la cadena en sentido inverso.

    Es recomendable dejar dos lineas de espacio entre cada funcion, asi como entre nuestra funcionm principal y el entry point.

    Para declarar una constante en python solo se escribe el nombre de la constante en mayusculas.

    Las LISTAS pertenecen a un conjunto llamado ESTRUCTURAS de DATOS, que nos permiten guardar varios valores dentro de una misma variable. En Python, los elementos no tienen porque ser del mismo tipo de dato, cosa que en otros lenguajes de programacion si.
    Para imprimir la lista completa no necesitamos esvribir los corchetes. Para acceder a un elemento especifico de la lista lo hacemos escribiendo el indice dentro de los corchetes (lista[i]).
    Declaracion de una lista:
        lista = [val1, val2, ..., valx]
    Funciones para manejar las listas:
        lista.append(elemento_por_agregar)  AGREGA UN ELEMENTO AL FINAL DE LA LISTA.
        lista.pop(indice_de_elemento_a_borrar) ELIMINA UN ELEMENTO DENTRO DE LA LISTA
        lista[::-1] DEVIELVE LOS ELEMENTOS DE LA LISTA EN SENTIDO INVERSO.

    Las TUPLAS son unas estructuras que a diferencia de las listas necesitan menos memoria para funcionar, por lo tanto, se recorren mucho mas rapido. A diferencia de las listas que son estructuras dinamicas, las tuplas son estaticas, por lo que no podemos cambiar su contenido. 
    Para llamar un elemento dentro de la tupla se hace escribiendo su indice dentro de corchetes: 
        tupla[indice]
    Declaracion de una tupla:
        tupla = (val1, val2, .., valx)

    Los DICCIONARIOS son unas estructuras de datos de LLAVES y VALORES y a diferencia de las listas no vamos a acceder a los elementos a traves de su indice, sino a traves de sus llaves. No es necesario respetar la identacion cuando se trabaja con diccionarios, pero si es una buena practica hacerlo para que el codigo sea mas facil de leer. 
    Para acceder a un alemento del diccionario se hace de la siguiente forma.
        diccionario['llave_x']
    Se puede recorrer un diccionario con un ciclo for usando el metodo diccionario.keys(), este metodo nos devuelve las llaves del diccionario.En cambio, el metodo diccionario.values() nos devuelve los valores del diccionario.
    por ejemplo:
        for llave in diccionario.keys():
            print(llave)
        for valor in diccionario.values():
            print(valor)
        for llave, valor in diccionario.items():
            print(llave)
            print(valor)

        
    Declaracion de un diccionario:
        diccionario = {'llave1' : val_1, 'llave2' : val_2, 'llave_x': val_x}

    Para importar un MODULO se utiliza la palabra reservada: import nombre_del_modulo

"""

print('Hola a todo el mundo')
numero1  = input("Ingrese un numero: ")
print('La variable numero tiene el valor de ' + str(numero1))
numeroDos = 6
print ('La siguiente variable tiene el valor de: ' + str(numeroDos))

