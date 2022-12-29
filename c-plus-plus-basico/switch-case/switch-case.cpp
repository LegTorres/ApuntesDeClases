#include <iostream>

using namespace std;

int main(){
    // Uso de la sentencia Switch-Case.

    int opcion = 0;
    cout << "Ingresa una opcion del menu: \n";
    cin >> opcion;

    switch (opcion) {
        case 1:
            cout << 'Opcion 1';
            break;
        case 2:
            cout << "Opcion 2";
            break;
        default:
            cout << "Opcion incorrecta" << endl;
    }
}