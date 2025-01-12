// Condicional: else e else if
// Caso a instrução do if seja negativa, podemos adicionar els
// Que será a outra condicional a ser executada;
// podemos ent~~ao criar uma bifurcação no código
// Já o else if tem a possibilidade de fazer outra verificação e adicionar mais um bloco de código;
// else é inserido obrigatoriamente após o fechamento de chaves do if
// else if, é inserido obrigatoriamente inserido entre if e else

var nome = 'Pedro';

if (nome == 'Pedro') {
  console.log('o nome dele é Pedro');
} else if (nome == 'Matheus') {
  console.log('O nome é Matheus')
} else {
  console.log("ele possui outro nome!");
}

var idade = 18;

if (idade > 20) {
  console.log('Ele pode entrar na festa!');
} else if (idade >= 18) {
  console.log("Ele só pode entar com autorização dos pais")
}