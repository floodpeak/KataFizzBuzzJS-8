export default (number)=>{
  const base3 = 3
  const base5 = 5
  const multipleOf3 = number % base3 === 0
  const multipleOf5 = number % base5 === 0
  let result = ''
  if(multipleOf3
    || number % 10 === base3
    || Math.floor(number / 10) === base3){
    result += 'Fizz'
  }
  if(multipleOf5
    || number % 10 === base5
    || Math.floor(number / 10) === base5){
    result += 'Buzz'
  }
  return result || number
}
