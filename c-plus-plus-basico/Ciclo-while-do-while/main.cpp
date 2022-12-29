#include <iostream>

using namespace std;

int main(){
    
    char respuesta;

    while (true) {
        cout << "Deseas finalizar el primer programa?";
        cin >> respuesta;
        if(respuesta == 'y' || respuesta == 'Y'){
            cout << "Saliendo del primer programa!!!!" << endl;
            break;
        }
    }


    do {
        cout << "Deseas finalizar el segundo programa?";
        cin >> respuesta;
        if(respuesta == 'y' || respuesta == 'Y'){
            cout << "Saliendo del segundo programa!!!!" << endl;
            break;
        }
    } while (true);

}