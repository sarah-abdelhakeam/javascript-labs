console.log("hello ;) ");

/*
q1: 1.	Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
Sample numbers: 3, -7, 2
Output: 3, 2, -7

*/
/*

var n1 = prompt("Enter the first number :");
var n2 = prompt("Enter the first number :");
var n3 = prompt("Enter the first number :");


    if(n1 > n2 && n1> n3)
    {
        if(n2>n3)
        {
            alert(n1+" , " +n2+" , " + n3);
        }
        else{
            alert(n1+" , " +n3+" , " + n2);
        }
        
    }
   else if(n2 > n1 && n2> n3)
    {
        if(n1>n3)
        {
            alert(n2+" , " +n1+" , " + n3);
        }
        else{
            alert(n2+" , " +n3+" , " + n2);
        }
        
    }
   else if(n3 > n1 && n3> n2)
    {
        if(n1>n3)
        {
            alert(n3+" , " +n1+" , " + n2);
        }
        else{
            alert(n3+" , " +n2+" , " + n1);
        }
        
    }

   */ 

  
/*
2.	Write a JavaScript program which iterates the integers from 1 to 100.
 But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
 For numbers which are multiples of both three and five print "FizzBuzz".
*/


// for(var i = 1 ; i <= 100 ; i++)
// {
//      if (i %3 ==0 && i % 5 ==0)
//     {
//         console.log("FizzBuzz");
//     }
//     else if(i %3 ==0)
//     {
//         console.log("Fizz");
//     }
//     else if(i % 5 ==0)
//     {
//         console.log("Buzz");
//     }
    
//     else
//      {
//         console.log(i);
//     }
   

// }



/*
 3.	Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
*/

// var result =0 ;

// for(var i =0 ; i < 1000 ; i++)
// {
//      if (i %3 ==0 && i % 5 ==0)
//     {
//       result += i;  
//     }

// }
// console.log( result );



/*
4.	Write a JavaScript program where the program takes a random integer between 1 to 10, 
the user is then prompted to input a guess number. 
If the user input matches with guess number, 
the program will display a message "Good Work" otherwise display a message ‘ wrong guess, want to try again?’
 if confirmed continue up to 3 times,
 if not stop the code, after 3 failed times, display message ‘game over’.


 function ?!

*/




var mynum = 7 , usernum =0 ;
usernum = prompt("Enter a number from 1 to 10 ");

if(mynum == usernum)
{
     alert(" Good Work ;)")
}

else{

    alert(" wrong guess");

    while (confirm(" Do you want to play again ? ") )
    {
        usernum = prompt("Enter a number from 1 to 10 ");
        for (var i = 1 ; i< 3 ; i++)
        {
            
            if(mynum == usernum)
            {
                alert(" Good Work ;)")
                break;

            }else{

                alert(" wrong guess");
            }
            usernum = prompt("Enter a number from 1 to 10 ");
        }
        alert(" Game over");
        break;
        
    };

  
}

   


/*
  5.	(bonus) According to Wikipedia a happy number is defined by the following process :
"Starting with any positive integer, 
replace the number by the sum of the squares of its digits,
 and repeat the process until the number equals 1 (where it will stay), 
 or it loops endlessly in a cycle which does not include 1.
  Those numbers for which this process ends in 1 are happy numbers,
   while those that do not end in 1 are unhappy numbers (or sad numbers)".
Write a JavaScript program to find and print the first 5 happy numbers.


*/

//var num =0;



