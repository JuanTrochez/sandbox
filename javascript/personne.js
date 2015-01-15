console.log("hello world !");

function Personne(){

	this.walk = function(metres, direction) {
		console.log("Je marche " + metres + " metres puis je tourne a " + direction);
		return 3;
	}
}

var personne = new Personne();
console.log(personne.walk(100, 'gauche'));

var i = 4;


for (var i = 0; i < 10; i++) {
	setTimeout((function() {
			var j = i;
			return function() {
				console.log(j);
			}
		})(i), 1000);
}