//Блок розрахунку номерів, вказаних гравцем
let arrClient = [];
for (let i = 0; i < 5; i++) {
  let k = prompt("Введіть число від 0 до 10", 0);
  arrClient[i] = k;
}
  //виведення заданих гравцем номерів на сторінку
arrClient.forEach(function (item,i,arr1) { 
  document.querySelector('#out2').innerHTML = arrClient;
});
//перевірка, чи введені номери у вказаному діапазоні
  let clientEvery = arrClient.every(function (elem) {
   return elem < 10;
   })
   console.log('Якщо всі номери лотерейного квитка <10, то наступний запис true');
   console.log(clientEvery);

    let clientSome = arrClient.some(function (elem) {
    return elem < 0;
   })
  console.log('Якщо хоча б один номер лотерейного квитка зі знаком "-", то наступний запис true');
  console.log(clientSome);
//відбір всіх номерів, більше 5
 let clientFilter = arrClient.filter(function (elem) {
   return elem >= 5;
 });
console.log('ваші лотерейні номери в діапазоні від 5 до 10');
console.log(clientFilter);
  //множення номерів, вказаних гравцем, на 10
let clientMap = clientFilter.map(function (elem) {
  return elem = elem * 10;
});
console.log('ваші лотерейні номери в діапазоні від 5 до 10, помножені на 10');
console.log(clientMap);
  //визначення суми відібраних номерів
let clientSum = clientMap.reduce(function (sum,cur) {
  return sum + cur;
}, 0);
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
    //вибірка всіх елементів масиву більше 5
  let arrFilter = arr.filter(function (elem) {
    return elem >= 5;
  })
  console.log('Виграшні номери для діапазону від 5 до 10');
  console.log(arrFilter);
  document.querySelector('#out').innerHTML = arr;
    //множення відібраних елементів на 10
  let arrMap = arrFilter.map(function (elem, clientFilter) {
  return elem = elem * 10;
  });
  console.log('Виграшні номери для діапазону від 5 до 10, помножені на 10');
  console.log(arrMap);
    //сума всіх відібраних елементів, помножених на 10
  let arrSum = arrMap.reduce(function (sum,cur) {
  return sum + cur;
  }, 0);
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