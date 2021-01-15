//базовий об"єкт
let User = function (name, f_name, l_name) {
  this.name = name;
  this.f_name = f_name;
  this.l_name = l_name;
}
 //ф-я привітання до об"єкта
User.prototype.SayHello = function () {
  console.log("Привіт, " + (this.name) + ", раді, що Ви з нами!");
}
 //ф-я прощання з об"єктом
User.prototype.SayBye = function () {
  console.log('Гравець вирішив забрати виграш.');
  console.log((this.name)+' '+(this.f_name)+', дякуємо за гру!');
}
 //створення нового об"єкта на основі базового
function Donator (l_name, name, f_name, sum) {
  User.call (this, l_name, name, f_name);
  this.sum = sum;
}

Donator.prototype = Object.create(User.prototype);
Donator.prototype.constructor = Donator;
  //перезапис функції
Donator.prototype.SayHello = function () {
  console.log(this.name +' '+ this.f_name + ' передає балгодійному фонду ' + sum + ' гривень');
}

let sum = 30;
//робота з об"єктами
document.forms.Winner.onsubmit = function () {
  let name = this.name.value;
  let f_name = this.f_name.value;
  let l_name = this.l_name.value;
  let act = this.Action.value;

  if (act == 'take') {
    let u1 = new User(name, f_name, l_name);
    u1.SayBye();
  }
  else if (act == 'donate') {
    let d1 = new Donator(l_name, name, f_name, sum);
    d1.SayHello();
  }
  else if (act == 'play') {
    let Win1 = new User(name, f_name, l_name);
    Win1.SayHello();
  }
 return false;
}