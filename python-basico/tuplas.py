def run():
    # Las tuplas, despues de creadas no pueden modificar su contenido
    # pero se recorren mas eficientemente que las listas.
    mi_tupla = (1, 2, 3, 4, 5)
    print(mi_tupla)

    print(mi_tupla[2]) # Imprimiendo el elemento en la posicion 2 dentro de la tupla

    print('Recorriendo los elementos de la tupla en un ciclo for.')
    for i in mi_tupla:
        print(i)


if __name__ == '__main__':
    run()