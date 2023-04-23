/*
2.	Your task is to sort a given string. Each word in the string will contain a single number.
 This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, 
return an empty string.
 The words in the input String will only contain valid consecutive numbers.
Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

*/

function order(words){
    if (words) {
      let finalArr = [];//let scope is local inside block  var local inside fn
      words.split(' ').forEach(word => {
        let index = Number(word.match(/\d+/g)); // \d-> mached a digits +->  
        finalArr[index - 1] = word;
      })
      return finalArr.join(' ');
    }
    return words;
  }


  console.log(order("is2 Thi1s T4est 3a"));
  console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
  console.log("");




//    function order(words){
//      let arr = words.split(' '); //let scope is local inside block  var local inside fn
//      let r = [];
  
//      arr.forEach(word=>{

//        let num = x.find(el=>parseInt(el)); //I extracted the number of it, finding in the splitted word the element that can be parseInted
//        r.push([word,parseInt(num)]) ;//And then I just pushed to the "r" array an array with the word and the number inside of it
//      })
//      //I would get something like this:[ [ 'is2', 2 ], [ 'Thi1s', 1 ], [ 'T4est', 4 ], [ '3a', 3 ] ]
  
//      r.sort((a,b)=>a[1]-b[1]).map(x=> x.splice(1,1)); 
//                 /*

//                 Then I sorted the "r" array, but using the 1st index of the array,
//                  so I sort it by the numbers inside of the arrays with the words, 
//                  and then when it is sorted I just spliced the numbers inside every array, 
//                  so I would get something like this:

//                 [ [ 'Thi1s' ], [ 'is2' ], [ '3a' ], [ 'T4est' ] ]


//                 */
//    return r.join(' '); 
// //At the end I just returned "r" but joined with spaces, so I get a string like this: "Thi1s is2 3a T4est"
//   }

//   function order(words){
//     let arr = words.split(' '); //let scope is local inside block  var local inside fn
//     let r = [];
  
//     arr.forEach(word=>{
//       let x = word.split('');
//       let num = x.find(el=>parseInt(el));
//       r.push([word,parseInt(num)]); 
//     })
  
//     r.sort((a,b)=>a[1]-b[1]).map(x=> x.splice(1,1));
//     return r.join(' ');
//   }

//   console.log(order("is2 Thi1s T4est 3a"));
//   console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
//   console.log("");

