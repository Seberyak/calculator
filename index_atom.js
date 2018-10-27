var request, c, d;
var answr="answr";
var request = "hello";
request="0";
request.substring(0, request.length - 1);
function plus() {};

function minus() {};

function mult() /*გამრავლება*/ {};

function dev() /*გაყოფა*/ {

}

/*function equal() {
  for(var i=0;i<request.length;i++){
      if(0<=request[i]<=9) continue;
        else if(request[i]=='.'){}
        else if (request[i]=='±') {}
        else if (request[i]=='!') {}
      switch(request[i]){
        case ''




      }



  }
  document.getElementById("ans").innerHTML = answr;
  request="";
}*/
function c1() /*clear*/ {
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
  request = "0";
  document.getElementById("ans").innerHTML = request;
  console.log(request);

}

function fact() {

}

function dot() {
  if(request.includes('.')==false ){
    request+=".";
    document.getElementById("ans").innerHTML = request;
    console.log(request);
}
}

function squrt() {
if(request=="0") request="√";
document.getElementById("ans").innerHTML = request;

}

function equal() {
  document.getElementById("ans").innerHTML=answr;
}

function butt(val) {
  var bool=false;
    for(var i=0;i<10;i++){
        if(val==i){bool=true;break;
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
