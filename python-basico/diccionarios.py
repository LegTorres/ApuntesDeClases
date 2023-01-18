def main():
    # Declarando un diccionario con sus valores.
    mi_diccionario =  {
        'llave1' : 1, 'llave2' : 2, 'llave3': 3
    }
    print(mi_diccionario)
    print(mi_diccionario['llave2']) # Accediendo al elemento del diccionario con la llave 'llave2'

    poblacion_paises = {
        'Argentina' : 44938712,
        'Brazil' : 210147125,
        'Colombia' : 50372424    
    }
    print(poblacion_paises['Brazil'])

    # Recorriendo el diccionario para que nos devuelva el valor de las llaves.
    for pais in poblacion_paises.keys():
        print(pais)
    # Recorriendo el diccionario para que nos devuelva los valores.
    for pais in poblacion_paises.values():
        print(pais)
    # Para imprimir tanto las llaves como los valores lo podemos hacer usando 2 variables 
    # dentro del ciclo for de la siguiente forma:
    for paises, poblacion in poblacion_paises.items():
        print(paises + ' tiene: ' + str(poblacion) + ' habitantes')

    


if __name__ == '__main__':
    main()