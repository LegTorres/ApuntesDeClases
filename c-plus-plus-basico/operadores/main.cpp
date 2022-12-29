#include <iostream>

using namespace std;

int main(){
    int a = 2;
    int b = 3;
    int c = a * b;
    bool d = a < b;
    // El operador  += incrementa el valor de la variable en el numero definido.
    int e = a+= 1;
    // Si se usan comillas simples con cout no da el resultado deseado.
    cout << "El resultado es: " << a + b << endl;
    cout << "Imprimiendo un valor booleano: " << d << endl;

    //La funcion sizeof() nos devuelve el tamano en bytes de la variable.
    cout << "Usando la funcion SizeOf: " << sizeof(a) << endl;
    int edades[] = {24, 40, 7};
    // Una manera de saber cuantos elementos tiene una lista es haciendo la siguiente operacion:
    // dividimos el tamano en bytes de la lista entre el tamano en bytes de un elemento de la lista.
    cout << "Tamano de la lista Edades: " << sizeof(edades) / sizeof(edades[0]) << endl;
}