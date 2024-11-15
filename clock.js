 const clock = document.querySelector('#clock');

        //   
// setInterval(function(){
//   let date = new Date();
//   clock.innerHTML = date.toLocaleTimeString();
// },1000);
/*
  function updateTime(){
  let date = new Date();
  
  clock.innerHTML = date.toLocaleTimeString();
  
  }
setInterval(updateTime,1000);

function getdate(){
  let date1 = new Date();

clock2.innerHTML = date1.getDate();
}
 setInterval(getdate());
*/



let timer = false;


 const start = document.querySelector('#start');
 const stop = document.querySelector('#stop');
 const reset = document.querySelector('#reset');


let hour = '00';
let minit = '00';
let second = '00';
let count = '00';

start.addEventListener('click', function(){
  timer = true;
  stopwatch();
})


stop.addEventListener('click', function(){
  timer = false;
  
})

 
reset.addEventListener('click', function(){
  timer = false;
  hour = 0;
  minit = 0;
  second = 0;
  count = 0;

  document.querySelector("#hour").innerHTML ="00";
  document.querySelector("#minit").innerHTML ="00";
  document.querySelector("#second").innerHTML ="00";
  document.querySelector("#count").innerHTML ="00";

 
});

function stopwatch(){
  if(timer){
 count++;

if (count === 100) {
  second++;
  count = 0;
}

if (second === 60) {
  minit++;
  second=0;
  
}

if (minit === 60) {
  hour++;
 minit = 0;
 second =0;
}

let hrString = hour;
let minString = minit;
let secString = second;
let couString = count;

if (hour < 10) {
  hrString = "0" + hrString;
}
if (minit < 10) {
  minString = "0" + minString;
}
   if(second <10){
    secString = "0" +secString;
   }
   if(count<10){
    couString = "0"+couString;
   }

   document.getElementById('hr').innerHTML = hrString;
   document.getElementById('min').innerHTML = minString;
   document.getElementById('sec').innerHTML = secString;
   document.getElementById('cou').innerHTML = couString;

    setTimeout(stopwatch, 10);
}
}