#include <iostream>

using namespace std;

int main() {
    // Declarando variable
    int edad = 0;
    // Asignando un nuevo valor a la variable
    edad = 18;
    // Para declarar una constante se coloca la palabra const en su declaracion.
    const char letra = 'A';
    // Imprimiendo un mendaje en pantalla.
    // Se puede agregar un salto de linea con la convinacion (barra invertida N)
    cout << "Hola mundo\n";
    cout << edad << endl;
    cout << letra << endl;

    // Declarando una lista.
    int lista_edades[] = {18, 24, 16};
    lista_edades[1] = 26;
    cout << lista_edades[1] << endl;
}