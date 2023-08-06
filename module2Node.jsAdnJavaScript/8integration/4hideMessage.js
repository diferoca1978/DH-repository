function laClaveSecreta(frase) {
    
  for (let i = 0; i < frase.length; i++) { 
    (frase[i] === '*') ? frase.splice(i,1) : ''
  }

  let oracionOrdenada = ''

    for (let i = frase.length - 1; i >= 0; i --) {
      oracionOrdenada += frase[i]
  }
  return oracionOrdenada
}
console.log(laClaveSecreta([ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"]))