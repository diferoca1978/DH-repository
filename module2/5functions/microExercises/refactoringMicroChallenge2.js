function calculation (type, additionals) {
  
  let total = 0

  let addition = {
    'jamon' : 30,
    'queso' : 25,
    'salsa de tomate': 5,
    'mayo' : 5,
    'mostaza' : 5,
    'tomate' : 15,
    'lechuga' : 10,
    'cebolla' : 10,
  } 
  for (let i = 0; i < addition.length; i++) {
    console.log(addition[i])
  }

  let hamburger = {
    'carne a la parrilla': 1800,
    'pollo': 1500,
    'vegetariana': 1200 
  }
  let chekHamburgerVal = hamburger[type]
   

}
calculation('carne a la parrilla', '')
