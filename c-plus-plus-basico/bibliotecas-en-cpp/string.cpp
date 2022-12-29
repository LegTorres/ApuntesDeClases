#include <iostream>
#include <string>

using namespace std;
/**
 * ALGUNAS LIBRERIAS EN C++
 * 
 * IOSTREAM     -   Entrada y salida de datos.
 * STRING       -   Manejo de cadenas de texto.
 * CMATH        -   Funciones matematicas comunes.
 * EXCEPTION    -   Utilidad para manejo de errores.
 * ARRAY        -   Manejo de arreglos de tatos.
 * VECTOR       -   Manejo de vectores de datos.
*/

int main() {

    // USAR COMILLAS DOBLES O DARA ERROR.

    string texto = "Hola Mundo";
    cout << texto << endl;

    cout << "Imprimiendo la longitud de la cadena de texto: " << texto.size() << endl;

    string texto_a_numero = "10";

    /** Funciones para convertir cadenas de texto a numeros
     *
     * stoi -   String a entero.
     * stof -   String to float
     *  
     */


    cout << "Convirtiendo texto a entero: " << stoi(texto_a_numero) << endl;
}