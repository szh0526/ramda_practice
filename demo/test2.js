var R = require('ramda'); 
var _join = R.join(' , ');
var log = console.log.bind(console);
var _trace = R.curry(function(tag, x){
  log(tag, x);
  return x;
});
var trace = _trace("logger");

var CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true, delicious:[1,2,3]},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false, delicious:[4,5,6]},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false, delicious:[7,8,9]},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false, delicious:[0,1,2]},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true, delicious:[2,3,4]},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false, delicious:[3,4,5]},
];
