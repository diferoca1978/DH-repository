
function reporteDePasajeros(station) {
  
  let passengers = 200;
  let report = ['En la estación 0 ' + 'hay ' + passengers +' '+ 'pasajeros arriba del tren']

    for (let i = 1; i <= station; i++) {
       (i > 0 && i < 5) ? report.push('En la estación ' + i +' '+ 'hay ' + (passengers += 20) +' '+ 'pasajeros arriba del tren') : (i === 5) ? report.push('En la estación ' + i +' '+ 'hay ' + (passengers += 40) +' '+ 'pasajeros arriba del tren') : ''
    }
  return report
}
console.log(reporteDePasajeros(0))

 
