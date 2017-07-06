// Define a function max() that takes two numbers as arguments and returns the largest of them.
//
function max(num1, num2) {
  if ( num1 !== num2 ) {
    if ( num1 > num2 ) {
      return num1
    } else {
      return num2
    }
  }
  return 'numbers are equal'
}
// console.log(max(10, 10));
// console.log(max(100, 32));
// console.log(max(20.2, 100.5));
// console.log(max('a', 'b'));
//
// // Use the if-then-else construct available in Javascript.







// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(num1, num2, num3) {
  if (num1 !== num2 !== num3) {
    if ( num1 > (num2 && num3) ) {
      return num1;
    } else if ( num2 > (num1 && num3) ) {
      return num2;
    } else if ( num3 > (num1 && num2) ) {
      return num3;
    }
  } return "two or more numbers are equal";
}
// console.log(maxOfThree(4, 2, 3));
// console.log(maxOfThree(1, 5, 3));
// console.log(maxOfThree(1, 2, 6));
// console.log(maxOfThree(6, 6, 6));
// console.log(maxOfThree(5, 6, 6));
// console.log(maxOfThree('a', 'b', 'c'));
// // ASCII code table is a numberical representation of the value of characters which
// // JS will automatically change to it's value in a comparision expression
// // in case of a full word JS will only take in calculation the value of the first
// // character








// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function itsVowel(character) {
  let vowel = ['a', 'e', 'i', 'o', 'u']
  // use vanila JS
  for ( let i = 0; i < vowel.length; i++ ) {
    if ( character === vowel[i] ) {
      return true
    }
  }
  return false
}
//   // use find method
//   // use indexOf method
//   // use filter method
//   // use some method
//   // use contains methos from lodash if possible
// console.log(itsVowel('u'));
// console.log(itsVowel('a'));
// console.log(itsVowel('i'));
// console.log(itsVowel('l'));
// console.log(itsVowel('k'));
// console.log(itsVowel('you'));







// Write a function translate() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate(text) {
  // if text is a string turn to an array to divide letter
  // figure out if the letter is a consonant or not
  // if it is a consonant double the letter and place an o in the middle at the same step
  // keep the vowel the same in place
  // if the text is an object turn to a string by usign the .toString method then to an array of individual letters
  // if the passed text is an array of full words turn to a string then back an array of individual letters

  let vowel = ['a', 'e', 'i', 'o', 'u', ' ']
  if ( typeof text === 'string') {
    let textArray = text.split('')
    for ( let i = 0; i < textArray.length; i++ ) {
      if ( vowel.indexOf(textArray[i]) === -1 ) {
        textArray[i] = textArray[i] + 'o' + textArray[i]
        console.log(textArray)
      }
    }
    let finalText = textArray.join('')
    console.log(finalText);
  }
  return 'Not a string'
}
// console.log(translate([1, 2, 2]))
// console.log(translate('I wanna go'))
// console.log(translate('can this be true tell me can this be real how can I put into words what I feel'))




// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.


function math(numbersArray) {
  var sum = numbersArray.reduce(function(a, b) {
    return a + b;
  })
  var multiply = numbersArray.reduce(function(a, b) {
    return a * b;
  })
  return results = [sum, multiply]
}
// you can also return multiple results in a form of an object then access each value in the object.
// check notes for multiple return value
// console.log(math([1, 2, 3, 4]))
// console.log(math([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))






// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".

function reverse (string) {
  if( typeof string === 'string' ) {
  var stringArray = string.split('').reverse().join('')
  return stringArray
  }
  return 'Not a string'
}

// console.log(reverse('Happy Birthday'));
// console.log(reverse({banana: 'banana'}));
// console.log(reverse('10001000'));
// console.log(reverse(10001000));
// console.log(reverse([1, 2, 3, 4]));





function calculateSumOfFizzBuzz(number) {
  if ( typeof number === 'number') {
    var array = []
    var value = 1

    while ( value !== number ) {
      if ( value % 5 === 0 || value % 3 === 0 ) {
        array.push(value)
      }
      // var value = value + 1
      value++
    }

    var sum = array.reduce(function(a, b){
      return a + b;
    }, number)

    var multiply = array.reduce(function(a, b){
      return a * b;
    }, number)

    return [sum, multiply]
  }
  return 'Please input a number'
}


// console.log(calculateSumOfFizzBuzz(5))
// console.log(calculateSumOfFizzBuzz('five'))
// console.log(calculateSumOfFizzBuzz([1, 2, 3, 4]));



// The logic for if passing an array and creating an "API" functions to call later
// and creating another if condition


// function calculateSumOfFizzBuzz(number) {
//   if ( typeof number === 'number') {
//     var array = []
//     var value = 1
//
//     while ( value !== number ) {
//       if ( value % 5 === 0 || value % 3 === 0 ) {
//         array.push(value)
//       }
//       // var value = value + 1
//       value++
//     }
//
//     var sum = sumNum(array, number)
//
//     var multiply = multiplyNum(array, number)
//
//     return [sum, multiply]
//   }
//
//   if (Array.isArray(number)) {
//     return [sumNum(number), multiplyNum(number)]
//   }
//
//   return 'Please input a number'
// }
//
// function sumNum(array, number) {
//   // console.log(array);
//   return array.reduce(function(a, b){
//     return a + b;
//   }, (number || 0))
// }
//
// function multiplyNum(array, number) {
//   return array.reduce(function(a, b){
//    return a * b;
//  }, (number || 1))
// }





// Represent a small bilingual lexicon as a Javascript object in the following fashion
//{"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"}
//and use it to translate your Christmas cards from English into Swedish.



//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord(arrayOfWords) {
  // var longestWord = []
  for ( var i = 0; i < arrayOfWords.length; i++ ) {
    for ( var j = i + 1; j < arrayOfWords.length; j++ ) {
      if ( arrayOfWords[i].length = arrayOfWords[j].length ) {
        console.log(arrayOfWords[j])
      }
    }
  }
  // return the length of the longest one.
}

console.log(findLongestWord(['go', 'car', 'head']))


//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").




// Dev Example:
// for (var i=1; i<=5; i++) {
//   console.log(i);
//     setTimeout( function timer(){
//         console.log( i );
//     }, i*1000 );
// }
//
//
// for (var i=1; i<=5; i++) {
//     (function(){
//         setTimeout( function timer(){
//             console.log( i );
//         }, i*1000 );
//     })();
// }
//
//
// for (var i=1; i<=5; i++) {
//     (function(j){
//         setTimeout( function timer(){
//             console.log( j );
//         }, j*1000 );
//     })( i );
// }





// arr.reduce(callback, [initialValue])
// callback function takes
// accumulator, currentValue,
// currentIndex, array
