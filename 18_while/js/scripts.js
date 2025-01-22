/* Estruturas de repetição
Estas estruturas servem para repatir n vezes uma operação
Por exemplo: repetir uma determinada lógica em cada elemento de um array
As estruturas mais comuns são: while e for
obs: tomar cuiado com o loop inifinito*/

/*Estrutura While 
O while é a estrutura de repetição mais simples do Javascript
A idéia é que se repíta algo até atingir tal condição;
While-->Enquanto*/

var x = 0;

while (x < 5) {
  console.log("testando repetição" + x);

  //incrementador
  x++;
}

var arr = ['teste', 'testando', 'a', 'b'];
var y = 0;

while (y <= 3) {
  console.log(arr[y]);

  y++;
}

var palavra = "Hirlan";
var i = 0

while (i <= 5) {

  console.group(palavra[i]);

  i += 1;
}