var type1 = document.getElementById("type1");
var type2 = document.getElementById("type2");
var type3 = document.getElementById("type3");
var onew = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");

//script for the all images
var slideIndex = 2;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 3}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
//////////////////////////////////////////////////////////
//script for type 2
var slideIndex = 1;
showD2(slideIndex);

function plusD2(n) {
    showD2(slideIndex += n);
  }
  
  function showD2(n) {
    var i;
    var x = document.getElementsByClassName("mySlides2");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }
  ////////////////////////////////////////////////////////////
  //script for type 3
    var slideIndex = 1;
    showD3(slideIndex);

  function plusD3(n) {
    showD3(slideIndex += n);
  }
  
  function showD3(n) {
    var i;
    var x = document.getElementsByClassName("mySlides3");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }
  /////////////////////////////////////////////
//function for onload page to hide the sliders
sliders();
function sliders(){
    type2.style.visibility = 'hidden';
    type3.style.visibility = 'hidden';
    type1.style.visibility= 'visible';
}
  //on click the first button
onew.addEventListener("click", sliders());

//on click the second button 
two.addEventListener("click", function(){
    type1.style.visibility = 'hidden';
    type3.style.visibility = 'hidden';
    type2.style.visibility = 'visible'
});

//on click the thrid button 
 
three.addEventListener("click", function(){
    type1.style.visibility = 'hidden';
    type3.style.visibility = 'visible';
    type2.style.visibility = 'hidden'
});