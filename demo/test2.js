var R = require('ramda'); 
var _join = R.join(' , ');
var log = console.log.bind(console);
var _trace = R.curry(function(tag, x){
  log(tag, x);
  return x;
});
var trace = _trace("logger");

var CARS = [
    {name: "Ferrari FF", horsepower: 160, dollar_value: 700000, in_stock: true, property: {a:{b:2}},delicious:[1,2,3]},
    {name: "Spyker C12 Zagato", horsepower: 550, dollar_value: 132000, in_stock: false, property: {a:{b:2}},delicious:[4,5,6]},
    {name: "Jaguar XKR-S", horsepower: 450, dollar_value: 132000, in_stock: false, property: {a:{b:2}},delicious:[7,8,9]},
    {name: "Audi R8", horsepower: 325, dollar_value: 114200, in_stock: false, property: {a:{b:2}},delicious:[0,1,2]},
    {name: "Aston Martin One-77", horsepower: 650, dollar_value: 1850000, in_stock: true, property: {a:{b:2}},delicious:[2,3,4]},
    {name: "Pagani Huayra", horsepower: 200, dollar_value: 1300000, in_stock: false, property: {a:{b:2}},delicious:[3,4,5]},
];

var _prop = R.prop(R.__);
var _isNumber = R.is(Number);
var _headLens = R.lensIndex(0);
var _xpath = R.lensPath(['property', 'a']);
var _xLens = R.lensProp('name');
var _setLens = R.lens(R.prop('name'), R.assoc('name'));
var _defaultProp = {
  name:'Alice',
  val: 100
};
var _condPower = R.cond([
    [R.gte(200),R.always('A')],
    [R.gte(300),R.always('C')],
    [R.gte(400),R.always('B')],
    [R.gte(500),R.always('D')],
    [R.gte(600),R.always('E')],
    [R.T,R.always('F')]
]);
var _groupByHorsepower = R.groupBy(R.pipe(_prop('horsepower'),_condPower));
var _allpassT = R.allPass([R.propEq('in_stock',false), R.propEq('dollar_value',1300000)]);
var _allpassF = R.allPass([R.propEq('in_stock',false), R.propEq('dollar_value',1400000)]);
var _anypass = R.anyPass([R.propEq('in_stock',false), R.propEq('dollar_value',1400000)]);
var t1 = R.pipe(R.head,R.has('name'));
var t2 = R.pipe(R.head,R.hasIn('name'));
var t3 = R.pipe(R.head,_prop('delicious'),R.init);
var t4 = R.pipe(R.head,_prop('delicious'),R.indexOf(3));
var t5 = R.pipe(R.head,_prop('delicious'),R.lastIndexOf(-1));
var t6 = R.reduce(R.max,2);
var t7 = R.reduce(R.min,4);
var t8 = R.reduce(R.maxBy(R.multiply),1);
var t9 = R.reduce(R.minBy(R.multiply),Infinity);
var tt1 = R.pipe(R.head,_prop('horsepower'),R.inc);
var tt2 = R.compose(R.is(Number),R.propOr(1,'power'));
var tt3 = R.find(R.propEq('dollar_value', 132000));  //find返回第一条符合条件的
var tt4 = R.findIndex(R.propEq('dollar_value', 132000));  //findIndex返回第一条符合条件的索引
var tt5 = R.findLast(R.propEq('in_stock', true));  //findLast返回最后一条符合条件的
var tt6 = R.compose(R.repeat(R.__,3),R.findLastIndex(R.propEq('in_stock', true)));//findLastIndex返回最后一条符合条件的索引
var tt7 = R.compose(R.toString,R.head);
var tt8 = R.compose(R.isEmpty,trace,R.identity,R.type,trace,R.empty,R.head);
var tt9 = R.pipe(R.last,R.view(_xLens)); //view 类似R.prop
var tt10 = R.pipe(R.last,R.valuesIn); //R.valuesIn 类似R.props
var tt11 = R.pipe(R.last,R.keysIn,R.contains('name'));
var _mapIndexed = R.addIndex(R.map);
log(_mapIndexed(function(val,idx){
  return idx + '-' + val;
},['a', 'b', 'c']));
var tt12 = R.pipe(R.head,_prop('delicious'),R.append(4),R.prepend(0),R.remove(1,2));
var tt13 = R.pipe(R.head,R.toPairs);
var tt14 = R.pipe(R.last,R.toPairsIn);
var tt15 = R.pipe(R.last,R.values);
var tt16 = R.pipe(R.last,R.set(_setLens, 'Ma zi da'),_prop('name'));
var tt17 = R.pipe(R.last,_prop('delicious'),trace,R.set(_headLens, 0));
var tt18 = R.pipe(R.over(_headLens,R.toLower),trace);
var tt19 = R.pipe(R.head,_prop('delicious'),trace,R.zip(R.__,['a', 'b', 'c']));
var tt20 = R.pipe(R.head,R.keys,trace,R.zipObj(R.__,['h1','h2','h3','h4','h5','h6']),R.assoc('wheels',4))
var tt21 = R.zipWith(R.add, R.__, [2, 3, 4]);
var tt22 = R.pipe(R.head,R.assoc('wheels',4),R.dissoc('property'));
var tt23 = R.pipe(R.head,R.assocPath(['property','a','b'],3),R.dissocPath(['property','a','b']));
var tt24 = R.pipe(R.indexBy(R.prop('name')),R.init);
var tt25 = R.groupWith(R.equals);
var tt26 = R.once(R.add(1));
var tt27 = R.all(R.lte(200),[200,300]);
var tt28 = R.compose(_allpassT,R.last);
var tt29 = R.compose(_allpassF,R.last);
var tt30 = R.compose(_anypass,R.last);
var tt31 = R.partial(function(){
  return R.values(arguments);
}, ['parm1','parm2']);
var tt32 = R.partialRight(function(){
  return R.values(arguments);
}, ['parm1','parm2']);


log(tt1(CARS));
log(tt2(CARS));
log(tt3(CARS));
log(tt4(CARS));
log(tt5(CARS));
log(tt6(CARS));
log(tt7(CARS));
log(tt8(CARS));
log(tt9(CARS));
log(tt10(CARS));
log(tt11(CARS));
log(tt12(CARS));
log(tt13(CARS));
log(tt14(CARS));
log(tt15(CARS));
log(tt16(CARS));
log(tt17(CARS));
log(tt18(tt15(CARS)));
log(tt19(CARS));
log(tt20(CARS));
log(tt21([1,2,3]));
log(tt22(CARS));
log(tt23(CARS));
log(tt24(CARS));
log(_groupByHorsepower(CARS))
log(tt25([0, 1, 1, 2, 3, 5, 8, 13, 21]))
log(tt26(10));
log(tt26(20));
log(tt27);
log(tt28(CARS));
log(tt29(CARS));
log(tt30(CARS));
log(tt31("parm3","parm4",['parm5']));
log(tt32("parm3","parm4",['parm5']));
log(R.inc(1));
log(t1(CARS));
log(t2(CARS));
log(t3(CARS));
log(R.is(Object, {}));
log(R.is(Number, false)); 
log(t4(CARS));
log(t5(CARS));
log(t6([1,2,3,4,5]));
log(t7([1,2,3,4,5]));
log(t8([3, -5, 4, 1, -2]));
log(t9([]));