 var date = new Date()
 var today = date.getDay()
 if(today == 0){
    console.log('Sunday');
 }else if(today == 1){
    console.log('Monday');
 }else if(today == 2){
    console.log('tuesday');
 }else if(today == 3){
    console.log('wednesday');
 }else if(today == 4){
    console.log('thesday');
 }else if(today == 5){
    console.log('Friday');
 }else if(today == 6){
    console.log('saturday');
 }else{
    console.log("Not a day");
 }
