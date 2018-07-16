Your company assigns each customer a membership ID, and you are implementing a check digit for those IDs.

The check digit should be calculated by adding up all digits in each membership ID. If the result of the sum is a number with more than a single digit, 
nother iteration is required, and the digits of the result also should be added together. This process should repeat until a single-digit number is 
calculated.

For example, for the membership ID "55555" the sum of all digits is 25. Because this is not a single-digit number, 2 and 5 would be added, and the 
result, 7, would be the check digit.




function createCheckDigit(membershipId) {
  // Write the code that goes here.
  let char = membershipId.toString().split('');
  let sum = 0;
  for(let i = 0; i<char.length; i++) {
    sum += parseInt(char[i]);
  }
  if(sum >= 10){
    return createCheckDigit(sum);
  }
  else{
    return sum;
  }
}

//or

console.log(createCheckDigit("55555"));

function createCheckDigit(membershipId) {
  // Write the code that goes here.
  let char = membershipId.toString();
  let sum = 0;
  for(let i = 0; i<char.length; i++) {
    sum += parseInt(char[i]);
  }
  if(sum >= 10){
    return createCheckDigit(sum);
  }
    return sum;
}

console.log(createCheckDigit("55555"));

//or 

function createCheckDigit(membershipId){
    let char = membershipId.toString().split('');
    let sum = char.map(Number).reduce((a, b) => {
                return a + b;
              });
    return sum >= 10 ? createCheckDigit(sum) : sum;
}





