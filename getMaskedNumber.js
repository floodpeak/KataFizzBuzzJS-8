export default (number)=>{
  const multipleOf3 = number % 3 === 0
  const multipleOf5 = number % 5 === 0
  let result = ''
  if(multipleOf3 || number % 10 === 3 || Math.floor(number / 10) === 3){
    result += 'Fizz'
  }
  if(multipleOf5){
    result += 'Buzz'
  }
  return result || number
}
