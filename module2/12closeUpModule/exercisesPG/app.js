let autosImportados = require('./autos')

let concesionaria = {
  autos : autosImportados,
  buscarAuto : function (patent) {
    let buscar = this.autos.find(row => row.patente == patent)
     if (buscar) return buscar
     else return null    
  },
  venderAuto : function (patent) {
    let venta = this.buscarAuto(patent)
    if (venta == null) return 'Auto no encontrado'
    else venta.vendido = true
  },
  autosParaLaVenta : function(){
    let autosNoVendidos = this.autos.filter(row => row.vendido == false)
    return autosNoVendidos
  },
  autosNuevos : function () {
    let ceroKm = this.autosParaLaVenta().filter(row => row.km < 100)
    return ceroKm
  },
  listaDeVentas : function () {
    let lista = this.autos.filter(row => row.vendido == true)
    let valores = lista.map(row => row.precio)
    return valores 
  },
  totalDeVentas : function () {
    let ventasHechas = this.listaDeVentas()
    let total = 0
    let totalventas = ventasHechas.reduce((acum, current) => acum + current, total)
    return totalventas
  },
  puedeComprar : function (auto, persona) {
    if (persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas))
    return true
    else return false
  },
  autosQuePuedeComprar : function (persona) {
    let comprar = this.autosParaLaVenta().filter(row => this.puedeComprar(row, persona) === true) // for this case we doing first is bring the aveliable car for sell, then we applying the method filter to autosParaLaventa method to through it, secondly inside the filter we call the method puedeComprar and we pass the arguments row and persona, finally we use a comparative operator === true because we need to show the entire object that keep to with the request. (Review the sentencen in the practice onto class 12 stage 10.)    
    return comprar
  }


}
//console.log(concesionaria.venderAuto('')); 
//console.log(concesionaria.autosParaLaVenta());
//console.log(concesionaria.autosNuevos()); 
//console.log(concesionaria.listaDeVentas()); 
//console.log(concesionaria.totalDeVentas()); 
let persona = {nombre: 'Juan',capacidadDePagoEnCuotas: 20000,capacidadDePagoTotal: 200000}
/*let coche = {marca : 'Toyota',modelo : 'Corolla',precio : 100000,cuotas : 14,}
console.log(concesionaria.puedeComprar(coche,persona));*/
console.log(concesionaria.autosQuePuedeComprar(persona)); 


