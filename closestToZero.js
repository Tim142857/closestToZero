function closestToZero(numbers) {
  if(!numbers || numbers.length === 0) return 0;
  let closest;
  for(number of numbers){
  	if(!closest && closest !==0) closest = number;
    if(Math.abs(closest) > Math.abs(number) || Math.abs(closest) === Math.abs(number) && number > 0) closest = number;
  }
  return closest;
}

const arr0 = undefined;
const arr1 = [];
const arr2 = [2, 8];
const arr3 = [2, 8, 1];
const arr4 = [-2, 2, 9];
const arr5 = [-8, -3, 0, 2];
const arr6 = [-8, -3, 2];
const arr7 =  [-1, 0, 1];
const arr8 = [-1, 1];

console.log('-------  TESTS  -------')
console.log(closestToZero(arr0) === 0);
console.log(closestToZero(arr1) === 0);
console.log(closestToZero(arr2) === 2);
console.log(closestToZero(arr3) === 1);
console.log(closestToZero(arr4) === 2);
console.log(closestToZero(arr5) === 0);
console.log(closestToZero(arr6) === 2);
console.log(closestToZero(arr7) === 0);
console.log(closestToZero(arr8) === 1);