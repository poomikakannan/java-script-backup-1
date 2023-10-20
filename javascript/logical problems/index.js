// ------------------1-------------------
// for(i=0;i<=100;i++)
// {
//     if(i%2 == 0)
//     {
//         console.log(i)
//     }
// }
// ---------------2-------------------
// let arr = multiply (12,10)
// function multiply(x,y)
// {
//     var res =[0]
//     for(i=0;i<y;i++)
//     {
//         res [i]=x*i
//     }
//     console.log(res) 
// }
// ---------------------3-----------------
// let div;
// div=division(6.4);
// console.log(div);
// function division(a)
// {
//         return a/1.6;
// }
// -----------------------4-------------------
// let arr = [1,2,5,6,7,-3]
// count = 0
// for(i=0;i<arr.length;i++)
// {
//         count = count+arr[i]
// }
//         console.log(count)
// -------------------------5---------------------
// let arr = [1,2,3,4,5,6,7]
// let value =[]
// for(i=arr.length-1;i>=0;i--)
// {
//         value +=" "+arr[i]
// }
// console.log(value)
// -------------------------6---------------------
// let arr = [98,56,4,35,6,]
// for(i=0;i<arr.length;i++)
// {
//         for(j=i+1;j<arr.length;j++)
//         {
//                 if(arr[i]>arr[j])
//                 {
//                         temp=arr[i]
//                         arr[i]=arr[j]
//                         arr[j]=temp

//                 }
//         }
//         console.log(arr)
// }
// ---------------------------7--------------------
//  let arr = [1,2,3,4,5,6,7,-1,-4,-8]
// let value =[]
// for(i=0;i<arr.length;i++)
// {
//         if(arr[i]<0)
//         {
//                 value+=a
//         }
// }
// console.log(value)
// ---------------------------8----------------------


// --------------------------9-------------------
// let a=16
// if(a%10==0)
// {
//         console.log("true")
// }
// else
// {
//         console.log("false")
// }
// ---------------------10------------------
// let arr = "challenge"
// let count = 0
// for(i=0;i<arr.length;i++)
// {
//     if(!(arr[i]=='a'||arr[i]=='e'||arr[i]=='i'||arr[i]=='o'||arr[i]=='u'))
//     {
//         count=count+1
//     }
// }
// console.log(count)
// --------------------------------11----------------------
// let arr = [1,2,3,4,5,]
// let a=[]
// let b=arr.length-1
// let j=0
// for(let i =b;i>=0;i--)
// {
//     a[j]=arr[i]
//     j++
// }
// console.log(a)   

// ----------------------12-----------------------
let n = 5

let str = ""

for(let i=1;i<=n;i++)
{
    for(let j=n;j>i;j--){
        str +=" "
    }
    for(let k=0;k<i*2-1;k++){
        str +="*"
    }
    str +="\n"
}
console.log(str)

// -------------------------13-------------------------









