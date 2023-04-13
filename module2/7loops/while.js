let cont = 0;
let myArray = [];

while (cont < 5){
myArray.push(cont);
cont ++;
}
console.log(myArray);

//* loop while with decrease count.

const MyArray = [];
let i = 5;
while (i > 0) {
  MyArray.push(i);
  i--;
}
console.log(MyArray);

function tablaDeMultiplicar(numero) {
  let i = 1;
  while (i <= 10) {
    let result = (numero * i) ;
    console.log(numero + ' ' + '*' + ' ' + i + ' ' + '=' + ' ' +  result)
		i++;
  }
}
tablaDeMultiplicar(5);
