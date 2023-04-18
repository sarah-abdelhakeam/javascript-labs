/*

1.	Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8


*/
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// console.log(arr1);
// console.log(arr1.length);

function sorting ()
{
   
    var temp , i , j ;
    for(j = 0; j <= arr1.length - 2; j++)
    {
        for ( i =0 ; i<= arr1.length-2 ; i++)
        {
        // if(parseInt(arr1[i]) > parseInt(arr1[i+1]))

            if(arr1[i] > arr1[i+1])
            {
                temp    = arr1[i+1];
                arr1[i+1] = arr1[i];
                arr1[i] = temp  ;

            }
            else continue ;
        }

    }
   
   return arr1;

}

console.log(" unsorted array ");
console.log(arr1);

console.log(" sorted array without build-in function  ");

 console.log(sorting(arr1));

////// using build-in function //////
console.log(" build-in function method ");
console.log(arr1.sort(function(a,b){return a-b;} ));