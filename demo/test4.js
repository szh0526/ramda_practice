var R = require('ramda'); 
var _join = R.join(' , ');
var log = console.log.bind(console);
var _trace = R.curry(function(tag, x){
  log(tag, x);
  return x;
});
var trace = _trace("logger");
var _prop = R.prop(R.__);
var CARS = [
    {name: "Ferrari FF", horsepower: 160, dollar_value: 700000, in_stock: true, property: {a:{b:2}},delicious:[1,2,3,5,7,6,-1,-2]},
    {name: "Spyker C12 Zagato", horsepower: 550, dollar_value: 132000, in_stock: false, property: {a:{b:3}},delicious:[4,5,6]},
    {name: "Jaguar XKR-S", horsepower: 450, dollar_value: 132000, in_stock: false, property: {a:{b:3}},delicious:[7,8,9]},
    {name: "Audi R8", horsepower: 325, dollar_value: 114200, in_stock: false, property: {a:{b:4}},delicious:[0,1,2]},
    {name: "Aston Martin One-77", horsepower: 650, dollar_value: 1850000, in_stock: true, property: {a:{}},delicious:[2,3,4]},
    {name: "Pagani Huayra", horsepower: 200, dollar_value: 1300000, in_stock: true, property: {a:{b:2}},delicious:[3,4,5]},
];