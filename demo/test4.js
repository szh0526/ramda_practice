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
    {name: "Ferrari FF", horsepower: 160, dollar_value: 700000,status: true, in_stock: true, property: {a:{b:2}},delicious:[1,2,3,5,7,6,-1,-2]},
    {name: "Spyker C12 Zagato", horsepower: 550, dollar_value: 132000,status: true, in_stock: false, property: {a:{b:3}},delicious:[4,5,6]},
    {name: "Jaguar XKR-S", horsepower: 450, dollar_value: 132000,status: false, in_stock: false, property: {a:{b:3}},delicious:[7,8,9]},
    {name: "Audi R8", horsepower: 325, dollar_value: 114200,status: true, in_stock: false, property: {a:{b:4}},delicious:[0,1,2]},
    {name: "Aston Martin One-77", horsepower: 650, dollar_value: 1850000,status: false, in_stock: true, property: {a:{}},delicious:[2,3,4]},
    {name: "Pagani Huayra", horsepower: 200, dollar_value: 1300000,status: true, in_stock: true, property: {a:{b:2}},delicious:[3,4,5]},
];

var _condPower = R.cond([
    [R.gte(200),R.always('A')],
    [R.gte(300),R.always('C')],
    [R.gte(400),R.always('B')],
    [R.gte(500),R.always('D')],
    [R.gte(600),R.always('E')],
    [R.T,R.always('F')]
]);
var l1 = R.take(4,CARS);
var l2 = R.takeLast(4,CARS);
var _head = R.head(CARS);
var _last = R.last(CARS);
var _pick = R.pick(['name','horsepower']);
var _pickAll = R.pickAll(['name','horsepower','solids']);
var _comparator = R.comparator((a, b) => a.horsepower < b.horsepower);
var _converge = R.converge(R.max, [R.add, R.subtract]);
var _intersection = R.pipe(R.intersection([1,2,3,4,5]),trace,R.product);
var _intersectionWith = R.intersectionWith(R.eqProps('in_stock'));
var _reject = R.reject(R.equals(1));
var _invert = R.pipe(R.take(2),R.map(R.invert));
var _invertObj = R.pipe(R.last,R.invertObj);
var _propSatisfies = R.pipe(R.last,R.propSatisfies(R.lte(R.__,200),'horsepower'));
var _add = function(x){return x};
var _transpose = R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]);
//当满足第一句时执行第二句,否则返回原值
var _truncate = R.when(
  R.propSatisfies(R.gt(R.__, 10), 'length'),
  R.pipe(R.take(10), R.append('…'), R.join(''))
);
var _reduceBy = R.reduceBy((acc, student) => acc.concat(student.name), [])(_condPower);
var t1 = R.compose(R.reverse,R.sort(_comparator));
var t2 = R.pipe(_converge,R.identical(3));
var t3 = R.pipe(_intersection,R.intersperse('0'));
var t4 = R.pipe(R.last,R.partition(R.contains('Pagani Huayra')));
var t5 = R.pipe(R.partial(function(){
  return R.values(arguments);
},[]),trace,R.project(['name', 'grade']));
var _takesThreeArgs = function(a, b, c) {
  return [a, b, c];
};
var t6 = R.binary(_takesThreeArgs);
var t7 = R.pipe(R.last,_pick,trace,_pickAll);
var t8 = R.reduceRight(R.flatten, []);
var _tranVals = function(val, key) {return val > 100};
var _pickBy = R.pipe(R.last,R.pickBy(_tranVals));
log(t1(CARS));
log(t2(1,2));
log(_intersection([7,6,5,4,3]));
log(_intersectionWith(l1, l2));
log(t3([7,6,5,4,3]));
log(_invert(CARS));
log(_invertObj(CARS));
log(t4(CARS));
log("=======================");
log(t5(_head,_last));
log(_propSatisfies(CARS));
log(t6(1,2,3,4));
log(_transpose);
log(_truncate('12345'));
log(_truncate('0123456789ABC'));
log(_reject([1, 2, 3, 4]));
log(t7(CARS));
log(_pickBy(CARS));
log(_reduceBy(CARS));
log(t8([['a', 1], ['b', 2], ['c', 3]]));