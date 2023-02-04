/* let nombres = []
//ciclo para alimentar un arreglo
for (let index = 0; index < 5; index++) {
    nombres[index] = prompt("Ingrese un nombre");
}
//Ciclo para recorrer
for (let index = 0; index < 5; index++) {
    console.log(nombres[index])
} */

// Arreglos casi siempre van acompañados de un ciclo



/* Metodos Arreglos JavaScript */

/* let numeros = [1,2,3,4]
for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index])
    
}
numeros.push(5)
for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index])
} */

/* for (let index = 0; index < 10; index++) {
    numeros.push() = prompt("ingrese un numero: ")
} 
pide un numero y lo ingresa al final del arreglo
el .push() simpre agrega elementos al final
el .pop() elimina el ultimo elemneto
el .shift() elimina la posición 0 y lo desplaza una posición
el .unshift() agrega en la primera posición(posición 0)
consultar callback
*/

let saldocuenta = 0; 
let valor = 0; 
let repetir = true;
let intento = 0;
let nombreUsuario, contraseña;
let menuOpciones = () =>{
    let menu = Number(prompt("Seleccione la operacion que desea realizar \n1 - Consultar saldo \n2 - Retirar dinero \n3- Consignar dinero \n4 - Transferir \n5 - Salir"));
    return menu;
}

while(intento<3){
    nombreUsuario = prompt("Ingrese su nombre de usuario");
    if(nombreUsuario == "Carlos"){
        contraseña = prompt("Ingrese su contraseña");
        if(contraseña == "123"){
            alert("BIENVENIDO " + "Carlos");
            while(repetir){
                switch(menuOpciones()){
                    case 1:
                        alert("Su saldo es: " + saldocuenta);
                    break;
            
                    case 2:
                        valor = parseInt(prompt("Ingrese valor a retirar:"));
                        if(valor > saldocuenta){
                            alert("No tiene saldo suficiente");
                        }
                        else{
                            saldocuenta -= valor;
                            alert("Proceso terminado");
                        }
                    break;
                    
                    case 3:
                        valor = parseInt(prompt("Ingrese valor que desea consignar:"));
                        saldocuenta += valor;
                        alert("Dinero consignado");
                    break;
            
                    case 4: 
                        valor = parseInt(prompt("Ingrese valor a transferir:"));
                        if(valor > saldocuenta){
                            alert("No tiene saldo suficiente");
                        }
                        else{
                            saldocuenta -= valor;
                            alert("Proceso terminado");
                        }
                    break;
            
                    case 5: 
                        repetir = false;
                        alert("Hasta pronto");
                        intento+=3;
                    break;
                }
            }
        }
        else{
            alert("CONTRASEÑA INCORRECTA");
            intento++;
        }
    }
    else{
        alert("USUARIO INCORRECTO");
        intento++;
    }
}
