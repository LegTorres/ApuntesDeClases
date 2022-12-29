#include <iostream>

using namespace std;

// Declarando una funcion que devuelva un dato entero.

int suma(int a, int b = 0){
    cout << "Sumando " << a << " mas " << b << endl;
    return a + b;
}

int main() {

    cout << suma(5, 12) << endl;

}