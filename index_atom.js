var a, b, c, d;
var answr="answr";
var a = "hello";
a="";
a.substring(0, a.length - 1);
function plus() {};

function minus() {};

function mult() /*გამრავლება*/ {};

function dev() /*გაყოფა*/ {

}

/*function equal() {
  for(var i=0;i<a.length;i++){
      if(0<=a[i]<=9) continue;
        else if(a[i]=='.'){}
        else if (a[i]=='±') {}
        else if (a[i]=='!') {}
      switch(a[i]){
        case ''




      }



  }
  document.getElementById("ans").innerHTML = answr;
  a="";
}*/
function c1() /*clear*/ {
   if(a.length > 1){
      a = a.substring(0, a.length - 1);
      document.getElementById("ans").innerHTML = a;
  }
  else{ document.getElementById("ans").innerHTML = "0";}
  console.log(a);

}

function ce() /*clear all*/ {
  a = "";
  document.getElementById("ans").innerHTML = "0";
}

function fact() {

}

function squrt() {

}
function equal() {
  document.getElementById("ans").innerHTML=answr;
}

function butt(val) {




  a+=val;
  document.getElementById("ans").innerHTML = a;
  console.log(a);
}
