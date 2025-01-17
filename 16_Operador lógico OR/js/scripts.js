// OPERADOR LÓGICO || OR
// O operador lógico || é conhecido também como OR
// Ele retorna true caso uma das oprações retorna vardeiro
// O OR retorna false apenas se as duas expressões são falsas


var idade = 13;
var nome = 'João';

if (nome == 'João' || idade > 14) {
  console.log('Pode entrar na aula de esgrima');
} else {
  console.log('não pode entrar')
}

if (nome == 'Pedro' && (30 > 20 || 10 == 10)) {
  console.log('testando');
} else {
  console.log('não encontrado');
}