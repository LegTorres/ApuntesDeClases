#include <iostream>

using namespace std;

int main(){
    // Usando los condicionales.
    bool resultado = true && true;
    // No se pueden utilizar giones para los nombres de las variables.
    bool resultado_or = true || false;
    cout << resultado << endl;
    cout << resultado_or << endl;

    // Para negar un valor booleano se usa la estructura !true.

    bool negacion = !true;
    cout << negacion << endl;

    int edad = 0;
    cout << "Edad: ";
    cin >> edad;

    if(edad >= 18){
        if (edad <= 40){
            cout << "Puedes votar\n";
        }
        else {
            cout << "No puedes votar \n";
        }
    }
    else {
        cout << "No puedes Votar"<< endl;
    }

    edad = 0;
    

}