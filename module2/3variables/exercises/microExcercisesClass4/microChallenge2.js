//* Adjust fee.

let pay = 1500;
let consumptionKWH = 350;
let percentage = 20;
let payIncrease = pay + (pay * percentage)/100;
let message = `Debido a que su hogar tuvo un consumo de ${consumptionKWH}KWH en base al 
ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%)
cumplimos con informarle que se ha ajustado el total a pagar, que será de ${payIncrease}`;


consumptionKWH > 300 ? console.log(message) : console.log('the consumption was kept');
