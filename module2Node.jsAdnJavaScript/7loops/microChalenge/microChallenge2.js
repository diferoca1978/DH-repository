let multiplicationTable = () => {
  
  let multiplier = 1;

  for (let multiply = 1; multiply <= 10; multiply++) {
    let result = (multiplier * multiply)
    console.log(multiplier +' '+ '*' + ' ' + multiply+ ' ' + '=' + ' ' + result)
  }
}
multiplicationTable()