//Funtions: A little part of code that run a plainer task.

//We can find two types of them:
//* Declaratives 
// It will be declare through the reserved word (Function)
//It sintax is: reserved word (params) {code to run}

function resta(a,b,c) {
    let resultado = a-b-c;
    return (resultado);
}
console.log(resta (10,3,5));


function suma(x, y){
    
    return x + y;
}
suma (5, 5);

//* of expression 
//Well know as anonymous functions. It has to storage onto a varariable.
//It sintax is: variable = function (params) {code to run}

let multiplicar = function (a,b,c) {
    return a*b*c;
}
console.log(multiplicar(5,6,2));


function perimetro (radio) {
    return (radio + radio)* 3.14;
}perimetro(5);

function area(radio) {
    return (radio * radio) * 3.14;
}console.log(area(5))

function longitudNombreCompleto(nombre, apellido) {
    return (nombre + " " + apellido).length;
}longitudNombreCompleto("Diego", "Rodriguez")

function escribirCartelito (titulo, nombre, apellido){
    return titulo + "." + " " + nombre + " " + apellido;
    }
    escribirCartelito ("Dr", "Diego", "Rodriguez")

function sePoneLaOlla(dia) {
    if (dia !== "Domingo") {
    return "Mejor lo dejamos para el domingo";
    }else {
        return "¡Pongamos la olla, hoy se comen pastas!"
        }
    }
    sePoneLaOlla("Domingo");

    
function finDeSemana (dia) {	
	switch (dia){
	case 'viernes':
    	console.log('buen finde')
	break;
	case 'lunes':
    	console.log('buena semana')
		break;
	default: console.log('buen dia')
	}
}
finDeSemana("lunes")

function tengoClases(dia) {
	switch (dia) {
		case "lunes":
        case "miercoles":
        case "viernes":
		console.log("tenés clases")
		break;
		default: console.log("no tenés clases");
	}
}tengoClases("martes")

// todo: Function CallBack
// It's well know as a function that is invoked as a parameter of another function.

function doble(num) {
    return num * 2;
}

function triple(num) {
    return num * 3;
}

function aplicarCallback(num, callBack){
    return callBack(num) 
}

//console.log(aplicarCallback(12, doble));
console.log(aplicarCallback(12,num => num * 2));