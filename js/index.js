
// simbolos [ ] {}  =>
const pedido= document.getElementById("pedido")
// CONSTRUCTOR 
function equipo (tipo, modelo, precio){
    this.tipo = tipo;
    this.modelo = modelo;
    this.precio = precio;
}

// OBJETOS 

// CAMARAS

const equipo1 = new equipo("camara", "sony a 7 s 2", 4200);
const equipo2 = new equipo("camara", "Sony a 6500", 3800);
const equipo3 = new equipo("camara", "Canon R5", 5000);
const equipo4 = new equipo("camara", "canon 5D mark 4", 5000);
// console.log(equipo1.precio)

// LENTES

const equipo5 = new equipo("lente", "Canon 50mm", 1500);
const equipo6 = new equipo("lente", "Canon 75-300mm", 2500);
const equipo7 = new equipo("lente", "Sony 12-24mm", 3800);
const equipo8 = new equipo("lente", "Sony 400mm", 10000);

// MICROFONOS 

const equipo9 = new equipo("microfono", "Rode link", 2500);
const equipo10 = new equipo("microfono", "Rode Wirless", 3000);
const equipo11 = new equipo("microfono", "Rode video", 2000);
const equipo12 = new equipo("microfono", "Rode video micro", 1200);

// TRIPODES
const equipo13 = new equipo("trípode", "Manfrotto Befree 3", 2000);
const equipo14 = new equipo("trípode", "Benrro KH25", 2500);
const equipo15 = new equipo("trípode", "Benrro TMA 38", 2000);
const equipo16 = new equipo("trípode", "Manfrotto 504", 3000);

// SIMULADOR
alert ("Binvenido al cotizador de paquetes, a continuación vas a poder cotizar tu combo de equipos de filmación. Por favor elige 4 equipos para cotizar tu combo, recuerda que podrás ingresar solo un modelo de cada rubro")

// CREACIÓN DE ARRAY "LISTA DE COMPRAS"
let listadecompras= [ ]

let cam = prompt("ingrese  el modelo de la cámara que desea alquiar " +"\n" + "1: Sonya 7 s 2"+"\n" + "2: Sony a 6500" +"\n" + "3: Canon r5" +"\n"+ "4: Canon 5D Mark IV "+"\n" )   //ELECCION DE CAMARA
if (cam==1) {
    listadecompras.push(equipo1)
    let camara = document.createElement("div")
    camara.innerHTML = `<h6> Usted ha seleccionado: ${equipo1.tipo}</h6>
                            <h4>  Modelo: ${equipo1.modelo}</h4>
                            <p class="xjornada"> Precio x Jornada: $ ${equipo1.precio} ARS</p>`;
    pedido.appendChild(camara);
    // alert( `usted ha seleccionado ${equipo1.modelo} y tiene un valor de $ ${equipo1.precio} ARS por jornada`)
            
    } else if (cam==2){ 
        listadecompras.push(equipo2)
        let camara = document.createElement("div")
        camara.innerHTML = `<h6> Usted ha seleccionado: ${equipo2.tipo}</h6>
                                <h4>  Modelo: ${equipo2.modelo}</h4>
                                <p class="xjornada"> Precio x Jornada: $ ${equipo2.precio} ARS</p>`;
        pedido.appendChild(camara);

        // alert( `usted ha seleccionado ${equipo2.modelo} y tiene un valor de $ ${equipo2.precio} ARS por jornada`)
    }else if (cam==3){ 
        listadecompras.push(equipo3)
        
        let camara = document.createElement("div")
        camara.innerHTML = `<h6> Usted ha seleccionado: ${equipo3.tipo}</h6>
                                <h4>  Modelo: ${equipo3.modelo}</h4>
                                <p class="xjornada"> Precio x Jornada: $ ${equipo3.precio} ARS</p>`;
        pedido.appendChild(camara);
        
        
        // alert( `usted ha seleccionado ${equipo3.modelo} y tiene un valor de $ ${equipo3.precio} ARS por jornada`)
    } else if (cam==4){ 
        listadecompras.push(equipo4)

        let camara = document.createElement("div")
        camara.innerHTML = `<h6> Usted ha seleccionado: ${equipo4.tipo}</h6>
                                <h4>  Modelo: ${equipo4.modelo}</h4>
                                <p class="xjornada"> Precio x Jornada: $ ${equipo4.precio} ARS </p>`;
        pedido.appendChild(camara);

        // alert( `usted ha seleccionado ${equipo4.modelo} y tiene un valor de $ ${equipo4.precio} ARS por jornada`)
    }else { 
        alert("Por favor verifique los datos ingresados" )
    }

    let lent = prompt("ingrese  el modelo de lel lente que desa alquilar: " +"\n" + "1: Canon 50mm"+"\n" + "2: Canon 75-300mm" +"\n" + "3: Sony 12-24mm" +"\n"+ "4: Sony 400mm "+"\n" ) //ELECCION DE LENTE
    if (lent==1) {
        listadecompras.push(equipo5)
        let lente = document.createElement("div")
        lente.innerHTML = `<h6> Usted ha seleccionado: ${equipo5.tipo}</h6>
                                <h4>  Modelo: ${equipo5.modelo}</h4>
                                <p class="xjornada"> Precio x Jornada: $ ${equipo5.precio} ARS</p>`;
        pedido.appendChild(lente);
        
        
        // alert( `usted ha seleccionado ${equipo5.modelo} y tiene un valor de $ ${equipo5.precio} ARS por jornada`)
                
        } else if (lent==2){ 
            listadecompras.push(equipo6)
            let lente = document.createElement("div" )
            lente.innerHTML = `<h6> Usted ha seleccionado: ${equipo6.tipo}</h6>
                                    <h4>  Modelo: ${equipo6.modelo}</h4>
                                    <p class="xjornada"> Precio x Jornada: $ ${equipo6.precio} ARS </p>`;
            pedido.appendChild(lente);




            // alert( `usted ha seleccionado ${equipo6.modelo} y tiene un valor de $ ${equipo6.precio} ARS por jornada`)
        }else if (lent==3){ 
            listadecompras.push(equipo7)
            
            let lente = document.createElement("div")
            lente.innerHTML = `<h6> Usted ha seleccionado: ${equipo7.tipo}</h6>
                                    <h4>  Modelo: ${equipo7.modelo}</h4>
                                    <p class="xjornada"> Precio x Jornada: $ ${equipo7.precio} ARS</p>`;
            pedido.appendChild(lente);

            // alert( `usted ha seleccionado ${equipo7.modelo} y tiene un valor de $ ${equipo7.precio} ARS por jornada`)
        } else if (lent==4){ 
            listadecompras.push(equipo8)

            let lente = document.createElement("div")
            lente.innerHTML = `<h6> Usted ha seleccionado:  ${equipo8.tipo}</h6>
                                    <h4>  Modelo: ${equipo8.modelo}</h4>
                                    <p class="xjornada"> Precio x Jornada: $ ${equipo8.precio} ARS</p>`;
            pedido.appendChild(lente);
            // alert( `usted ha seleccionado ${equipo8.modelo} y tiene un valor de $ ${equipo8.precio} ARS por jornada`)
        }else { 
            alert("Por favor verifique los datos ingresados" )
        }
        let mic = prompt("ingrese  el modelo de lel Micrófono que desa alquilar: " +"\n" + "1: Rode link"+"\n" + "2: Rode Wirless" +"\n" + "3: Rode video" +"\n"+ "4: Rode video micro "+"\n" ) //ELECCION DE MICROFONO
        if (mic==1) {
            listadecompras.push(equipo9)
            
            let micro = document.createElement("div")
            micro.innerHTML = `<h6> Usted ha seleccionado: ${equipo9.tipo}</h6>
                                    <h4>  Modelo: ${equipo9.modelo}</h4>
                                    <p class="xjornada"> Precio x Jornada: $ ${equipo9.precio} ARS</p>`;
            pedido.appendChild(micro);
            
            
            
            // alert( `usted ha seleccionado ${equipo9.modelo} y tiene un valor de $ ${equipo9.precio} ARS por jornada`)
                    
            } else if (mic==2){ 
                listadecompras.push(equipo10)
                let micro = document.createElement("div")
            micro.innerHTML = `<h6> Usted ha seleccionado: ${equipo10.tipo}</h6>
                                    <h4>  Modelo: ${equipo10.modelo}</h4>
                                    <p class="xjornada"> Precio x Jornada: $ ${equipo10.precio} ARS</p>`;
            pedido.appendChild(micro);
                
                
                
                
                // alert( `usted ha seleccionado ${equipo10.modelo} y tiene un valor de $ ${equipo10.precio} ARS por jornada`)
            }else if (mic==3){ 
                listadecompras.push(equipo11)

                let micro = document.createElement("div")
                micro.innerHTML = `<h6> Usted ha seleccionado: ${equipo11.tipo}</h6>
                                        <h4>  Modelo: ${equipo11.modelo}</h4>
                                        <p class="xjornada"> Precio x Jornada: $ ${equipo11.precio} ARS </p>`;
                pedido.appendChild(micro);



                // alert( `usted ha seleccionado ${equipo11.modelo} y tiene un valor de $ ${equipo11.precio} ARS por jornada`)
            } else if (mic==4){ 
                listadecompras.push(equipo12)

                let micro = document.createElement("div")
                micro.innerHTML = `<h6> Usted ha seleccionado: ${equipo12.tipo}</h6>
                                        <h4>  Modelo: ${equipo12.modelo}</h4>
                                        <p class="xjornada"> Precio x Jornada: $ ${equipo12.precio} ARS </p>`;
                pedido.appendChild(micro);




                // alert( `usted ha seleccionado ${equipo12.modelo} y tiene un valor de $ ${equipo12.precio} ARS por jornada`)
            }else { 
                alert("Por favor verifique los datos ingresados" )
            }    

            let trip = prompt("ingrese  el modelo de lel trípode que desa alquilar: " +"\n" + "1: Manfrotto Befree 3"+"\n" + "2: Benrro KH25" +"\n" + "3: Benrro TMA 38" +"\n"+ "4: Manfrotto 504 "+"\n" ) //ELECCION DE TRIPODE
            if (trip==1) {
                listadecompras.push(equipo13)

                let tripo = document.createElement("div")
                tripo.innerHTML = `<h6> Usted ha seleccionado: ${equipo13.tipo}</h6>
                                        <h4>  Modelo: ${equipo13.modelo}</h4>
                                        <p class="xjornada"> Precio x Jornada: $ ${equipo13.precio} ARS</p>`;
                pedido.appendChild(tripo);


                // alert( `usted ha seleccionado ${equipo13.modelo} y tiene un valor de $ ${equipo13.precio} ARS por jornada`)
                        
                } else if (trip==2){ 
                    listadecompras.push(equipo14)

                    let tripo = document.createElement("div")
                    tripo.innerHTML = `<h6> Usted ha seleccionado: ${equipo14.tipo}</h6>
                                            <h4>  Modelo: ${equipo14.modelo}</h4>
                                            <p class="xjornada"> Precio x Jornada: $ ${equipo14.precio} ARS</p>`;
                    pedido.appendChild(tripo);


                    // alert( `usted ha seleccionado ${equipo14.modelo} y tiene un valor de $ ${equipo14.precio} ARS por jornada`)
                }else if (trip==3){ 
                    listadecompras.push(equipo15)

                    let tripo = document.createElement("div")
                    tripo.innerHTML = `<h6> Usted ha seleccionado: ${equipo15.tipo}</h6>
                                            <h4>  Modelo: ${equipo15.modelo}</h4>
                                            <p class="xjornada"> Precio x Jornada: $ ${equipo15.precio} ARS</p>`;
                    pedido.appendChild(tripo);

                    // alert( `usted ha seleccionado ${equipo15.modelo} y tiene un valor de $ ${equipo15.precio} ARS por jornada`)
                } else if (trip==4){ 
                    listadecompras.push(equipo16)


                    let tripo = document.createElement("div")
                    tripo.innerHTML = `<h6> Usted ha seleccionado: ${equipo16.tipo}</h6>
                                            <h4>  Modelo: ${equipo16.modelo}</h4>
                                            <p class="xjornada"> Precio x Jornada: $ ${equipo16.precio} ARS</p>`;
                    pedido.appendChild(tripo);


                    // alert( `usted ha seleccionado ${equipo16.modelo} y tiene un valor de $ ${equipo16.precio} ARS por jornada`)
                }else { 
                    alert("Por favor verifique los datos ingresados" )
                }    
console.log (listadecompras)

// CALCULO TOTAL DE EQUIPOS POR JORNADA
const totalcompras = listadecompras.reduce ( (acc, item )=> acc + item.precio, 0)     //UTILIZO UN REDUCE PARA RECORRER EL ARRAY COMPLETO, EXTRAER LOS PRECIOS DE CADA OBJETO Y SUMARLOS
console.log(totalcompras)

// CALCULO TOTAL DE EQUIPOS FINAL
let cantidad= prompt ("Ingrese la cantidad de jornadas que utilizara los equipos")
let jornadascantidad = document.createElement("p");
jornadascantidad.innerHTML = `<h2 class= "jornadascantidad">Duración de alquiler: ${cantidad} jornadas</h2>`; 
pedido.append(jornadascantidad);


let montototal= jornadas(totalcompras , cantidad) 

function jornadas(totalcompras, jor) {
         return totalcompras *  parseFloat(jor) 
    }

if(cantidad !=0 && cantidad!= "" ) {


    let alertmonto = document.createElement("p");
    alertmonto.innerHTML = ` <h3 class= "sub"> Sub total: $ ${montototal} ARS</h3>`; 
    pedido.append(alertmonto);

    // alert( `Tu alquiler es de $ ${montototal} ARS`);
    }else{
        alert ("Por favor verifique los datos ingresados"); 
        }

// DESCUENTO PARA ESTUDIANTES
        descuentoestudiante= prompt ("eres estudiante?").toLowerCase () 
    if (descuentoestudiante=="si") {
        let descuento = montototal - (montototal * 0.25)
        // alert( `Por ser estudiante abonas con un 25% off por lo tanto tu costo final es de  $ ${descuento} ARS`);

        let estudiante = document.createElement("p");
        estudiante.innerHTML = `<h4 class="estudiante">Estudiante: Si - 25% off - TOTAL $ ${descuento} </h4>`; 
        pedido.append(estudiante);
        } else if (descuentoestudiante=="no"){ 
            let estudiante = document.createElement("p");
        estudiante.innerHTML = `<h4 class="estudiante">Estudiante: NO -  TOTAL $ ${montototal} </h4>`; 
        document.body.append(estudiante);
            
            // alert(  `Lo sentimos, usted no posee ninguna promoción por lo que debe abonar $  ${montototal} ARS`);
        } else { 
            alert("Por favor verifique los datos ingresados");
        }

        