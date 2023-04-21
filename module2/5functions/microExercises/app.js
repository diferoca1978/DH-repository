
let dataHamburger = require('./dataHamburger')

let priceCalculation = {
  data : dataHamburger,
  selectBurger : function (typeOfHamburguer, add1, add2, add3){
    let total = 0
    this.data.forEach(row => {
      if (row.name == typeOfHamburguer) total += row.price
      else if (row.name == add1) total += row.price
      else if (row.name == add2) total += row.price
      else if (row.name == add3) total += row.price
      else 'No such burger'
    }) 
    return 'The total cost of burger is: $' + total
  },
}
//let additionals = ['ham', 'cheese', 'mustard', 'tomato', 'lettuce', 'onion']
console.log(priceCalculation.selectBurger('grillCocodrille','cheese', 'tomato', 'ham')); 
//priceCalculation.searchBurger('chicken'); 
//console.log(priceCalculation.selectAddition('ham', 'tomato' )); 
//priceCalculation.selectAddition('ham', 'tomato'); 




