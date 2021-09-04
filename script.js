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

//EJERCICIO 4

function banco (saldo_inicial){

    let monto = (0.015*saldo_inicial);
    return `Su saldo final es: ${saldo_inicial+monto}`;

}
console.log(banco(50000));

//EJERCICIO 5

function descuento_empresa(sueldo_base){

    let l_politica = sueldo_base*0.01;
    let s_social = sueldo_base*0.04;
    let s_forzoso = sueldo_base*0.005;
    let c_ahorro = sueldo_base*0.05;

    monto_final = sueldo_base - l_politica - s_social - s_forzoso - c_ahorro;

    return `Monto descontado de ley de politica publica: ${l_politica}
    \nMonto descontado seguridad social: ${s_social}
    \nMonto descontado seguro forzoso: ${s_forzoso}
    \nMonto descontado caja de ahorro: ${c_ahorro}
    \nMonto final pagado a trabajador: ${monto_final} `;
}

console.log(descuento_empresa(500000));



// EJERCICIO 6

function aviso_periodico(num_palabras,tm_cm,num_col){

    let palabras = num_palabras*20000;
    let centimetros = tm_cm*15000;
    let colores = num_col*25000;

    let precio_final = palabras + centimetros + colores;

    return `El precio final del aviso clasificado es: ${precio_final}`;

}

console.log(aviso_periodico((300),(50),(15)));

//EJERCICIO 7

function bono_antiguedad(años){

    let bono_final =  (120000 * años) - 20000

    return `El monto del bono de antiguedad es: ${bono_final}`;

}

console.log(bono_antiguedad(5));

// EJERCICIO 8

function caja_ahorro (horas){

    let monto_descuento = (horas*20000)*0.05;
    let monto_final = (horas*20000)-monto_descuento;

    return `Monto de descuento: ${monto_descuento}
    \nMonto total para el profesor: ${monto_final} `;

}

console.log(caja_ahorro(2));

// EJERCICIO 9

function recargo_tarjetas (m_inicial,m_final){

    let costo_llamada = (m_final-m_inicial) / 0.2;

    return `El costo de llamada es: ${costo_llamada}`;

}

console.log(recargo_tarjetas((20),(30)));

// EJERCICIO 10

function fototienda(num_fotos){

    let cantidad = num_fotos*1500;
    let precio_fotos = cantidad*0.16;
    let precio_final_fotos = cantidad + precio_fotos;

    return `Monto a pagar por el rollo de foto: ${precio_final_fotos}`;

}

console.log(fototienda(10));

// EJERCICIO 11

function hospital(pre_anual){

    let pre_gineco = pre_anual*0.40;
    let pre_traum = pre_anual*0.30;
    let pre_pediat = pre_anual*0.30;

    return `Cantidad de dinero para ginecologia: ${pre_gineco}
    \nCantidad de dinero para traumatologia: ${pre_traum}
    \nCantidad de dinero para pediatria: ${pre_pediat} `;

}

console.log(hospital(600000));


//EJERCICIO 12

function video_tienda(peliculas_alquiladas,dias_alquiler){

    let monto_alquiler = peliculas_alquiladas*dias_alquiler*1500

    return `Monto final por el alquiler es: ${monto_alquiler}`;

}

console.log(video_tienda((3),(4)));

// EJERCICIO 13

function agencia_viajes(numero_personas){

    let monto_personas = numero_personas*25000;
    let monto_tour = monto_personas*0.12;
    let monto_total_tour = monto_personas + monto_tour;

    return `El monto final con IVA incluido es: ${monto_total_tour}`;

}

console.log(agencia_viajes(3));

// EJERCICIO 14

function hotel (dias_reserva){

    let valor_habitacion = (200000 * dias_reserva) - 100000

    return `El valor total de la habitacion es: ${valor_habitacion}`;

}

console.log(hotel(3));

// EJERCICIO 15

function banco_pueblo(monto_prestamo) {

    let valor_prestamo = monto_prestamo*0.24;
    let valor_final_prestamo = monto_prestamo + valor_prestamo;
    let cuotas_especiales = (valor_final_prestamo / 2) /4;
    let cuotas_ordinarias = (valor_final_prestamo / 2) /20;

    return `Monto total a pagar por el prestamo es: ${valor_final_prestamo}
    \nMonto de las cuotas especiales es: ${cuotas_especiales}
    \nMonto de las cuotas ordinarias es: ${cuotas_ordinarias} `;


}

console.log(banco_pueblo(200000));

//--------------------------------------------------------------------

// PARTE 1 TALLER
// EJERCICIO 1

function ejercicio_1(){

    //PASO 1
 let p_1 = (5+2-5)**2;
    //PASO 2
 let p_2 = 5+(8/2)-30;
    //PASO 3
 let p_3 = (2*5)-3;
    //RESULTADO
 let y = (p_1*p_2) / p_3;

 return `Valor de Y ejercicio 1: ${y}`;
}

console.log(ejercicio_1());

// EJERCICIO 2

function ejercicio_2(){

let z=5;
let n=3;
let m=z-n;

//PASO 1
let p_1 = (z+2-n)**2;
//PASO 2
let p_2 = m+(8/2)-30;
//PASO 3
let p_3 = (2*5)-3;
//PASO 4
let p_4 = (p_1*p_2);
//PASO 5
let p_5 = (p_4 / p_3)**5;
//PASO 6
let p_6 = (15*3)-(9/3);
//PASO FINAL
let p_final = p_5 + p_6;

return `Valor de Y ejercicio 2: ${p_final}`;

}

console.log(ejercicio_2());