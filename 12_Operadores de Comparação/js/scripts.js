// Operadores de Comparação

// São comummente utilizados para verificação nas estruturas de condição
// Temos os seguintes operadores: ==, !=, >, <, >=,<=
// Apartir de uma expressão de comparação podemos obter um true ou false
// O numero 0 em JS é considerado false e o numero 1 considerado positivo

var idade = 15;

if (idade >= 18) {
  console.log('Usuário pode fazer a carteira');
}


if (idade <= 17) {
  console.log('O usuário não pode fazer a carteira')
}

// Operador ==
var nome = "Pedro";

if (nome == "Hirlan") {
  console.log("o seu nome é Matheus");
}

// Operador !=
if (nome != "Matheus") {
  console.log('Seu nome não é Matheus');
}