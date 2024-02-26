var a = 50
var c = 60
var d = a+c
console.log(d);

 var fristName = 'Md'
 var secondName = 'Marjan'
 var fullNmame = fristName +' '+ secondName
 console.log(fullNmame)

 var x = 1236.56;
 console.log(Number.parseInt(x)); //1236
 var y = '450';
 console.log(Number.parseInt(y)); //450
var c = 'abc';
console.log(Number.parseInt(c)); //NaN
var d = '360';
console.log(Number.parseFloat(d)); //360

console.log(1/0); //infinity

// ------String------
var a = 'bangladesh'
console.log(a); //bangladesh

var b = String('Potol')
var c = String(313)
var d = String(3.1416)
console.log(b);  //Potol
console.log(c); //313
console.log(d); //3.1416

var e = 1971
console.log(e.toString()); //1971

//-----Booleans-----
var a = Boolean(true)
var b = Boolean(false)
console.log(a, b);

// //-------typecasting--------
var a1 = '1000'
var a2 = 25
console.log(Number.parseInt(a1))
console.log(a2.toString())

var a3 = (String(54321))
console.log(a3);
var a4 = (Number('22'))
console.log(a4);

console.log(Boolean('Anu'));
console.log(Boolean(0));
console.log(Boolean(25));
//''  0  null undefiend NuN


//Hexadecimal octal number
var b1 = 0x5326
console.log(b1)
var b2 = 01562
console.log(b2)

//-------Operator--------
// Arithmetic Operator
// +  -  *  /   %  --  ++
var b4= 11
var b5= 9
console.log(b4++)// post increment
console.log(b4); // 12
console.log(++b5)// pre increment

// Assignment Op
var a = 10
var b = 20
a+=b
// console.log(a); // 30

var a = 50
var b = 10
a-=b
console.log(a); // 40

var a = 25
var c = 3
a*=c
console.log(a); // 75

var a = 10
var b = 5
a/=b
console.log(a) //2

var a = 11
var b = 5
a%=b
console.log(a); //1

var a = 5
var b = 5
a**=b
console.log(a); //3125

//comparison Op
// ==
var a = 10
var b = 20
console.log(a == b) //false

var a = 50
var b = 50
console.log(a == b) //true

// // !=
var a = 40
var b = 90
console.log(a != b) //true

var a = 40
var b = 40
console.log(a != b) //false

 var a = 50
 var b = 20
 console.log(a>b) //true

 var a = 20
 var b = 60
 console.log(a>b) //false

var a = 40
var b = 30
console.log(a<b) // false

var a = 50
var n = 20
console.log(a>=n) //true

var a = 10
var n = 20
console.log(a<=n) //true

var a = '50'
var x = 50
console.log(a === x); //false

var a = '50'
var x = 50
console.log(a !== x); //true

// Logical Op
// && || !

var i = 5
var k = 1
console.log(i>0 && k>0); // true

var i = 6
var k = 8
console.log(i>0 || k<-3); // true

var p = 10
var x = 22
console.log(!(p > 5 || x < 10)) //false

// typeof
console.log(typeof 'apple')
console.log(typeof 125)
console.log(typeof ture)
