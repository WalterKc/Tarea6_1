function test_for(max){
    
    for (x=0;x<max;x+=1){
        
        console.log(x)
    }
};


/*    
let test=document.createElement("h1");
test.innerHTML="EJERCIO 6";
document.querySelector("header").appendChild(test);
*/

function test_for2(max){
    
    for (x=0;x<max;x+=1){
        let test0=document.createElement("li");
        let test0A=document.createAttribute("class")
        test0A.value="familiar"
        test0.setAttributeNode(test0A)
        let test=document.createElement("label");
        test.innerHTML="Familiar";
        let testA2=document.createAttribute("id")
        testA2.value="familiar"
        test.setAttributeNode(testA2)
        let testA3=document.createAttribute("placeholder")
        testA3.value="ingresar edad de familiar"
        test.setAttributeNode(testA3)

        document.querySelector("#array_familia").appendChild(test0);
        //document.querySelector("#familiar").appendChild(test);
        
    }
    ocultador_boton(true)


   
};
function array_trabajo(){
    let test_array = document.querySelector('#array_familia').getElementsByClassName('familiar')
    return test_array
}

function test_for3(array,valor){


    for (x=valor;x<array.length;x+=1){
    let test=document.createElement("label");
    test.innerHTML="Familiar"+(x+1);
    let testA2=document.createAttribute("id")
    testA2.value="familiar"
    test.setAttributeNode(testA2)
    let test2=document.createElement("input")
    let test2A2=document.createAttribute("id")
    let test2B2=document.createAttribute("type")
    test2A2.value="familiar_edad"
    test2B2.value="number"
    let testA3=document.createAttribute("placeholder")
    testA3.value="ingresar edad de familiar"
    test2.setAttributeNode(testA3)
    test2.setAttributeNode(test2A2)
    test2.setAttributeNode(test2B2)
    //document.querySelector(".familiar").appendChild(test);
    array[x].appendChild(test)
    array[x].appendChild(test2)
    //console.log(x)
    //AL FIN MIERDA, bueno, vamos a explicar esto
    }
}
let contador=0
function crear_mas_familiares(cantidad){
    contador=array_trabajo().length
    console.log(array_trabajo().length)
    
    for (x=0;x<cantidad;x+=1){
        let test0=document.createElement("li");
        let test0A=document.createAttribute("class")
        test0A.value="familiar"
        test0.setAttributeNode(test0A)
        let test1=document.querySelector(".familiar")
        let padre=test1.parentNode
        padre.insertBefore(test0,test1[-1])
        

    }
    
    test_for3(array_trabajo(),contador)
    console.log(array_trabajo().length)
    //PIOLA, listo esto, para borrarlo, hay que modificar el quitador
    //aca lo que hacemos es comparar el tamaño del array en 2 estados diferente, antes de sumarle lo que queremos
    //y despues de sumarle 


}

function ocultador_boton(valor){
    let boton=document.querySelector("#boton_agregar_inicial")
    let boton2=document.querySelector("#boton_agregar_secundario")
    let boton3=document.querySelector("#boton_quitar_familiar")
    let hidden=document.createAttribute("hidden")
    let h2=document.querySelector("#texto_h2")

    if (valor===true){
        
        
        boton.setAttributeNode(hidden)
        boton2.removeAttribute("hidden")
        boton3.removeAttribute("hidden")
        h2.innerHTML="ahora, te pedimos que rellenes la edad de tus familiares ,son necesarios al menos 2 para poder continuar, te dejamos 2 botones mas por si te equivocaste en el numero de familiares "


    }else
    {
        boton.removeAttribute("hidden")
        boton2.setAttributeNode(hidden)
        hidden=document.createAttribute("hidden")
        boton3.setAttributeNode(hidden)
    }
    }



let array_test=[0,1,2,5,4,6,8,7,9,15,56,71,21,5,4,2,34,21,56,84,12,31,5,1,51,3548,1,21,2]



//function valores_insuficientes(array){
//    if (array.length<=2){
//        alert("NO SE PUEDE")
//    }
    /*
    else{
        maximo_array(array2);
        minimo_array(array2);
        promedio(array2);
    }*/

//}

function maximo_array(array) {
    if (array.length<=2){
        alert("NO SE PUEDE")
        return "X"
    }else{
        //console.log(Math.max.apply(null, array))
        return Math.max.apply(null, array);
    }
    
}
  
function minimo_array(array) {
    if (array.length<=2){
        return " X "
    }else{
        //console.log(Math.min.apply(null, array))
        return Math.min.apply(null, array);
    }
}
function promedio(array){
    if (array.length<=2){
        return " X "
    }else{
        let contador=0
        for (x of array){
            contador+=x
        }
        //console.log(contador/array.length)
        return (contador/array.length)
    }

}

function capturar_numero(){
    let numero_personas=document.querySelector("#edad")
    let edad_numero=Number(numero_personas.value)
    return edad_numero
}
function array_valores_familiares(array){
    let array_valores=[]
    for (x of array){
        //console.log(Number(x.childNodes[1].value))
        array_valores.push(Number(x.childNodes[1].value))
    }
    return array_valores

}
function remover_familiares(array){
for (x=array.length
;x>0;x-=1){array_trabajo()[x-1].remove()}
}
function remover_familiar(array){
    array_trabajo()[array_trabajo().length-1].remove()
}
let H2_cambiante_1=document.querySelector("#texto_h2")
let H2_cambiante_2=document.querySelector("#texto_h2B")

/*
function reset(){
    H2_cambiante_1.innerHTML="hola, este es el ejercicio 6 parte 1, primero vamos a preguntar, ¿cuantas personas hay en la familia?"
    let hidden=document.createAttribute("hidden")
    H2_cambiante_2.setAttributeNode(hidden)
    ocultador_boton(false)
    remover_familiares(array_trabajo())


}
*/



function calcular_salario_diario(salario,dias_semanales){
return salario/(dias_semanales*52.14285714)

}
function calcular_salario_hora(salario,dias_semanales,horas_diarias){
    return (salario/(dias_semanales*52.14285714))/horas_diarias
}

function test_for3A(array,valor){


    for (x=valor;x<array.length;x+=1){
    let test=document.createElement("label");
    test.innerHTML="Familiar"+(x+1);
    let testA2=document.createAttribute("id")
    testA2.value="familiar"
    test.setAttributeNode(testA2)
    let test2=document.createElement("input")
    let test2A2=document.createAttribute("id")
    let test2B2=document.createAttribute("type")
    test2A2.value="familiar_salario"
    test2B2.value="number"
    let testA3=document.createAttribute("placeholder")
    testA3.value="ingresar salario "
    test2.setAttributeNode(testA3)
    test2.setAttributeNode(test2A2)
    test2.setAttributeNode(test2B2)
    //document.querySelector(".familiar").appendChild(test);
    array[x].appendChild(test)
    array[x].appendChild(test2)
    //console.log(x)
    //AL FIN MIERDA, bueno, vamos a explicar esto
    }
}



/*
let test2=document.querySelectorAll("h1");
for (x=0;x<6;x+=1){test2[x.remove()]}

testA=document.createElement("label")
testA2=document.createAttribute("for")
testA2.value="sueldo"
testA.setAttributeNode(testA2)
*/

/* bueno, la tarea 6 1, es facil, aca vamos a decir que tenemos que hacer
primero, tengo que crear un input de numero, a ese valor, lo tengo que capturar, y usarlo para crear
una serie de tags que se muestren en pantalla, cada uno tiene que tener un numero ascendente diferente
siguiendo el valor que se dio, y cada uno ,tambien tiene un input, a esto lo tenemos que hacer con un boton
y cada vez que lo toquemos, se tiene que borrar los viejos, y poner los nuevos, para que no se acumulen

LISTO, ya tenemos todos , vamos a hacerlo, aca como se me pinte y luego lo pasamos al horroso camelcase
Al hacer click en "calcular",
bueno, primero hagamos que muestre los labes necesarios 

mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
hay que hacer esto de arriba, para esto, hay que usar los valores de array de familia, por lo que
hay que pedirles al user que los llene
*/

/*bueno, ahora que sabemos como convertir unos li en array, solo es cuestion de interar en ellos
y ponerle adentro lo que se quiera
ej
let lis = document.querySelector('.contenido').getElementsByTagName('li')
esto de arriba ,convierte , o mejor dicho , te deja seleccionar los elementos , como un array
let lis3 = document.querySelector('#test2').getElementsByClassName('test3')

bueno, ahora lo que tengo que hacer, es interar andentro de esto, y ponerle los labels/input que falten
bueno, ya tenes lo mas difil, ahora tenemos que hacer una funcion que calcule los promedios, maximo y minimo(listo los 3)
y poner el boton limitador, vamos a acerlo en funcines simples, para no complicarnos

bueno, ahora vamos a ponerle numeros a los familiares, algo asi como, familiar 1 , familiar 2,y asi
luego, vamos a crear un un limite que impida que calculemos(con un alert) el max min y el promedio
si no tenemos todos los valores bien
tambien tenemos que hacer que, cada vez que toquemos el botos crear lista de familiares, borre los anteriores
falta el botor de borrado, asumo que tengo que hacer lo contrario
vamos a evitar complejizar las cosas, vamos a poner el boton agregar y quitar, poner mas familiares, que solo agrege mas
y que solo aparesca cuando ya existen familiares

LISTO TODO, ahora hay que poner los botones que hagan falta, en el momento adecuado, y el texto
primero, vamos a preguntar  cuanta gente hay en el grupo familiar, y vamos a crear su lista LISTO
una vez creada, vamos a cambiar el texto a  "ahora, te pedimos que rellenes la edad de tus familiares
son necesarios al menos 2 para poder continuar, te dejamos 2 botones mas por si te equivocaste
en el numero de familiares, " y ocultamos el boton agrear, y habilitamos los otros 2 botones LISTO
ahora, vamos a linkear el value que nos da el input, y vamos ponerlo en agremas mas familiares,
y tambien vamos a habilitar los 2 botones LISTO
ahora vamos a agregar un par de cosas
un alert que idique que el no podes continuar con el calculo por faltar valores
un h2 que no diga algo asi" la edad maxima de esta familia es X, la minima es X, y la promedio es X"
y vamos a limpiar los test
LISTO, ahora falta el boton de reset
LISTO TODO, ahora vamos a pasarlo a github, vamos a borrarle los comentarios, vamos a ponerle camelcase
y vamos a borrarle los test


 */
 