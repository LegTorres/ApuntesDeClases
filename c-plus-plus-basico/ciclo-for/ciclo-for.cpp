#include <iostream>

using namespace std;

int main(){

    int limite = 10;
    
    for(int i = 0; i < limite; i++){
        cout << i << endl;
    }

    int lista[] = {100, 200, 300, 400, 500, 600, 700, 800, 900,1000};

    for (int i2 = 0; i2 < sizeof(lista) / sizeof(lista[0]); i2 += 1){
        cout << lista[i2] << endl;
        // Podemos romper un ciclo utilizando la palabra break.
        if (lista[i2] == 700){
            break;
        }
    }

}