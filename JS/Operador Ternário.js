
/*------------------------------------------------------------------------------------
Geralmento quando precisa atribuir um valor a uma variavel, é um IFELSE abreviado.
--------------------------------------------------------------------------------------*/


var idade = 20;
var naoPossuiDiabetes = false;
var podeBeber;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber)