

const num1 = 5;
const num2 = 3;

// add two numbers
const sum = num1 + num2;

// display the sum
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

function myFunc5(...p1)
{
var sum=0;
for (let i=0;i<p1.length;i++)
{
sum+=p1[i];
} 
console.log(sum);
}
myFunc5();
myFunc5(10);



//funtion aro-

// var myFunc6 =function(p1,p2)
// {

//     return p1*p2;
// }

// myFunc6();

// var emp1={
// empId:111,
// empName:"tara",
// display:function printtDetails()
// {


// }

// }


// function add2Num(p1,p2)
// {
// return p1+p2;
// }
// function sub2Num(p1,p2)
// {
// return p1+p2;
// }
// function myFunc9 (f1, s1,s2)
// {
// var result=f1(s1,s2);
//  console.log(result)
// }

// myFunc9(add2Num, 10,20);
// myFunc9(function  mul2Num(p1,p2){return p1*p2} ,10,20);



function func1()
{
console.log("Hello");
setInterval(()=>{ 
    console.log("Inside the interval");
},1000)
console.log("bye");
} func1();//Hello bye.... Inside the interval


//

// function func2(p1)
// {
//     setTimeout(()={
//         if(p1%2==0)
        
//         return ('${pl} is an even number')
//         else

//         return ('${pl} is an odd number');
        
//     },1000)
        
//         }
        
//         var result=func2(10); 
        
//         console.log("Result"+result); // ud


// function funt3()
// {

//     if(p1%2==0)

//     new Promise.resolve('${pl} is an even number')
//     else

//     new Promise.resolve('${pl} is an odd number')
        

// }

// var myResolvedPromise=  func3(10)

// myResolvedPromise
// .then(data =>{
//     console.log("data")
// })
// .catch(err=>{
//     console.log("err"+error)
// })

// //

// VarDate func1(0)
// {
// visualViewport.

// }