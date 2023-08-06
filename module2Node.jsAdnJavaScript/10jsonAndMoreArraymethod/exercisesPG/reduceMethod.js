//* Total of laps run

let vueltas = [5, 8, 12, 3, 22]

let totalVueltas = vueltas.reduce((acc, laps) => {
    return acc + laps
})

console.log(totalVueltas);