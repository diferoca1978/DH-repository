function sumatoriaGananciasSemestre(unSemestre) {
  return unSemestre[0] + unSemestre[1] +
      unSemestre[2] + unSemestre[3] +
      unSemestre[4] + unSemestre[5];
}
console.log(sumatoriaGananciasSemestre([85, 45, 30]))
console.log(sumatoriaGananciasSemestre([85, 45, 30, 85, 45, 30]))
console.log(sumatoriaGananciasSemestre([10]))


let gananciaTotal4 = (unPeriodo) => {
  let sumatoria = 0;
      sumatoria = sumatoria + unPeriodo[0];
      sumatoria = sumatoria + unPeriodo[1];
      sumatoria = sumatoria + unPeriodo[2];
      sumatoria = sumatoria + unPeriodo[3];
  return sumatoria
}

function gananciaTotal(unPeriodo) {
  let sumatoria = 0;
  for (let i = 0; i < unPeriodo.length; i++) {
      let mes = unPeriodo[i];
      sumatoria += mes;
  }
  return sumatoria;
}console.log(gananciaTotal([100, 20, 50, -20, 200, 300]))


function cantidadDeMesesConGanancia(unPeriodo) {
  let cantidad = 0;
  for (let i = 0; i < unPeriodo.length;i++) {
    
    if (unPeriodo[i] > 0) {
      cantidad ++ 
    }
  }
  return cantidad;
}
console.log(cantidadDeMesesConGanancia([0, 3, -1, 5]))

function cantidadDeMesesConPerdida(unPeriodo) {
  let cantidad = 0;
  for (let i = 0; i < unPeriodo.length;i++) {
    if (unPeriodo[i] < 0) {
      cantidad ++
    }
  }
  return cantidad;
}
console.log(cantidadDeMesesConPerdida([0, 3, -1, 5]));


function saldosDeMesesConGanancia(unPeriodo) {

   let result = [];

    for (let i = 0; i < unPeriodo.length;i++) {
      if (unPeriodo[i] > 0) {
        result.push(unPeriodo[i])
      }
    }
  return result;
}
console.log(saldosDeMesesConGanancia([100, 20, 0, -10, 10]));

