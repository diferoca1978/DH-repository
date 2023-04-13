let tools = [
    {name:'hammer', price:2000},
    {name:'screwdriver', price:1500},
    {name:'leveler', price:2500},
    {name:'saw', price:1500},
    {name:'drill', price:3000},
]

/* FILTER METHOD.

let toolsfilter = tools.filter(function(tool){
    return tool.price <= 2000;
})
toolsfilter;
console.log(toolsfilter.length);
console.log(toolsfilter);

El metodo filter crea un nuevo array en donde se almacenan
solo los objetos que psaron el filtro que se le indico en 
la funcion.*/

//METODO FIND

let toolsfilter = tools.find(function(tool){
    return tool.price === 1500;
    
})
toolsfilter;

console.log(toolsfilter);

/*El metodo find es un metodo de busqueda no de filtrado,
por lo que siempre retornara el primer objeto que 
encuentre que cumpla con los parametros establecidos
por la funcion entonces dejara de iterar.*/

// METODO MAP

/*let toolsfilter = tools.map(function(tool){
    return tool.price;
    
})
toolsfilter;
console.log(toolsfilter.length);
console.log(toolsfilter);

El metodo map crea un array de la misma longituid 
que el array original pero solo retorna el parametro del
objeto que le solicitamos por medio de la funcion.*/

//METODO FOREACH

/*tools.forEach(function(tool){
    console.log(tool.name);
    
})

El metodo forEach no genera un nuevo array 
solo itera por cada uno de los objetos del array 
imprimiendo la informacion o parametros solicitados
por la funcion.
*/

/*let result = [];

tools.forEach(function(tool){
    result.push(tool.name);
}); console.log(result);

pero si quiero almacenar los datos debo crear un array 
y empujarle los datos por medio de el metodo push.*/

//METODO SOME

/*let toolsfilter = tools.some(function(tool){
    return tool.price < 2000;
    
})
toolsfilter;

console.log(toolsfilter);

El metodo some me genera un nuevo array pero 
solo con valores booleanos (true or false) es
decir solo me indica si es verdadero o falso 
dentro del array original el parametro que se
le esta solicitando mediante la funcion. No 
me retorna parametros especificos del objeto.*/
