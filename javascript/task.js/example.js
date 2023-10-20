// ------------------------1----------------------

// arr = [1,2,3,4,5,"13","4","645"]
//  let num = 0

// for(i=0;i<arr.length;i++)
// {
//     if(typeof(arr[i]) == "number")
//     num += arr[i]
// }
// console.log(num)
//-------------------------2--------------------

// let arr = ([50,80,70,34,56])
// for(i=0;i<arr.length;i++)
// {
//     for(j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]>arr[j])
//         {
//             let x =arr[i]
//             arr[i]=arr[j]
//             arr[j]= x     
//         }
//     }
// }
// console.log (arr)
// second = arr.length-2
// console.log(arr[second])
//-------------------------3----------------------


// let arr = [5,4,3,2,1]
// {

//     for(var i = 0;i<arr.length;i++)
//     {
//         for(var j = 0;j<i;j++)
//         {
//             if(arr[i]<arr[j])
//             {
//                 let x = arr [i]
//                 arr[i] = arr[j]
//                 arr[j] = x
     
//             }
//             console.log(arr)
//         }
//     }
//     console.log(arr)
// }
// let arr =[1,2,3,4,5]
// {

//     for(var i = 0;i<arr.length;i++)
//     {
//         for(var j = 0;j<i;j++)
//         {
//             if(arr[i]>arr[j])
//             {
//                 let x = arr [i]
//                 arr[i] = arr[j]
//                 arr[j] = x
     
//             }
//             console.log(arr)
//         }
//     }
//     console.log(arr)
// }
// ----------------------------6-------------------------
// for(i=1;i<=20;i++){
    // if(i%3==0)
    // {
    //     console.log("Fizz")
    // }
    //  else if(i%3==0 && i%5==0)
    // {
    //     console.log("FizzBuzz")
    // }
    // else if(i%5==0)
    // {
    //     console.log("Buzz")
    // }
    // else{
    //     console.log(i)
    // }

    // let result = (i%3 == 0 && i%5 == 0) ? "FizBuzz" : ((i%3 == 0) ? "Fizz" : (i%5 == 0) ? "Buzz" : i);

    // console.log(result);
// }
// -------------------------------7---------------------------

// let arr = multiply(12,10)
// function multiply(x,y)
// {
//     var arr=[]
//     for(i=0;i<y;i++)
//     {
//         arr[i]=x*[i+1]
//     }
//     console.log(arr)
// }

// ---------------------------------8-----------------------------

// let arr = [1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15]
// count=0
// sum=0
// for(i=0;i<arr.length;i++){
//     if(arr[i]>0)
//     {
//         count++
//     }
//     else
//     {
//         sum = sum+arr[i]
//     }
// }
// console.log(count+","+sum)

// ------------------------------------9-------------------------------

// let arr = missing( [1,2,3,4,6,7,8,9,10])
// function missing(x){
// for(i=0;i<x.length;i++)
// {
//     var temp = i+1
//     if(temp)
//     {
//         console.log(temp)
//     }
// }                                                                                                   
// }
// --------------------------------palindrome number---------------------------------------
// let result =chk(1221)
// function chk(x)
// {
//     if(x<=0||(x%10===0 && x!==0))
//     {
//         return false;
//     }
//         let a = 0;
//         let b = x;
//     while(x>0)
//     {
//         let d = x%10
//         a = a*10+d
//         x = Math.floor(x/10)
//     }
//       return  a === b
// }

// console.log(result)
// ----------------------------prime number----------------------------------
// let a = 23
// let b = 1
// for(let i=2;i<a;i++)
// {
//     if(a%i==0)
//     {
//         b=0
//     }
// }
// if(b == 1)
// {
//     console.log("prime")
// }
// else
// {
//     console.log("not prime")
// }
// ---------------------------------armstrong number--------------------------

// let n =153
// let b =  n.length
// let s = 0
// let temp = n
// while(temp>0)
// {
//     let r= n%10;
//     s += r**b
//     temp = parseInt(temp/10)

// }
// if(s==temp)
// {
//     console.log("armstrong number")
// }
// else 
// {
//     console.log("not armstrong number")
// }


// ----------------------------------diamond pattern--------------------
