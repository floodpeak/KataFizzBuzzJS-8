export default (number)=>{
  const base3 = 3
  const multipleOf3 = number % base3 === 0
  const multipleOf5 = number % 5 === 0
  let result = ''
  if(multipleOf3
    || number % 10 === base3
    || Math.floor(number / 10) === base3){
    result += 'Fizz'
  }
  if(multipleOf5
    || number % 10 === 5
    || Math.floor(number / 10) === 5){
    result += 'Buzz'
  }
  return result || number
}
