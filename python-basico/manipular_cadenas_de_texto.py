nombre = input('Ingrese su nombre: ')
nombre_mayuscula = nombre.upper()
nombre_minuscula = nombre.lower()
nombre_inicial_mayuscula = nombre.capitalize()
nombre_sin_espacio = nombre.strip()

print('Nombre: ' + nombre)
print('Nombre todo en mayusculas: ' + nombre_mayuscula)
print('Nombre con inicial mayuscula: ' + nombre_inicial_mayuscula)
print('Nombre en minuscula: ' + nombre_minuscula)
print('Nombre sin espacios: ' + nombre_sin_espacio)

print('PALINDROMOS')
palabra = input('Ingrese una palabra para verificar si es palindromo: ')
if palabra == palabra[::-1]:
    print('La palabra ' + palabra + ' es un palindromo')
else:
    print('La palabra '+ palabra +' no es un palindromo.')

