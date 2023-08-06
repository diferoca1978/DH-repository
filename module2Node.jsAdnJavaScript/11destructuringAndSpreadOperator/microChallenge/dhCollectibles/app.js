let collectiblesData = require('./collectibles');

let hotToys = collectiblesData('Hot Toys');
let bandai = collectiblesData('Bandai');
let starWars = collectiblesData('Star Wars');

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars]

let collectibles = {

  figures : unifiedCollectibles,
  listFigures : function() {
    
    this.figures.forEach(row => console.log(row))
    
  },
  figuresByBrand : function (brand) {

    let result = this.figures.filter(row => row.marca == brand)
    return result

  } 

}
console.log(collectibles.figuresByBrand('Hot Toys'))

