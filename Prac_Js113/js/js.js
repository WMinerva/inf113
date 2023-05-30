function _primo(){
    let num = parseInt(prompt("Ingrese numero:",73));
    let sw = 1;
    let div = 2;
    while(sw == 1 && div < parseInt(num/2)+1){
        if(num % div == 0){
            sw = 0;
        }else{
            div++;
        }
    }
    if(sw == 0){
        document.write(num," no es primo");
    }else{
        document.write(num," es primo");
    }
}
function meses(){
    let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    for(let i in meses){
        console.log(meses[i]);
    }
}
function gen_primos(){
    let num = parseInt(prompt("Cuantos primos a Imprimir:",13));
    let primo = 1;
    for(var i = 0; i < num; i++ ){
        let sw = 1;
        let div = 2;
        while(sw == 1 && div < parseInt(primo/2)+1){
            if(primo % div == 0){
                sw = 0;
            }else{
                div++;
            }
        }
        if(sw == 1){
            document.write(primo," ");
        }
        primo++;   
    }
}
function fibo(){
    let num = parseInt(prompt("Cuantos Fibonacci a Imprimir:",13));
    let a = -1;
    let b = 1;
    let f = 0;
    for(var i = 0; i < num; i++ ){
        f = a + b;
        document.write(f," ");
        a = b;
        b = f;
    }
}