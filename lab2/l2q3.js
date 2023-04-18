/*

3.	Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 
that has no positive divisors other than 1 and itself.

*/

var num =0 , i , flag = true ;

function checkPrime (n)
{
    for (i =2 ; i<n-1 ; i++) //i must start with i =2  n%0 n%1 --> meanless
    if(n % i ==0)
    {
        flag = false;
        break;
    }
    if(flag==true)
    {
        alert(n + " is a prime numer ");
    }
    else alert(n +" is not a prime number");
}


num = parseInt(prompt('enter a number '));
checkPrime(num);
