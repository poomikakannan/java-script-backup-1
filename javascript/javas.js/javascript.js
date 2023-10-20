let age;
age=years(65);
console.log(age);

function years(a)
{
        return a*365;
}

let sum;
sum=lessthen(40,50);
console.log(sum);
function lessthen(x,y)
{
        return (x+y)<100 ? true:false;
}

let hour;
hour=seconds(10);
console.log(hour);
function seconds(a)
{
    return a*3600;
}

let angles;
angles=polygan(6);
console.log(angles);
function polygan(n)
{
        return (n-2)*180;
}

let text;
text=Something("Bob Jane");
console.log(text);
function Something(x)
{
        return"Something"+" "+x;
}
let num;
num=lessthan(0);
console.log(num);
function lessthan(x)
{
        return (x<=0) ? true:false;
}
let operator;
operator=and(false,true);
console.log(operator);
function and(x,y)
{
        return x&&y;
}

let sumOfLeg;
sumOfLeg=leg(5,7,8);
console.log(sumOfLeg);
function leg(a,b,c)
{
        return (a*2)+(b*4)+(c*4);
}
let value;
value=equality(1,"true");
console.log(value);
function equality(x,y)
{
        return x===y;
}

let fix;
fix=experience(4);
console.log(fix);
function experience(n)
{
        return n==7;
}

