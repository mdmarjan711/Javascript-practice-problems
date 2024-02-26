var i = 0
while(i < 10){
    console.log('kop');
    i++
}

var isRuning = true
while(isRuning){
    var rand = Math.floor(Math.random()*10+1)
    if(rand == 9){
        console.log('winer');
        isRuning = false
    } else{
        console.log('result'+rand);
    }
}

//do while
var i = 1
do{
    console.log(i+"Mango");
    i++
}while(i <= 15)
