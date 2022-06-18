function hasTargetSum(array, target) {
  // Write your algorithm here
  // iterate through each number in the array
  for (let i = 0; i < array.length; i++) {
    // for the current num, identify a targetSum that adds to the target(targetSum= target- array[i])
    const targetSum =target - array[i];
    // iterate throughthe rest of the array
    for (let num = i+1; num < array.length; num++){
      // check if any number is our targetSum
      // if SourceBuffer,return true
      if(array[num] === targetSum) return true;
      }
  }
    // if i reach the end of the array,return false
      return false;

}

/* 
  Write the Big O time complexity of your function here
  runtime: 0(n^2)
  space : 0(n)
*/

/* 
  Add your pseudocode here
  // Write your algorithm here
  // iterate through each number in the array
   // for the current num, identify a targetSum that adds to the target(targetSum= target- array[i])
    // iterate throughthe rest of the array
     // check if any number is our targetSum
      // if SourceBuffer,return true
      // if i reach the end of the array,return false
*/

/*
  Add written explanation of your solution here
  function hasTargetSum(array, target) {
  // Write your algorithm here
  // iterate through each number in the array
    // for the current num, identify a targetSum that adds to the target(targetSum= target- array[i])
    // iterate throughthe rest of the array
      // check if any number is our targetSum
      // if SourceBuffer,return true
    // if i reach the end of the array,return false
      return false;

}
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
