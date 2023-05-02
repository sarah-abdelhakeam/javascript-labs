

console.log("the data is :  hello ");

// void fn put all fetch in it => show btn
// clear fn ?!
function show_fn()
{
     var employee_id = document.getElementById("selected_employee").value;


    fetch('finalq1.json')
    .then(res => res.json())
    .then(data =>{
    let placeholder = document.querySelector("#employees_data");
    let output ="";
        for(let employee of data)
        {
           
               if(employee_id == employee.id){

            output += `
            <tr> 
                <td>
                    ${employee.id}
                </td>
                <td>
                    ${employee.name}
                </td>
                <td>
                    ${employee.age}
                </td>
                <td>
                    ${employee.salary}
                </td>
            </tr>
            
        
            `;
        }//end for 
    }//end if
   
    placeholder.innerHTML = output;
    } 
        // console.log(data)
    );
    
}//end fn

function clear_fn()
{
    console.log("clear");
    document.getElementById("myDropdown").innerHTML="";
}


var show = document.getElementById('showbtn');
var clear = document.getElementById('clearbtn');
// var e = document.getElementById("selected_employee");
// var value = e.id;
// var text = e.options[e.selectdIndex].text;

function options_fn(){
    var x = document.getElementById("selected_employee").value;
    //var value = e.options[e.selectdIndex].value;
    // var text = e.options[e.selectdIndex].text;
    
document.getElementById("demo").innerHTML=x;


// const obj = JSON.parse(text);
// document.getElementById("demo").innerHTML =
// obj.employees[1].name + " " + obj.employees[1].age;

}





// function show_fn()
// {
//     fetch('finalq1.json')
//     .then(res => res.json())
//     .then(data =>{
//     let placeholder = document.querySelector("#employees_data");
//     let output ="";
//     for(let employee of data)
//     {
//         output += `
//         <tr> 
//             <td>
//                 ${employee.id}
//             </td>
//             <td>
//                 ${employee.name}
//             </td>
//             <td>
//                 ${employee.age}
//             </td>
//             <td>
//                 ${employee.salary}
//             </td>
//         </tr>
        
    
//         `;
//     }
//     placeholder.innerHTML = output;
//     } 
//         // console.log(data)
//     );
    
// }
