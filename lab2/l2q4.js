/*
4.	Write a JavaScript function to convert an amount to coins.
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1

plying with div and %

*/
var amount = 0 , curr=[] ,i , result =[] ;
var flag , counter;
//console.log(result.length );
//var a = 4.9;
// console.log(parseFloat(a));
// result= [25, 10, 5, 2, 1];
// console.log(result);
// result.push(6);
// console.log(result);

function amountTocoins (a , c) // a= amount , c = currency
{
    for(i = 0 ; i< c.length ; i++)
    {
        if(a >= c[i])
        {
             a = a / c[i] ;
            //a = a-c[i];
            while(parseInt(a) >= 0)
            {
                 a--;
                 //flag++;
                 a *= i;
                 result.push(i);

            }
           
           // result.push(i);
        }
        
    }
    return result;
 }

console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
