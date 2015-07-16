'use strict';

var isAVowel = function(lttr){
  // your code goes here
  switch (lttr){
  case "a":
    return true;
  case "e":
    return true;
  case "i":
    return true;
  case "o":
    return true;
  case "u":
    return true;
  default:
    return false;
    }
};

// ###########################
// DO NOT EDIT BELOW THIS LINE
// ###########################

$(function() {
  $( "#target" ).submit(function( event ) {
    event.preventDefault();
    var input = $("#in").val();
    var result = isAVowel(input);
    $('#result').text(result);
  });
});
