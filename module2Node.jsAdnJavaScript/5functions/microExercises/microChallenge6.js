//* Salary calculation

let salaryPerHour = (salaryPerMonth, daysWorked, hoursPerday) => {
  let total = ((salaryPerMonth / daysWorked) / hoursPerday)
  let message = 'Your salary per hour is: ' + total
  return message 
}
console.log(salaryPerHour(7500, 22, 8))