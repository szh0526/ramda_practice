/**
 * 函数式编程
 * DSL即声明式编程（声明式编程：定义要做什么,实现惰性求值 命令式编程：用一堆命令语句来描述怎么做）
 * 高阶函数：参数或返回值为函数的函数
 * ramda:自动柯里化和函数参数优先于数据
 * curry:柯里化是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数
 * ramda利用自动柯里化,是将另一个函数组合的先决条件。如常用的map操作需要接受两个参数，
    R.map(function(item){ return item *2; }, [2,3,5] ); //输出[4, 6, 10]
    var map = R.map(function(item){ return item *2; }); map([2,3,5]); //输出[4, 6, 10]
 *如果传2个完备的参数，则R.map直接执行。否则返回另一个函数，等参数完备时才执行。
  接受一个参数并返回一个新的函数,返回的函数就通过闭包的方式记住了父函数的第一个参数。

 UnderScore和lodash，要求先传入数据，后传转换函数。ramda则将数据参数最后一个传入，而转换函数和配置参数则优于数据参数，排在前面。
 可以在不触及数据的情况下，将一个函数算法子包装进另一个算法子中，实现两个独立转换功能的组合。
 通过管道把数据在接受单个参数的函数间传递。利用 curry，让函数先接收数据 -> 操作数据 -> 把数据传递到下一个函数
 */

//1.纯函数
let purefn = (a) => (b) => a(b);
//2.curry
let curryfn = (x) => (y) => x + y;



function curry(fx) {
  var arity = fx.length;

  return function f1() {
    var args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= arity) {
      return fx.apply(null, args);
    }
    else {
      var f2 = function f2() {
        var args2 = Array.prototype.slice.call(arguments, 0);
        return f1.apply(null, args.concat(args2));
      }
      return f2;
    }
  };
}

var compose = function() {
  var fns = toArray(arguments),
      arglen = fns.length;

  return function(){
    for(var i=arglen;--i>=0;) {
      var fn = fns[i]
        , args = fn.length ? Array.prototype.slice.call(arguments, 0, fn.length) : arguments
        , next_args = Array.prototype.slice.call(arguments, (fn.length || 1)); //not right with *args
      next_args.unshift(fn.apply(this,args));
      arguments = next_args;
    }
    return arguments[0];
  }
}

//  identify :: a -> a
var identify = function(x){ return x; }


//  head :: [a] -> a
var head = function(xs){ return xs[0]; }

//  add :: (x,y) -> Number
var add = curry(function(x, y) {
    return x + y;
});

//  match :: Regex -> (String -> [String])
var match = curry(function(reg, x) {
    return x.match(reg);
});

//  replace :: Regex -> (String -> (String -> String))
var replace = curry(function(what, replacement, x) {
    return x.replace(what, replacement);
});

//  filter :: (a -> Bool) -> [a] -> [a]
var filter = curry(function(f, xs) {
    return xs.filter(f);
});

//  map :: (a -> b) -> [a] -> [b]
var map = curry(function map(f, xs) {
    return xs.map(f);
});

//  reduce :: (b -> a -> b) -> b -> [a] -> b
var reduce = curry(function(f, a, xs) {
    return xs.reduce(f, a);
});

//  join :: String -> [String] -> String
var split = curry(function(what, x) {
    return x.split(what);
});

//  join :: String -> [String] -> String
var join = curry(function(what, x) {
    return x.join(what);
});

//  toUpperCase :: String -> String
var toUpperCase = function(x) {
    return x.toUpperCase()
};

//  toLowerCase :: String -> String
var toLowerCase = function(x) {
    return x.toLowerCase()
};

//  trace :: (a,b) -> b
var trace = curry(function(tag, x){
  console.log(tag, x);
  return x;
});
