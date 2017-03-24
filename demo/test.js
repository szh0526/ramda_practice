/*

var words = _.curry(function(spliter,str) {
    return str.split(spliter);
});

var maps = _.curry(function map(f, xs) {
    return xs.map(f);
})

var mapwords = maps(words);
mapwords(['hhh','aaa','bbbb']);


var filterQs = _.curry(function(f,arr){
    return arr.filter(f);
})

var test1= filterQs(function(x){
    return match(/q/i, x)
})
test1(['hhq','bbb2q','ccc1'])
*/


/*var prop = _.curry(function(property, object){
  return object[property];
});*/

var CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
  ];

var test1= _.compose(_.prop('in_stock'),_.last);
console.log(test1(CARS));

var test2= _.compose(_.prop('name'),_.head);
console.log(test2(CARS));

var _average = function(xs) {
    return reduce(add, 0, xs) / xs.length; };
var _map = function(xs){
    return map(function(c) {
        return c.dollar_value;
    },xs);
}
var test3= _.compose(_average,_map);
console.log(test3(CARS));

var _underscore = replace(/\W+/g, '_');
var test4= _map(_.compose(_.toLowerCase,_underscore));
console.log(test4(['Hello World','AAAA BBBB'));

var available_cars = _.compose(_.filter,_.prop('in_stock'));
var map_cars = function(xs){
    return map(function(c){
        return c.dollar_value;
    });
};
var test5 = _.compose(_.join(', '),map_cars,available_cars);
console.log(test5(CARS));

var fastestCar = function(cars) {
  var sorted = _.sortBy(function(car){ return car.horsepower }, cars);
  var fastest = _.last(sorted);
  return fastest.name + ' is the fastest';
};

var sorted = function(xs){
    return _.sortBy(function(c){
        return c.horsepower;
    }, xs);
};

var fastest = _.compose(_.last,sorted);
var contact =  function(x){
    return x + ' is the fastest';
}
var contactStr = _.compose(contact,_.prop('name'));
var fastestCar = _.compose(contactStr,fastest);
