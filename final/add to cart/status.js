

const today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("time").textContent = time; 

var time2 = today.getHours() + ":" + (today.getMinutes()+15) + ":" + today.getSeconds();
document.getElementById("shiptime").textContent = time2; 

var time3 = today.getHours() + ":" + (today.getMinutes()+25) + ":" + today.getSeconds();
document.getElementById("delivertime").textContent = time3; 
