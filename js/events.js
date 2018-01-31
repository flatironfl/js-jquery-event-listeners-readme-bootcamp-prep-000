//define functions here - outside of document.ready; and call them inside

function getIt() {
  $('p').on('click', function () {window.alert("Hey!")});
}

//function frameIt() {
  //$('img .tasty').on('load', function () {$('img .tasty').style('border: red')};
//}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
});
