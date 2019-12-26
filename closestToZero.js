function closestToZero(numbers) {
  if(!numbers || numbers.length === 0) return 0;
  let closest;
  for(number of numbers){
  	if(!closest) closest = number;
    if(closest > Math.abs(number) || Math.abs(closest) === Math.abs(number) && number > 0) closest = number;
  }
  return closest;
}

const arr0 = undefined;
const arr1 = [];
const arr2 = [2, 8];
const arr3 = [2, 8, 1];
const arr4 = [-2, 2, 9];

console.log('-------  TESTS  -------')
console.log(closestToZero(arr0) === 0);
console.log(closestToZero(arr1) === 0);
console.log(closestToZero(arr2) === 2);
console.log(closestToZero(arr3) === 1);
console.log(closestToZero(arr4) === 2);