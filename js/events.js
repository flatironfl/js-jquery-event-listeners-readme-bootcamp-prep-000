//define functions here - outside of document.ready; and call them inside

function getIt() {
  $('p').on('click' , function () {window.alert("Hey!")});
}

$(document).ready(function(){

// call functions here
  getIt();
});
