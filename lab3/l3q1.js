/*
1.	you are required to, given a string,
 replace every letter with its position in the alphabet
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.

Example: alphabet_position("The sunset sets at twelve o' clock.") 
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

*/



// function alphabetPosition(text) {
//   let str = text.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     console.log(str.charCodeAt(i) - 96);
//     console.log(str.charAt(i));
//     // str = str.replace(str.charAt(i), str.charCodeAt(i) - 96)
//   }

// }

// alphabetPosition("hello");

///////////////////////////////////////////////////////////////////////////////////////////

// function alphabetPosition(text) {
//     let str = text.toLowerCase();
//     let a = "";
  
//     for (let i = 0; i < str.length; i++) {
  
//         if (str.charCodeAt(i) - 96 > 0 && str.charCodeAt(i) - 96 <= 26) {
//           a+= str.charCodeAt(i) - 96 + ' ';
//         }
//       }
//       return a.trim();
//     }
  
//   console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//   console.log(alphabetPosition("The narwhal bacons at midnight."));
//   console.log(alphabetPosition("y_/js}c^"));
//   console.log(alphabetPosition(".,[}714$"));
  
//////////////////////////////////////////////////////////////////////////////

function alphabetPosition(text)
 {
    var result = [];
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
      "w", "x", "y", "z"]
    text = text.replace(/\W*\d+/g, '').toLowerCase().split(''); 
                    /*
                     /w -->matches any non-word character[a-z]
                     * -->matches the previous token between zero and unlimited times, 
                     as many times as possible, giving back as needed
                     \d --> matches a digit
                     + --> matches the previous token between one and unlimited
                     g -->global -->All matches (don't return after first match)

                    */
    for (var i = 0; i < text.length; i++) 
    {
        var j = alphabet.indexOf(text[i]) + 1;//becuz we start from 0
        if (j) result.push(j);
      }
    return result.join(' ');//btw every 2 nums
  }

console.log ( alphabetPosition("The sunset sets at twelve o' clock.") );