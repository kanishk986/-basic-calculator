function evaluate(s){


document.querySelector("#screen").innerHTML=eval(s);


}


var string;
 function disp(m){

if (m =="="){

evaluate(string);
}


else if (m =="c"){

document.querySelector("#screen").innerHTML=" "
// evaluate(" ");
}

else{

 string=document.querySelector("#screen").innerHTML+=m;
 // string+=c;

}


}








var z=document.querySelector("#zero")


z.addEventListener("click",function(){

   disp("0");


})




var o=document.querySelector("#one")

o.addEventListener("click",function(){

   disp("1");


})




var t=document.querySelector("#two")


t.addEventListener("click",function(){

   disp("2");


})




var th=document.querySelector("#three")


th.addEventListener("click",function(){

   disp("3");


})




var f=document.querySelector("#four")


f.addEventListener("click",function(){

   disp("4");


})




var fi=document.querySelector("#five")


fi.addEventListener("click",function(){

   disp("5");


})




var s=document.querySelector("#six")


s.addEventListener("click",function(){

   disp("6");


})




var se=document.querySelector("#seven")


se.addEventListener("click",function(){

   disp("7");


})


var e=document.querySelector("#eight")


e.addEventListener("click",function(){

   disp("8");


})


var n=document.querySelector("#nine")


n.addEventListener("click",function(){

   disp("9");


})




var add=document.querySelector("#add")


add.addEventListener("click",function(){

   disp('+');


})


var sub=document.querySelector("#sub")


sub.addEventListener("click",function(){

   disp('-');


})




var mul =document.querySelector("#mul");


mul.addEventListener("click",function(){

   disp('*');


})



var divide=document.querySelector("#devide")


devide.addEventListener("click",function(){

   disp('/');


})


var equal=document.querySelector("#equal")


equal.addEventListener("click",function(){

   disp('=');


})



var clear=document.querySelector("#clear")


clear.addEventListener("click",function(){

   disp('c');


})