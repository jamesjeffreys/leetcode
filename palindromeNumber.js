//28 October 2022
//Palindrome Number 


/**
 * @param {number} x
 * @return {boolean}
 */

//Function takes in a number 
//convert number toString() and split(), use reverse() and join() methods to reverse the number and save that value in a variable
//Use Number contructor on varible to set string to integer
//return x === num which should return a boolean value

 var isPalindrome = function(x) {
    let num = Number(x.toString().split('').reverse().join(''))
    return x === num
}

//Should return true or false depending on whether or not x is a palindrome (same back and forward)
//e.g. if x = 121 => true 

