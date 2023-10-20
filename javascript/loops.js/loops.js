// ------------------ex-1---------------

// var arr = [13,23,12,45,22,48,66,100]
// var i=0
// for(i=0;i<arr.length;i++)
// {
//     if(arr[i]%2==0)

//     console.log(arr[i])
// } 

// var arr = [13,23,12,45,22,48,66,100]
// let i =0
// while (i<arr.length) 
// {
    // if(arr[i]%2==0)
    // console.log(arr[i])
    // i++;    
// }


// var arr = [13,23,12,45,22,48,66,100]
// let i=0
// do{
//         if(arr[i]%2==0)
//         console.log(arr[i])
//         i++;    
// }while(i<arr.length)

// ------------------ex-2-----------------

// arr = [23,56,4,78,5,56,45,56,210,56];
// let i=0
// for(i=0;i<arr.length;i++)
// {
//     if(arr[i]%8==0)
//     continue
//     console.log(arr[i])
// }


// arr =  [23,56,4,78,5,56,45,56,210,56];
// let i =0
// while (i<arr.length) 
// {
//     if(arr[i]!=56)
//         continue

//     console.log(arr[i])
//     i++;    
// }


// var  arr =  [23,56,4,78,5,56,45,56,210,56];
// let i=0
// do{
//         if(arr[i]!=56)
//             continue

//         console.log(arr[i])
//         i++;    
// }while(i<arr.length)

// --------------------ex-3------------------
// let a=num(4,2) 
// function num (b,c){
// pow=1
// for(i=0;i<c;i++)
//     pow=pow*b
//     {
//     return(pow)
//     }
// }
// console.log(a)

// let a=num(4,2)
// function num(b,c){
//     pow=1
//     let i =0
//     while( i<c)
//     {
//         pow=(pow*b)
//         i++;
//     }
//     return(pow)
// }
// console.log(a)


// let a =num(4,2)
// function num(b,c){
//     pow=1
//     let i = 0
//         do{
//                 pow=(pow*b)
//                 i++;
//         }while( i<c)
//     return(pow)
// }
// console.log(a)

//------------------ex-4------------
// let n=8

// for(var i=1;i<=n;i++){
// var str=""

//     for(var j=1;j<=i;j++){
//      str+=j+" "
//     }
//     console.log(str)
// }


// let n=7
// let i=0
// while(i<=n){
//         i++;
//         var str=""
//         for(var j=1;j<=i;j++)
//         {
//         str+=j+" "
//         }
//          console.log(str)
            
// }


// let n=7
// let i=0
// do{
//     i++;
//          var str=""
//         for(var j=1;j<=i;j++)
//         {
//          str+=j+" "
//         }
//             console.log(str)     
// } while(i<=n)



// -----------------ex-5-------------

let n =prompt("enter the value")
let count=0;
for(i=0;i<n;i++){
    n=n/10;
    count++
}
    console.log(count)
















// let i=0;
// while(i>1)
// {
//     console.log(i)
//     i++;
// }
// console.log(i)

// let i=0;
// while(i<=10){
//     console.log(i)
//     i++;
// }
// console.log(i)

// let i =0;
// do{
//     console.log(i)
//     i++;
// }while(i>1)


// console.log(i)