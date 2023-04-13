

let bicycleData = require('./datosBici')
let data = bicycleData('./bicicletas.json')

 const dhBicis = {

    bicycles : data,
    searchbike : function (id) {
      let search = this.bicycles.find(row => row.id == id)
      if (search) return search
      else return null
    },

    sellBike : function (id) {
      let sold = this.searchbike(id)
      if (sold == null) 'Bike does not found.'
      else sold.vendida = true
      return sold

    },

    bikeToSell : function () {
      let showBikeToSell = this.bicycles.filter(row => row.vendida == false)
      return showBikeToSell
    },

    totalSales: function () {
      let sales = this.bicycles.filter(row => row.vendida == true)
      let total = 0
      let totalBicyclesSold = sales.reduce((acum, current) => acum + current.precio, total)
      return totalBicyclesSold
    },
    increaseBici : function (num) {
        let calculation = data.map(row => {
        row.precio = (row.precio + (row.precio) * num / 100)
        return row
      })
      return calculation
    },
    gearBici: function (num) {
      let gear = this.bicycles.filter(row => row.Rodado == num)
      return gear
    },
    showAllBikes : function () {
      
      return data.forEach(row => console.log(row))
       
    }
 }
 //console.log(dhBicis.sellBike(4));
 //console.log(dhBicis.increaseBici(20)); 
 console.log(dhBicis.showAllBikes());





