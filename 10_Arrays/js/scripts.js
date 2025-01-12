// quando houver [], estou trabalhando com arrays
// quando houver {}, estou trabalhando com objetos
// todo array começa com indeice "0"
var arr = [5, "hirlan", true, { teste: 1, teste: 2 }];

console.log(arr);

var arr2 = [2, 3, 4, 5];

console.log(arr2);

console.log(arr[1]);
console.log(arr[2]);
console.log(arr[0]);

console.log(arr2[1]);
console.log(arr2[3]);
console.log(arr2[0]);

arr[4] = 10;

console.log(arr);

arr2[4] = 15;

console.log(arr2);

arr[4] = 10;

arr[0] = "teste";

console.log(arr);