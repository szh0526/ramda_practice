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
var _getMetrics = R.applySpec({per: _prop('name'),nested: { mul: R.propEq("pass",123)}});
var _where = R.where({
  a: R.equals('foo'),
  b: R.gt(R.__, 10)
});
/**
 * 查询条件
 */
var _whereEq = R.whereEq({horsepower: 200, dollar_value: 1300000});
var _clone = R.clone(R.__);
var _takesTwoArgs = function(a, b) {
  return [a, b];
};
var _nthArg = R.nthArg(R.__);  
var _head = R.head(CARS);
var _last = R.last(CARS);
var _transducer = R.compose(R.map(R.add(1)), R.take(2)); // 取前2个 在把每项加1
var _mapNames = R.map(R.evolve({
  name: R.toUpper
})); 
var _union = R.union([1, 2, 3], [2, 3, 4]);
var _unfold = R.unfold(function(n){
  return n > 50 ? false : [-n, n + 10];
}, 10);
var _clamp = R.clamp(1, 10);
var _pipeArgs = R.pipe(R.nAry(1,_takesTwoArgs),R.nth(0),R.negate);
var _count = 0;
var _factorial = R.memoize(function(x){
  _count += 1;
  return R.add(10,x); 
});
var _concatDelicious = function(k, l, r){
    return k == 'delicious' ? R.concat(l, r) : r
};
var _differenceWith = R.differenceWith(R.eqProps('a'));
var _symmetricDifference = R.symmetricDifference([1,2,3,4], [7,6,5,4,3]);
var _symmetricDifferenceWith = R.symmetricDifferenceWith(R.eqProps('a'));
var _dropLastWhile = R.dropLastWhile(R.lte(R.__,3));
var _dropRepeatsWith = R.dropRepeatsWith(R.eqBy(Math.abs));
var _dropWhile = R.dropWhile(R.lte(R.__,3));
var _takeLastWhile = R.takeLastWhile(R.pipe(R.equals(1),R.not));
var _takeWhile = R.takeWhile(R.pipe(R.equals(4),R.not));
var _appender = function(a, b) {
  return [a + b, a + b];
};
var _prependKeyAndDouble = function(num, key, obj) {
  return key + (num * 2);
};
var _mapObjIndexed = R.mapObjIndexed(_prependKeyAndDouble);
var _mapAccum = R.mapAccum(_appender, 0);
var _mapAccumRight = R.mapAccumRight(_appender, 0);
var t1 = R.pipe(R.head,_prop('delicious'),R.adjust(R.add(10),2));
var t2 = R.pipe(R.head,_prop('delicious'),R.ap([R.multiply(2), R.add(3)]),trace,R.aperture(2));
var t3 = R.apply(R.add, [1,2]);
var t4 = R.unapply(JSON.stringify)(1, 2, 3);
var t5 = R.pipe(R.last,R.path(['property','a']));
var t6 = R.filter(R.pathEq(['property','a','b'], 2));
var t7 = R.pipe(R.last,R.pathOr('0',['property','a','c']));
var t8 = R.pipe(R.last,R.pathSatisfies(R.lte(10),['property','a','b']));  
var t9 = R.pipe(R.head,_prop('delicious'),R.ap([R.multiply(2), R.add(3)]),R.splitEvery(3),trace,R.unnest,R.uniq,trace,R.uniqBy(Math.abs));
var t10 = R.pipe(R.head,_prop('delicious'),trace,R.splitWhen(R.equals(5)));
var t11 = R.pipe(R.complement(R.isEmpty),R.not);
var t12 = R.pipe(R.last,_whereEq);
var t13 = R.pipe(R.head,R.always(null),R.tryCatch(R.prop('delicious'), R.F));
var t14 = R.pipe(R.head,_prop('delicious'),trace,R.without([5,7,6]),R.none(R.lte(5)));
var t15 = R.pipe(R.head,_prop('property'),R.values,R.xprod([1,2,3]),R.update(0, [1,{b:3}]),trace,R.flatten);
var t16 = R.until(R.gt(R.__, 100),R.multiply(2));
var t17 = R.useWith(R.max, [R.dec, R.inc]);
var t18 = R.unless(R.isArrayLike, R.of);
var t19 = R.pipe(R.head,R.omit(['dollar_value', 'in_stock']));
var t20 = R.bind({a:1});//Function.prototype.bind
var t21 = R.call(R.add, [1,2]);
var t22 = R.chain(R.add(10));
var t23 = R.pipe(R.head,_prop("name"), R.split(''),trace,R.countBy(R.toLower));
var t24 = R.pipe(t22,R.insert(3,14),R.insertAll(0,[8,9,10]),R.tap(log));
var t25 = R.compose(R.tap(log),R.fromPairs,t15);
var t26 = R.range(1,10);
var t27 = R.scan(R.add, 2, [1, 2, 3, 4]);
var t28 = R.pipe(R.times(R.multiply(2)),R.tap(log));
var t29 = R.juxt([Math.min,Math.max])(3, 4, 9, -3);
var t30 = R.unary(R.take(3));
var t31 = R.into([], _transducer); //// 取前2项后将每项加1结果放在[]数组内
var t32 = R.pipe(R.head,R.objOf('result'),R.tap(log));
var t33 = R.pipe(_pipeArgs,R.either(R.gte(10), R.isEmpty));
var t34 = _nthArg(1)(4,5,6);
var t35 = R.eqBy(Math.abs,5,t34);
var t36 = R.eqProps('in_stock',_head,_last);
var t37 = R.pipe(R.last,_prop('name'),R.pair('Ma Zi Da'));
var t38 = R.unionWith(R.eqBy(_prop('a')));
var t39 = R.uniqWith(R.eqBy(String));
var t40 = R.pipe(_pipeArgs,R.both(R.gte(R.__,-2), R.lte(R.__,0)));
var t41 = R.pipe(R.last,R.merge(R.__, {name: "Chang An QiRui"}));
var t42 = R.mergeWith(R.concat,{ a: true, values: [10, 20] },{ b: true, values: [15, 35] });
var t43 = R.mergeWithKey(_concatDelicious,_head,_last);
var t44 = R.pipe(R.median,trace,R.mathMod(R.__, 5));
var t45 = R.pipe(R.median,trace,R.modulo(R.__, 7));
log(t1(CARS));
log(t2(CARS));
log(t3);
log(t4);
log(_getMetrics({name:"congcong",pass:123}));
log(t5(CARS));
log(t6(CARS));
log(t7(CARS));
log(t8(CARS));
log(t9(CARS));
log(t10(CARS));
log(t11([]));
log(_where({a: 'foo', b:19}));
log(t12(CARS));
log(t13(CARS));
log(t14(CARS));
log(t15(CARS));
log(t16(1));
log(t17(6, 6));
log(t18([1,2]));
log(t18(null));
log(t19(CARS));
log(t20);
log(t21);
log(t22([1, 2, 3]));
log(_clone({a:1}));
log(t23(CARS));
t24([1, 2, 3]);
t25(CARS);
log(t26);
log(t27);
t28(5);
log(t29);
log(t30([1,2,3,4]));
log(t31([1,2,9,10]));
t32(CARS);
log(t33(1,2,3,4));
log("=======================")
log(t34);
log(t35);
log(t36);
log(_mapNames(CARS));
log(t37(CARS));
log(_union);
log(t38([{a: 1}, {a: 2}],[{a: 1}, {a: 4}]));
log(t39([1, '1', 2, 1]));
log(_unfold);
log(t40(1,2,3,4));
log(_clamp(3));
log(_clamp(12));
log(R.mean([2, 7, 9]));
log(_factorial(1));
log(_factorial(1));
log(_factorial(1));
log(_count);
log(t41(CARS));
log(R.mergeAll(CARS));
log("=======================")
log(t42);
log(t43);
log(t44([12, 47, 9]));
log(t45([12, 47, 9]));
var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
log(_differenceWith(l1,l2));
log(_symmetricDifference);
log(_symmetricDifferenceWith(l1,l2));
log(_dropLastWhile([1, 2, 3, 4, 3, 2, 1]));
log(R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]))
log(_dropRepeatsWith([1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3]));
log(_dropWhile([1, 2, 3, 4, 3, 2, 1]));
log(_takeLastWhile([1, 2, 3, 4]));
log(_takeWhile([1, 2, 3, 4, 3, 2, 1]));
log(_mapAccum(['1', '2', '3', '4']));
log(_mapAccumRight(['1', '2', '3', '4']));
log(_mapObjIndexed({ x: 1, y: 2, z: 3 }));