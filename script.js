//PARTE 2 TALLER
//EJERCICIO 1

function calcular_masa (presion,volumen,temperatura){

    let masa = (presion * volumen) / (0.37 * (temperatura + 460)); 
    
    return `Masa es igual a: ${masa}`;

}

console.log(calcular_masa((4),(4),(10)));

//EJERCICIO 2

function numero_pulsasiones (edad){

    let pulsasiones = (200 - edad) / 10;
    return `El numero de pulsasiones es: ${pulsasiones}`;


}

console.log(numero_pulsasiones(20));

//EJERCICIO 3

function inversion_empresa (persona1,persona2,persona3){

    let total = (persona1 + persona2 + persona3);

    return `Porcentaje persona 1: ${(persona1/total)*100}
    \nPorcentaje persona 2: ${(persona2/total)*100}
    \nPorcentaje persona 3: ${(persona3/total)*100} `;
}

console.log(inversion_empresa((30),(20),(30)));





