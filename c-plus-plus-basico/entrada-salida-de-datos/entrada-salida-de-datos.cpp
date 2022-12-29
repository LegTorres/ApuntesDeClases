#include <iostream>

using namespace std;

int main(){

    // Operador cout para salida de Datos.
    cout << "Hola Mundo!" << endl;    
    cout << "Introduce tu edad: ";
    // El operador cin, que forma parte de la biblioteca iostream nos permite manejar las entradas de informacion. Las podemos utilizar para guardfarlas en una variable.
    int edad = 0;
    cin >> edad;
    cout << "La edad que ingresaste es: " << edad << endl;
}