
var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];
for(var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if(videoGames[item] === 'PS4') {
    break;
  }


var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];
frutas.forEach(function(fruta, index, array) {
  frutas.pop(); /*Remover um item*/
  console.log(fruta, index, frutas, array)
});



//Pegar o ultimo item do array
var ultimaFruta = frutas[frutas.length - 1];