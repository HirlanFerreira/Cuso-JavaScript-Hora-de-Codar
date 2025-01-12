// Operadores condicionais
// São instruções que podem determinar um fluxo de uma aplicação
// amplamente utilizados, deixam os softwares dinâmicos
// Exemplos são: if, else if, else


// Condicional: if
// Executa um bloco de código se a instrução for verdadeira:
// se for falsa, segue o código
// Lembrando que: true e false são do tipo boolean;
var idade = 16;
var idadeMinima = 18;

console.log('antes do if');


if (idade > idadeMinima) {
  console.log('pode fazer a carteira de habilitação');
}


if (idade > 15) {
  console.log('precisa esperar');
}

console.log('Depois do if');