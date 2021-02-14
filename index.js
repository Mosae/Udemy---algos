function fizzBuzz(num){
  for(let i=1; i <= num; i++){
    let multipleOf3 = i % 3 === 0
    let multipleOf5 = i % 5 === 0
  if(i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz')
  else if(multipleOf3) console.log('Fizz')
  else if (multipleOf5 ) console.log('Buzz')
  else console.log(i)

  }
}
fizzBuzz(20)

////Time complexity = O(n) linear runtime
///S = O(1)

////////////


