/*------------------------------------------------------------------------------------
ESSE CONSOLE SE PERMISSÃO FOR DIFERENTE DE 1 , ELE RETORNA UNDEFINED , CASO CONTRARIO ELE RETORNA A ARRAY
--------------------------------------------------------------------------------------*/

const teste = [
  {
   id:1,
   nome:'teste',
    permissao:1
    
  }
]


console.log(teste.find(x => x.permissao === 1))
