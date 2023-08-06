const fs = require('fs')

function dataB (path) {

  let jsonData = fs.readFileSync(path,'utf-8')
  let bicycleData = JSON.parse(jsonData)
  return bicycleData
}

module.exports = dataB
