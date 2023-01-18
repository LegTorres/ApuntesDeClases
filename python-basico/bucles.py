def run():
    LIMITE = 1000

    contador = 0
    potencia_2 = 2 ** contador

    ##### CICLO WHILE #####
    while potencia_2 < LIMITE:    # Imrpimir las potencias de 2 entre 1 y 1000.

        print('2 elevado a ' + str(contador) + ' es igual a: ' + str(2 ** contador))
        contador = contador + 1
        potencia_2 = 2 ** contador


    ##### CICLO FOR#####
    contador = 0
    for contador in range(1, 101): # Imprime los numeros desde el 1 al 100.
        print(contador)

    for i in range(10): # Imprimiendo la tabla del 11
        print(11 * i)

    nombre = input('Ingresa tu nombre: ')   # Recorrer una cadena de caracteres usan.
    for letra in nombre:
        print(letra)

    frase = input('Escribe una frase: ')    #Recorrer una cadena cambiandola a mayusculas.
    for caracter in frase:
        print(caracter.upper())

    ##### USANDO BREAK Y CONTINUE PARA ROMPER CICLOS #####
    for contador2 in range(1000):
        if contador2 % 2 != 0:  # Imprimir los numeros pares.
            continue
        print(contador2)

    for i2 in range(0, 10000):
        print(i2)
        if i2 == 5678:    #Interrumpiendo el ciclo cuando llegue a la cantidad 5678
            break

    texto = input('Escribe un texto: ')
    for letra2 in texto:
        if letra2 == 'o': # Interrumpiendo el ciclo cuando llegue a la letra o.
            break
        print(letra2)



if __name__ == '__main__':
    run()