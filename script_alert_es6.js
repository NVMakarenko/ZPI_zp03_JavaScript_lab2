//Блок розрахунку номерів, вказаних гравцем
let arrClient = [];
for (let i = 0; i < 5; i++) {
  let k = prompt("Введіть число від 0 до 10", 0);
  arrClient[i] = k;
}

arrClient.forEach( () => document.querySelector('#out2').innerHTML = arrClient);

let clientEvery = arrClient.every(elem => elem < 10);
console.log('Якщо всі номери лотерейного квитка <10, то наступний запис true');
console.log(clientEvery);

let clientSome = arrClient.some(elem => elem < 0);
console.log('Якщо хоча б один номер лотерейного квитка зі знаком "-", то наступний запис true');
console.log(clientSome);

let clientFilter = arrClient.filter(elem => elem >= 5);

console.log('ваші лотерейні номери в діапазоні від 5 до 10');
console.log(clientFilter);

let clientMap = clientFilter.map(elem => elem = elem * 10);
console.log('ваші лотерейні номери в діапазоні від 5 до 10, помножені на 10');
console.log(clientMap);

let clientSum = clientMap.reduce((sum,cur) => sum + cur, 0);
console.log('Сума всіх номерів, заданих гравцем, після фільтрації');
console.log(clientSum);

//Блок розрахунку виграшних номерів
document.querySelector('button').onclick = function () {
  let arr = [];
  let min = 0;
  let max = 9; 
  for (let i = 0; i < 5; i++){
  arr.push(randomInteger(min, max));
}
  
  let arrFilter = arr.filter(elem => elem >= 5);

  console.log('Виграшні номери для діапазону від 5 до 10');
  console.log(arrFilter);
  document.querySelector('#out').innerHTML = arr;

  let arrMap = arrFilter.map((elem, clientFilter) => elem = elem * 10);
  console.log('Виграшні номери для діапазону від 5 до 10, помножені на 10');
  console.log(arrMap);

  let arrSum = arrMap.reduce((sum,cur) => sum + cur , 0);
  console.log('Сума виграшних номерів після фільтрації');
  console.log(arrSum);
  console.log('Загальний виграш складає модуль від різниці виграшних номерів та номерів, вказаних гравцем, після обрахунків');
  
  document.querySelector('#win').innerHTML = Math.abs(arrSum - clientSum);
  return arr;
}

function randomInteger(min, max) {
  // випадкове число від min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}