function myfunction(){
    var no1,no2,sum;
    no1= parseInt(document.getElementById("first1").value);
    no2= parseInt(document.getElementById("first2").value);
    sum = no1+no2;
    document.getElementById("answer").value=sum;
}
function sub(){
    var no1,no2,sum;
    no1= parseInt(document.getElementById("first1").value);
    no2= parseInt(document.getElementById("first2").value);
    sum = no1-no2;
    document.getElementById("result").value=sum;
}
function multiple(){
    var no1,no2,sum;
    no1= parseInt(document.getElementById("first1").value);
    no2= parseInt(document.getElementById("first2").value);
    sum = no1*no2;
    document.getElementById("ans").value=sum;
}
function divition(){
    var no1,no2,sum;
    no1= parseInt(document.getElementById("first1").value);
    no2= parseInt(document.getElementById("first2").value);
    sum = no1/no2;
    document.getElementById("res").value=sum;
}