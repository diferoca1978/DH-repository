
let dataHamburger = require('./dataHamburger')

let priceCalculation = {
  data : dataHamburger,
  searchBurger : function (typeOfHamburguer){
    let total = 0
    let searchBurger = this.data.find(row => row.burger == typeOfHamburguer)
    if (searchBurger) total += searchBurger.price
    else 'we do not sell this kind of hamburger'
    return total 
  },
  searchAddition : function (...addition){
    let total = 0
    let searchAddlt = this.data.find(row => row.add == addition)
    if (searchAddlt) total += searchAddlt.price
    return total
  },
}

//console.log(priceCalculation.searchBurger('chicken')); 
console.log(priceCalculation.searchAddition('ham')); 
//priceCalculation.searchAddition('ham'); 



