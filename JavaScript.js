// Variablen für die Fareben erstellen
let color_one, color_two, color_three, color_four, color_five, color_six
var chosen_square, winner_color, score = 0


// Funktion Zufällige RGB Werte generieren
function randomRGB() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var RGBColor = "rgb(" + x + ", " + y + ", " + z +")";  
  return RGBColor
}


// Die Funktion auf die verschiedenen Farb-Variablen übertragen 
function build () {
  color_one = randomRGB(); color_two = randomRGB(); color_three = randomRGB();
  color_four = randomRGB(); color_five = randomRGB(); color_six = randomRGB();
  getWinner()
}


// Eine Variable zum Gewinner erklären
function getWinner(){
  color_Array = [color_one, color_two, color_three, color_four, color_five, color_six]
  var num = Math.floor(Math.random() * 5)
  console.log ((num + 1))
  winner_color = color_Array[num];
  document.getElementById("Values").innerHTML = winner_color
  showColors()
}


// Variablen (Farben) in HTML übertragen
function showColors() {
  document.getElementById("one").style.backgroundColor = color_one;
  document.getElementById("two").style.backgroundColor = color_two;
  document.getElementById("three").style.backgroundColor = color_three;
  document.getElementById("four").style.backgroundColor = color_four;
  document.getElementById("five").style.backgroundColor = color_five;
  document.getElementById("six").style.backgroundColor = color_six;
}


// Game funktionen
function g1() {compare(winner_color, color_one)}
function g2() {compare(winner_color, color_two)}
function g3() {compare(winner_color, color_three)}
function g4() {compare(winner_color, color_four)}
function g5() {compare(winner_color, color_five)}
function g6() {compare(winner_color, color_six)}


// Funktion Vergleichen der beiden Farben
function compare(winner_color, chosen_square) {
  if (winner_color == chosen_square) {
    right()
  }
  else {
    wrong()
  }
}


// Funktion, was passiert wenn es die richtige Farbe ist
function right () {
  alert("SLAY")
  score = score + 1
  document.getElementById("ScoreDiv").innerHTML = ("SCORE: " + score)
  reload ()
}


// Funktion, was passiert wenn es die falsche Farbe ist
function wrong () {
  alert("Not-SLAY")
  score = 0
  document.getElementById("ScoreDiv").innerHTML = ("SCORE: " + score)
}


// Neu Laden der Farben usw. (Also reset und neue Runde)
function reload () {
  build ()
}

//Funktion Reset
function reset (){
  score = 0
  document.getElementById("ScoreDiv").innerHTML = ("SCORE: " + score)
  reload ()
}

// Ausführen (erstes mal)
build ()
console.log("Der Gewinnerwert ist: " + winner_color)
document.getElementById("ScoreDiv").innerHTML = ("SCORE: " + score)
