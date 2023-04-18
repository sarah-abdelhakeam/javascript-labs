/*
 2.	Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Sample Data and output:
Example string: 'Web Development Tutorial'
Expected Output: 'Development'

*/
var s = 'Web Development Tutorial';


// var longestWord ='' ;
// var word=[] ;
// var str='' ;
// function longestString(str)
// {
//     word = str.split(' ');
//    for(var i = 0 ; i<= word.length ; i++)
//    {
//         if(word[i].length > word[i+1].length)
//         longestWord = word[i];
//    }
//     return longestWord;

// }

//console.log('the longest word is :');
//console.log(longestString(s));

console.log(s);

function largest(string)
{
    var words = s.split(' ');
    var sorted = words.sort();
    return sorted[0];

    }
    console.log('the longest word is :');
    console.log(largest(s));