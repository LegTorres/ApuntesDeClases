def imprimir_mensaje():
    print('Mensaje especial: ')
    print('Estoy empezando a usar funciones!')

imprimir_mensaje()

def conversacion(mensaje):
    print("Hola")
    print("Como estas?")
    print("Elegiste la opcion " + mensaje)
    print("Adios!")

opcion =  input('Elige una opcion (1, 2, 3): ')
if opcion == '1':
    conversacion(opcion)
elif opcion == '2':
    conversacion(opcion)
elif opcion == '3':
    conversacion(opcion)
else:
    print('Elige una opcion correcta.3')

def suma(a, b):
    print('Se estan sumando dos numeros')
    resultado = a + b
    return resultado
print (str(suma(15,5)))