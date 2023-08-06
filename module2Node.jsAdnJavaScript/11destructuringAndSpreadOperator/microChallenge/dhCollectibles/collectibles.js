const { readFileSync } = require('fs')

function bringData(brand) {

  let path = './data'
  let data = ''
  if (brand == 'Hot Toys') data = readFileSync(path += '/figures1.json', 'utf-8')
  else if (brand == 'Bandai') data = readFileSync(path += '/figures2.json', 'utf-8')
  else if (brand == 'Star Wars') data = readFileSync(path += '/figures3.json', 'utf-8')
  
  return JSON.parse(data)  
  
}
module.exports = bringData