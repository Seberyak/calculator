
var request, c, d;
var answr=new String("answr");

request="0";
var str= "1234567890()";
request.substring(0, request.length - 1);
<<<<<<< HEAD

=======
>>>>>>> 6ea15ca7bf7aec9942e3ab21956329cfc4abea4d

var audio = new Audio();
function playAudio() {
  audio.src = "sound.ogg";
  audio.autoplay = true;
}


<<<<<<< HEAD

=======
>>>>>>> 6ea15ca7bf7aec9942e3ab21956329cfc4abea4d
function c1() /*clear last element*/ {
  playAudio();
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

}

function Infinity_1() {
console.log("opened");
setTimeout(function() { window.open("https://youtu.be/5-xhpcgBMe4?t=51");}, 2000);

}


function fact() {
  playAudio();
  let a=eval(request);
  let buff=1;
  for(var i=a;i>0;i--)buff*=i;
  request=buff.toString();
  console.log(buff);
  document.getElementById('ans').innerHTML=request;
<<<<<<< HEAD
  if(request=="Infinity") Infinity_1() ;

=======
>>>>>>> 6ea15ca7bf7aec9942e3ab21956329cfc4abea4d
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
document.getElementById("ans").innerHTML=request;
}//vwert fesvs dasawyisshi an romelime operaciis shemdeg

function sqr(){
  playAudio();
  let a=eval(request);
  console.log(Math.pow(a,2));
  a=Math.pow(a,2);
  request=a.toString();
  document.getElementById("ans").innerHTML=request;
<<<<<<< HEAD
  if(request=="Infinity") Infinity_1() ;
=======
>>>>>>> 6ea15ca7bf7aec9942e3ab21956329cfc4abea4d
}

function equal() {
  playAudio();
  request=eval(request).toString();
  console.log(request);
  document.getElementById("ans").innerHTML=request;
<<<<<<< HEAD
  if(request=="Infinity") Infinity_1() ;
=======
>>>>>>> 6ea15ca7bf7aec9942e3ab21956329cfc4abea4d

}

function opposite() {
  playAudio();
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
  var bool=false;
    for(var i=0;i<str.length;i++){
        if(val==str[i]){bool=true;break;
        }
}
  if(request=="0" && bool==true) {
    request=val;
    document.getElementById("ans").innerHTML = request;
  console.log(request+" bool="+bool);}
  else {
    request+=val;
    document.getElementById("ans").innerHTML = request;
    console.log(request+" bool="+bool);
  }
}
