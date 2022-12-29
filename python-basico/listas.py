def main():
    numeros = [1, 3, 6, 8, 45, 90] # Creando una lista con diferentes valores.
    print(numeros)

    objetos = ['Hola', True, 50, 8.75]
    print(objetos[1]) # Imprimiendo el elemento en la segunda posicion de la lista.

    objetos.append('Maria') # Agregando un elemento a la lista. Permite agregar un solo elemento.
    print(objetos)
    print(objetos[::-1]) # Imprimiendo los elementos de la lista en sentido inverso.

    print(int(len(objetos))) # Imprimiendo la longitud de la lista.

    objetos.pop(3) # Eliminando el elemento de la lista almacenado en la posicion 3 .
    print(objetos)

    numeros2 = [100, 200, 300]
    print(numeros2)

    lista_final = numeros + numeros2 # Se pueden concatenar dos o mas listas con el simbolo mas (+)
    print(lista_final)

    print(numeros * 5) # Tambien se pueden repetir las listas un numero determinado de veces.


if __name__ == '__main__':
    main()

