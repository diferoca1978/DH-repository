//* delayed flights

let horariosPartida = [12, 14, 18, 21];
let horariosAtrasados = horariosPartida.map((horas) => {
    return horas - 1
}
);
console.log(horariosAtrasados);