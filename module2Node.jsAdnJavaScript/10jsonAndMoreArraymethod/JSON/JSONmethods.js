//* Method stringify().

let movies = [
  {
    id : 'Matrix',
    rating : 'high',
    awards : 'Oscar',
    length : 155,
    price : 1000,
    type : 'action',
  }
]

let dataConvert = JSON.stringify(movies)
console.log(dataConvert);

//* Method parse().

let dataReconvert = JSON.parse(dataConvert)
console.log(dataReconvert);