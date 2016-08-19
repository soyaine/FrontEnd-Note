/**
 * Created by songyuting on 2016/8/19.
 */

// =====进阶篇的DEMO
// var btn = document.getElementById("btn");
// var ret = document.getElementById("ret");
// var num = document.getElementById("num");
// btn.addEventListener('click', function(){
//     ret.innerText = 10 + num.value;
// });

/*
 * 输入格式：
 * 有一下几种可能的格式
 * '2015-08-05'
 * 1438744815232
 * {y:2015,m:8,d:5}
 * [2015,8,5]
 *
 * 返回格式：Date
 */
function toDate(param){
    // String，Number 这两种可以直接作为 Date 的入参，新建对象
    if (typeof(param) == 'string' ||
        typeof(param) == 'number' ){
        return new Date(param);
    }
    // Array
    // 为什么在对象的前面？因为数组在typeof()==‘object'中返回true
    // 即会被通过这个判断条件进行识别
    // 所以先筛去数组，然后再判断对象
    if (param instanceof Array){
        var date = new Date(0);
        date.setYear(param[0]);
        date.setMonth(param[1]-1);
        date.setDate(param[2]);
        return date;
    }

    // Object
    if (typeof(param) == 'object') {
        var date = new Date(0);
        date.setYear(param.y);
        date.setMonth(param.m-1);
        date.setDate(param.d);
        return date;
    }
    return -1;
}

/*
 * 获取对象构造函数名称
 * 视频中关于getConstructorName函数写法存在bug，导致传入 0, false, "", NaN 这些值时，得到错误的返回结果。
 * 由于视频更新需要较长周期这里更正如下：
 * 视频中obj&&替换成(obj===undefined||obj===null)?obj:(...)这样一个表达式，该表达式实现
 * 1. 入参obj如果是undefined和null，则返回其自身;
 * 2. 入参obj如果是其他值，则返回obj.constructor&&obj.constructor.toString().match(/function\s*([^(]*)/)[1]的结果;
 */
function getConstructorName(obj){
    var type = (obj===undefined||obj===null)?obj:(obj.constructor&&obj.constructor.toString().match(/function\s*([^(]*)/)[1]);
    // return (obj&&obj.constructor&&obj.constructor.toString().match(/function\s*([^(]*)/)[1]);
}


// ================进阶篇 作业=================
// ==================1.实现type函数用于识别标准类型和内置对象类型===========

function type(obj) {
    // var objType = (obj===undefined||obj===null)?obj.toString():(obj.constructor&&obj.constructor.toString().match(/function\s*([^(]*)/)[1]);
    // objType = objType.toString();

    // return objType;
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}


// ==================2.Object.create(proto)方法===========
Object.create = function(proto){
    var obj = this, //获取对象
        result = new Object(); //新创建的对象
    for (var name in proto) { //遍历传入参数的属性名
        result[name] = proto[name]; //将入参对象的属性值赋给新对象的相应属性
    }
    return result;//返回结果
};

// ==================3.Function.prototype.bind方法===========

Function.prototype.bind = function (thisArg) {
    var fun = this, //获取当前函数
        result = new function () {

        }
}




