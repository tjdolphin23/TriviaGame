$(document).ready(function() {

//create countdown clock
 var number = 33;
  var intervalId;

    function run() {
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
      number--;
      $("#start").html("<h2>Timer: " + number + "</h2>");

      if (number === 0) {
        stop();
        alert("Time Up!");
      }
    }
    function stop() {
      clearInterval(intervalId);
    }
    run();

var score = 0;
//log if right or wrong answer clicked
$('#complete').on('click', function() {
    $('#complete').html("<h1>You got " + score + " right!<h1>");
      stop();

      function questioncheckOne(){
        document.getElementById('radio-3').checked = true;
        if (true) {
            score++;
        } else {
        
        }}

        function questioncheckTwo(){
        document.getElementById("radio-5").checked = true;
        if (true) {
            score++;
        } else {
          
        }}

        function questioncheckThree(){
        document.getElementById("radio-12").checked = true;
        if (true) {
            score++;
        } else {
      
        }}

        function questioncheckFour(){
        document.getElementById("radio-13").checked = true;
        if (true) {
            score++;
        } else {
          
        }}

        function questioncheckFive(){
        document.getElementById("radio-19").checked = true;
        if (true) {
            score++;
        } else {
         
        }}

        function questioncheckSix(){
        document.getElementById("radio-22").checked = true;
        if (true) {
            score++;
        } else {
         
        }}

        function questioncheckSeven(){
        document.getElementById("radio-26").checked = true;
        if (true) {
            score++;
        } else {
        
        }}

        function questioncheckEight(){
        document.getElementById("radio-29").checked = true;
        if (true) {
            score++;
        } else {
        
        }}

        function questioncheckNine(){
        document.getElementById("radio-36").checked = true;
        if (true) {
            score++;
        } else {
         
        }}
        questioncheckOne();
        questioncheckTwo();
        questioncheckThree();
        questioncheckFour();
        questioncheckFive();
        questioncheckSix();
        questioncheckSeven();
        questioncheckEight();
        questioncheckNine();
});
});







