import random

def generar_contrasena():
    MAYUS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z']
    MINUS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z']
    NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    CHARS = ['*', '+', '-', '/', '@', '_', '?', '!', '[', '{', '(', ')', '}', ']', ',', ';', '.', '>', '<', '~', '°', '^', '&', '$', '#', '"']

    caracteres = MAYUS + MINUS + CHARS + NUMS # Creamos una lista con todos los caracteres de las otras listas
    contrasena = []

    for i in range(15):
        # La funcion random.choice(lista) selecciona un caracter aleatorio de una lista
        caracter_random = random.choice(caracteres) 
        contrasena.append(caracter_random)
        
    # Con esta linea decodigo podemos generar una cadena a partir de una lista.
    contrasena = ''.join(contrasena)
    return contrasena

def run():
    contrasena = generar_contrasena() 
    print('Tu nueva contrasena es: ' + contrasena )


if __name__ == '__main__':
    run()