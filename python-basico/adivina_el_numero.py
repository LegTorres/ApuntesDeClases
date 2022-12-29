import random # Importando el modulo random para poder crear numeros aleatorios.

def main():
    numero_aleatorio = random.randint(1, 100) # Generando un numero entero aleatorio entre 1 y 100.
    numero_elegido = int(input('Elige un numero entre 1 y 100: '))
    while numero_elegido != numero_aleatorio:
        if numero_elegido < numero_aleatorio:
            print('Busca un numero mas grande')
        else:
            print('Busca un numero menor')
        numero_elegido = int(input('Elige otro numero: '))

    print('El numero a adivinar era: '+ str(numero_aleatorio) + '. Ganaste!')

if __name__ == '__main__':
    main()