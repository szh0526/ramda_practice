var R = require('ramda'); 
var _join = R.join(' , ');
var log = console.log.bind(console);
var _trace = R.curry(function(tag, x){
  log(tag, x);
  return x;
});
var trace = _trace("logger");


var _words = R.split(R.__);
var _maps = R.map(R.split(','))
var _filterQs = R.filter(R.pipe(R.match(new RegExp("^a")),function(x){    
    return R.isArrayLike(x) && !R.isEmpty(x);
}));
var _slice = R.slice(1, 3);
var _take = R.slice(0,R.__);
var _len = R.head(_take(1)(['e ', 'd', 'g', 'f']));
 
log(_words('.')('a.b.c'));
log(_maps(['b,c,d','e,f,g']));
log(_filterQs(['aab','na','na','123']));
log(R.sum(_slice(['1', '2', '3', '4'])))
log(R.pipe(R.trim,R.length)(_len))
log(R.gte(1,2))
log(R.gt(1,2))
log(R.lte(1,2))
log(R.lt(1,2))

/*
step1:10 + 10 = 20; 
step2:20-20 = 0 ; 
step3:0 + 30 =30;
x:是每次计算的结果
y:[10,-20,30]
*/
var _max = R.reduce(function(x,y){
    //log(R.gte(x,y));
    return R.ifElse(R.gte(x),R.always(x),R.always(y))(y);
}, 10);
log(_max([10,-20,30]))

var CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true, delicious:[1,2,3]},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false, delicious:[4,5,6]},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false, delicious:[7,8,9]},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false, delicious:[0,1,2]},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true, delicious:[2,3,4]},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false, delicious:[3,4,5]},
];

var _default = R.defaultTo(11);//常量相当于const
var _average = R.reduce(R.add,_default(22));
var _val = R.prop(R.__);
var _map = R.map(_val('dollar_value'));
var _equal = R.equals(R.__,R.F);
var _props = R.curry(function(x){
    return R.props(R.keys(x),x);
})
var _format = R.map(R.compose(R.divide(R.__, 10000),_val('dollar_value')));
var _filterinstock = R.filter(_val('in_stock'))
var _sortedby = R.sortBy(R.prop('horsepower'));
var test1= R.compose(_val('in_stock'),R.last);
var test2= R.compose(_val('name'),R.head);
var test3= R.compose(_average,_map);
var test4= R.compose(R.propEq('horsepower',700),R.last)
var test5= R.compose(R.propIs(Number, 'horsepower'),R.head);
var test6= R.compose(R.props(['horsepower','dollar_value']),R.last);
var test7= R.compose(_props,R.last);
var test8= R.pipe(R.map(R.compose(R.toLower,R.replace(/\W+/g, '_'))),trace,R.splitAt(1),R.tail,R.head,R.take(3),R.drop(1),R.takeLast(1));
var test9 = R.compose(_join,_format,_filterinstock);
var test10 = R.pipe(_sortedby,R.last,_val('name'),R.concat(R.__,' is the fastest'),R.toUpper,trace,R.split(' '),R.head,R.test(new RegExp("^A")),_equal);
var test11= R.pipe(R.head,_val('delicious'),R.forEach(R.dec),trace);
var test12 = R.dropLast(1,R.difference([7,12,13],[33,44,7]));
log(test1(CARS));
log(test2(CARS));
log(test3(CARS));
log(test4(CARS));
log(test5(CARS));
log(test6(CARS));
log(test7(CARS));
log(test8(['Hello 1','Hello 2','Hello 3','Hello 4','Hello 5']));
log(test9(CARS));
log(test10(CARS));
log(test11(CARS));
log(test12);


var users = [ 
    { 'user': 'bar', 'age': 36, 'status':3 }, 
    { 'user': 'fre', 'age': 40, 'status':1 }, 
    { 'user': 'peb', 'age': 18, 'status':2 } 
]; 
var _sub = R.subtract(new Date().getFullYear())
var _birth = R.map(_sub);
var _sort= R.pipe(R.prop,R.sortBy);
var _age = R.pluck('age'); 
var joinage = R.compose(_join, _age); 
var joinbrith = R.pipe(_age,_birth,_join);
var status = R.compose(R.identity,_sort('user')); 
var older = R.compose(R.head, R.reverse, _sort('age')); 
var youngestUser = R.compose(R.head, _sort('age'));

log(joinage(users));
log(joinbrith(users));
log(status(users));
log(older(users));