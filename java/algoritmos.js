function ciclo_for() {
    
alert("a continuacion e imprimirarn los numeros pares entre el 0 y el 10 en un ciclo for")
/*     for (var i = 0;i<10;i++){
        if (i>=1) {break}
    alert(i);
       }


esta imprime 0*/

       for (var i = 0;i<10;i++){
        if (i%2 !== 0 ){continue;}
    alert(i);
       }

/*esta imprime los pares*/ 

   
}



function  ifs() {

    alert("usando la funcion if vamos a mirar que numero es mayor");
    alert("Que numero es mayor");
    var a;
    var b;
    
    a = parseInt(prompt("por favor ingrese el primer numero a comparar"));
    b = parseInt(prompt("por favor ingrese el segundo numero a comprar"));
    
    if (a > b) {
        alert("El numero mayor es " +a);
    }
    else{
        alert("El numero mayor es " +b);
    }
}


function Switch_Case() {

  alert("Opciones a evaluar: perro, gato, loro si elije otra le sale que no tiene mascota")

    var mascota = prompt("por favor ingresa que mascota tienes");
    mascota = mascota
 
    switch (mascota) {
      case "gato":
        alert("Tienes un Gato");
        break;
      case "loro":
        alert("Tienes un Loro");
        break;
      case "perro":
        alert("Tienes un perro");
        break;
      default:
        alert("No tienes ninguna mascota");
        break;
    }


}


