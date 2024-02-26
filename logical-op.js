var a = 10
var b = 20
var c = 50
var d = 40
if (a > b && c > d){
    console.log('a is greaterthan b  and c is greater than d');
}else{
    console.log('Condition false');
}

if(a > b || c > d){
    console.log('anyone true');
}
else{
    console.log('false');
}
var cheak = !( a < b && c > d) //false
console.log(cheak);