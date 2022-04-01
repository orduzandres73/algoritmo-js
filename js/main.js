function suma(){
var a;
var b;
var R;


a = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
b =parseInt (prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));

R=a+b;

alert("El resultado de la suma es "+R);
}
function resta(){
    var a;
    var b;
    var r;

    a=parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
    b=parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"))

    r=a-b;
    alert("El resultado de la resta es "+r);   
}
function multiplicacion(){
    var a;
    var b;
    var r;

    a=parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
    b=parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));

    r=a*b;
    alert("El resultado de la multiplicacion es "+r)   
}
function division(){
    var a;
    var b;
    var r;

    a=parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
    b=parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));

    r=a/b;
    alert("El resultado de la division es "+r)   
}
function numMayor(){
    var a;
    var b;

    a=parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
    b=parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));
    if(a>b){
        alert(a+" Es mayor");
    }
    else if(b>a){
        alert(b+" Es mayor");
    }
    else{
        alert("No hay numero mayor, los dos son iguales")
    }
}
function numMenor(){
    var a;
    var b;
    var c;

    a=parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
    b=parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));
    c=parseInt(prompt("POR FAVOR INGRESE EL TERCER VALOR"));
    if(a==b && b==c){
        alert("No hay numero menor, los tres son iguales");
    }
    else if (a<=b && a<=c){
        alert(a+" Es el numero menor")
    }
    else if(b<=a && b<=c){
        alert(b+" Es el numero menor ")
    }
    else {
        alert(c+" Es el menor")
    }
}
function determinarNum(){
    var num;

    num=parseInt(prompt("POR FAVOR INGRESE EL NUMERO"));
    if(num % 2 == 0){
        alert("El numero "+num+" es par")
    }
    else{
        alert("El numero "+num+" es impar")
    }
}
function cuadrado(){
    var num;
    var r;
    num=parseInt(prompt("POR FAVOR INGRESE EL NUMERO"));
    r=num*num;
    alert("El cuadrado de "+num+" es "+r)
}
function area(){
    var ar;
    var ba;
    var al;
    ba=parseInt(prompt("POR FAVOR INGRESE LA BASE DEL TRIANGULO"));
    al=parseInt(prompt("POR FAVOR INGRESE LA ALTURA DEL TRIANGULO"));
    ar=(ba*al)/2;
    alert("El area del triangulo es "+ar)
}
function conversion(){
    var cm;
    var m;
    m=parseInt(prompt("POR FAVOR INGRESE LA CANTIDAD A CONVERTIR EN CENTIMETROS"));
    cm=(m*100);
    alert("La cantidad en centimetros es "+cm);
}
function año(){
    var e;
    var año=2022;
    e=parseInt(prompt("POR FAVOR INGRESE SU EDAD"));
    a=(año-e);
    alert("Su año de nacimiento es "+a);
}
function capital(){
    var cap;
    var años;
    var gan;


    cap=parseInt(prompt("POR FAVOR INGRESE EL CAPITAL"));
    años=parseInt(prompt("POR FAVOR INGRESE EL NUMERO DE AÑOS"));
    gan=(cap*.02)*años;
    alert("LA GANANCIA ES DE "+gan)
}
function notas(){
    var a;
    var b;
    var c;
    var d;
    var e;
    var nf;
    a=parseInt(prompt("POR FAVOR INGRESE LA PRIMERA NOTA"));
    b=parseInt(prompt("POR FAVOR INGRESE LA SEGUNDA NOTA"));
    c=parseInt(prompt("POR FAVOR INGRESE LA TERCERA NOTA"));
    d=parseInt(prompt("POR FAVOR INGRESE LA CUARTA NOTA"));
    e=parseInt(prompt("POR FAVOR INGRESE LA QUINTA NOTA"));
    nf=(a+b+c+d+e)/5
    if(nf>=10 && nf<=29){
        alert("REPROBÓ, el promedio de sus nota es: "+nf);
    }
    else if (nf>=30 && nf<=50)
        alert("APROBÓ, el promedio de sus notas es: "+nf)
}
function fruteria(){
    var kg;
    var d;
    var t;
    var tf


    kg=parseInt(prompt("POR FAVOR INGRESE LA CANTIDAD DE KILOS QUE DESEA COMPRAR"));
    if(kg<=2){
        kg=kg*4500;
        alert("El valor a pagar es "+kg);
    }
    else if(kg<=5){
        t=kg*4500;      
        d=(kg*4500)*0.10
        tf= d-t;
        alert("El valor a pagar es "+tf);
    }
    else if(kg<=10){
        t=kg*4500;
        d=(kg*4500)*0.15
        tf= d-t;
        alert("El valor a pagar es "+tf);   
    }
    else if(kg>=11){
        t=kg*4500;
        d=(kg*4500)*0.20
        tf= d-t;
        alert("El valor a pagar es "+tf);   
}
}