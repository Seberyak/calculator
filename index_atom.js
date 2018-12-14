
var request, c, d;
var answr=new String("answr");
var bool_last=false;
request="0";
var str= "1234567890()";
var smbl="+-*/";
request.substring(0, request.length - 1);

var audio = new Audio();
function playAudio() {
  audio.src = "sound.ogg";
  audio.autoplay = true;
}

function px_regulation(){
if(request.length>13 && request.length<20)	{
console.log("regulated");
document.getElementById("ans").style.fontSize="25px";}

else if(request.length>20) {
console.log("regulated");
document.getElementById("ans").style.fontSize="20px";}


else if(request.length<13) {
console.log("regulated");
document.getElementById("ans").style.fontSize="35px";}
document.getElementById("ans").innerHTML=request;
} //shriftis regulireba


function c1() /*clear last element*/ {
  playAudio();
  px_regulation();
   if(request.length > 1){
      request = request.substring(0, request.length - 1);
      document.getElementById("ans").innerHTML = request;
  }
  else{
    request="0";
    document.getElementById("ans").innerHTML = "0";
    }
    console.log(request);

}

function ce() /*clear all*/ {
  playAudio();

  request = "0";
  document.getElementById("ans").innerHTML = request;
  console.log(request);
  px_regulation();

}

function Infinity_1() {
console.log("opened");
setTimeout(function() { window.open("https://youtu.be/5-xhpcgBMe4?t=51");}, 2000);

}


function fact() {

  playAudio();
  if(request.length>5) request="Infinity";
  else{
  let a=eval(request);
  let buff=1;
  for(var i=a;i>0;i--)buff*=i;
  request=buff.toString();
  px_regulation();
}
  console.log(request);
  document.getElementById('ans').innerHTML=request;
  if(request=="Infinity") Infinity_1() ;

}

function dot() {
  playAudio();
  if(request.includes('.')==false ){
    request+=".";
    document.getElementById("ans").innerHTML = request;
    console.log(request);
}
}

function squrt() {
playAudio();
let a;
a=eval(request);
a=Math.sqrt(a);
console.log(a);
request=a.toString();
px_regulation();
//document.getElementById("ans").innerHTML=request;
}//vwert fesvs dasawyisshi an romelime operaciis shemdeg

function sqr(){

  playAudio();
   let a=eval(request);
  console.log(Math.pow(a,2));
  a=Math.pow(a,2);
  request=a.toString();
  //document.getElementById("ans").innerHTML=request;
  if(request=="Infinity") Infinity_1() ;
  px_regulation();

}

function equal() {
  playAudio();
  request=eval(request).toString();
  console.log(request);
  px_regulation();
  if(request=="Infinity") Infinity_1() ;

}

function opposite() {
  playAudio();
  px_regulation();
  if(request[0]!="-"){
  var st="-";
  request=st.concat(request);
  document.getElementById("ans").innerHTML = request;
  console.log(request );}//tu ricxvi dadebitia
  else{ request=request.slice(1);
        document.getElementById("ans").innerHTML = request;
          console.log(request ); }}
// tu ricxvi uaryofitia
//es metodi gamoviyenot mxolod pirveli ricxvistvis

function butt(val) {
  playAudio();
  px_regulation();
  var bool=false;


    for(var i=0;i<str.length;i++){
        if(val==str[i]){bool=true;break;
        }
}
  if(request=="0" && bool==true) {
    request=val;
    document.getElementById("ans").innerHTML = request;
  console.log(request+" bool="+bool);}
  else if(request!="0" && bool==true) {
    request+=val;
    document.getElementById("ans").innerHTML = request;
    console.log(request+" bool="+bool);
  }
  else if( bool_last==false){
    request=request.substr(0, (request.length-1));
    request+=val;
    document.getElementById("ans").innerHTML = request;
    console.log(request+" bool="+bool);
}
    else{
    request+=val;
    document.getElementById("ans").innerHTML = request;
    console.log(request+" bool="+bool);}
    if (bool==true) bool_last=true;
    else bool_last=false;

}
