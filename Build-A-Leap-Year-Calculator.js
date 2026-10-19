//This code calculates whether the year is a leap year of not, it uses funtion and if blocks.


let year = 1600
function isLeapYear(year){
  if(year%4==0){
    if(year%100 == 0){
      if(year%400 == 0){
        return`${year} is a leap year.`
      }
      return `${year} is not a leap year.`
    }
    return `${year} is a leap year.`
  }
  return  `${year} is not a leap year.`
  
}
let result = isLeapYear(year)
console.log(result)
