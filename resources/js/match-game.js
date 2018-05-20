var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
var cardArray=[];
for (var i = 1; i < 9; i++) {
cardArray.push(i);
cardArray.push(i);
}

var ranArray=[];
var x=0;
while (x<16){
  var ranNumber = Math.floor(Math.random() * cardArray.length);
  ranArray.push(cardArray[ranNumber]);
  cardArray.splice(ranNumber,1);
  console.log(ranArray);
  x++;
}

return ranArray;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

$game.empty();
for (var i = 1; i < cardValues.length; i++) {
cardValues[i];
}

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};



//playcode
var gameObject = {

}
