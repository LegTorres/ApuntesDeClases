menu = """
Bienvenido al conversor de monedas 💵
1 - Pesos colombianos
2 - Pesos argentinos
3 - pesos mexicanos

Elige una opcion: """
opcion =  input(menu)

if opcion == '1':
    pesos = input("Ingrese la cantidad en Pesos Colombianos: ")
    pesos = float(pesos)
    valor_dolar = 3875 
    dolares = pesos / valor_dolar
    dolares = round(dolares, 2)
    dolares = str(dolares)
    print('Tienes $' + dolares + ' dolares')
elif opcion == '2':
    pesos = input("Ingrese la cantidad en Pesos Argentinos: ")
    pesos = float(pesos)
    valor_dolar = 65 
    dolares = pesos / valor_dolar
    dolares = round(dolares, 2)
    dolares = str(dolares)
    print('Tienes $' + dolares + ' dolares')
elif opcion == '3':
    pesos = input("Ingrese la cantidad en Pesos Mexicanos: ")
    pesos = float(pesos)
    valor_dolar = 24 
    dolares = pesos / valor_dolar
    dolares = round(dolares, 2)
    dolares = str(dolares)
    print('Tienes $' + dolares + ' dolares')
else:
    print('ingresa una opcion correcta por favor')




""" 
 """

