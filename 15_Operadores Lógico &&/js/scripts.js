// Operadores lógicos
// Nas linguagens de programação existem operadores lógicos
// Estes operadores realizam comparações para que seja retornado um true ou false
// decidinfdo então o fluxo da aplicação
// utilizamos principalmente nas instruções de condição e repetição,
// em conjunto dos operadores de comparação

// Operador lógico &&
// O operador lógico && é conhecido também como AND
// Ele vai retornar true apenas se as duas expressões retornarem true
// Qualquer outro resultado o operador lógico and retornará false

var idade = 16;
var nome = 'Pedro';

if (nome == 'joão' && idade == 16) {
  console.log('O joão pode entrar na aula de esgrima');
}
else {
  console.log('Este não é joão');
}

if ((1 == 1 && 3 > 2) && true) {
  console.log('passou');
}