// // var rightNow = new Date();
// //  var theDay = rightNow.getDay();
// //   console.log(theDay);
// // var date = new Date()
// // var mSecond1970 = date.getTime()
// // console.log("milliseconds=>" , mSecond1970);
// // console.log("seconds=>",Math.floor(mSecond1970 / 1000));
// // console.log("minutes=>",Math.floor(mSecond1970/1000/60));
// // console.log("hours=>",Math.floor(mSecond1970/1000/60/60));
// // console.log("days=>",Math.floor(mSecond1970/1000/60/60/24));
// // console.log("months=>",Math.floor(mSecond1970/1000/60/60/24/30));
// // console.log("years=>",Math.floor(mSecond1970/1000/60/60/24/365));

// // var boardExam = new Date()
// // boardExam.setDate(8)
// // boardExam.setMonth(4)
// //  var diff = boardExam.getTime() - mSecond1970
// //  console.log(diff / 1000 / 60 / 60 / 24);

 
// function showTime(){
//     var date = new Date();
//     var h = date.getHours(); // 0 - 23
//     var m = date.getMinutes(); // 0 - 59
//     var s = date.getSeconds(); // 0 - 59
//     var session = "AM";
   
//     if(h == 0){
//         h = 12;
//     }
   
//     if(h > 12){
//         h = h - 12;
//         session = "PM";
//     }
   
//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;
   
//     var time = h + ":" + m + ":" + s + " " + session;
//     document.getElementById("MyClockDisplay").innerText = time;
//     document.getElementById("MyClockDisplay").textContent = time;
   
//     setTimeout(showTime, 1000);
   
// }
// var date = new Date()

// var mSecoFrom1970 = date.getTime()
// var baqraEidDate = new Date()

// baqraEidDate.setDate(16)
// baqraEidDate.setMonth(5)

// console.log('baqraEidDate milliseconds=>', baqraEidDate.getTime())
// console.log('mSecoFrom1970=>', mSecoFrom1970)

// var difference = baqraEidDate.getTime() - mSecoFrom1970
// console.log(difference / 1000 / 60 / 60 / 24)

// var btn = document.getElementById('btn')
// var updatedTime = setInterval(function () {
//     var time = new Date()
//     console.log(time);
// },1000)
// window.onload = function () {
  
//     var seconds = 00; 
//     var tens = 00; 
//     var appendTens = document.getElementById("tens")
//     var appendSeconds = document.getElementById("seconds")
//     var buttonStart = document.getElementById('button-start');
//     var buttonStop = document.getElementById('button-stop');
//     var buttonReset = document.getElementById('button-reset');
//     var Interval ;
  
//     buttonStart.onclick = function() {
      
//       clearInterval(Interval);
//        Interval = setInterval(startTimer, 10);
//     }
    
//       buttonStop.onclick = function() {
//          clearInterval(Interval);
//     }
    
  
//     buttonReset.onclick = function() {
//        clearInterval(Interval);
//       tens = "00";
//         seconds = "00";
//       appendTens.innerHTML = tens;
//         appendSeconds.innerHTML = seconds;
//     }
    
     
    
//     function startTimer () {
//       tens++; 
      
//       if(tens <= 9){
//         appendTens.innerHTML = "0" + tens;
//       }
      
//       if (tens > 9){
//         appendTens.innerHTML = tens;
        
//       } 
      
//       if (tens > 99) {
//         console.log("seconds");
//         seconds++;
//         appendSeconds.innerHTML = "0" + seconds;
//         tens = 0;
//         appendTens.innerHTML = "0" + 0;
//       }
      
//       if (seconds > 9){
//         appendSeconds.innerHTML = seconds;
//       }
    
//     }
    
  
//   }

let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset'); 

let hour = 00; 
let minute = 00; 
let second = 00; 
let count = 00; 

startBtn.addEventListener('click', function () { 
	timer = true; 
	stopWatch(); 
}); 

stopBtn.addEventListener('click', function () { 
	timer = false; 
}); 

resetBtn.addEventListener('click', function () { 
	timer = false; 
	hour = 0; 
	minute = 0; 
	second = 0; 
	count = 0; 
	document.getElementById('hr').innerHTML = "00"; 
	document.getElementById('min').innerHTML = "00"; 
	document.getElementById('sec').innerHTML = "00"; 
	document.getElementById('count').innerHTML = "00"; 
}); 

function stopWatch() { 
	if (timer) { 
		count++; 

		if (count == 100) { 
			second++; 
			count = 0; 
		} 

		if (second == 60) { 
			minute++; 
			second = 0; 
		} 

		if (minute == 60) { 
			hour++; 
			minute = 0; 
			second = 0; 
		} 

		let hrString = hour; 
		let minString = minute; 
		let secString = second; 
		let countString = count; 

		if (hour < 10) { 
			hrString = "0" + hrString; 
		} 

		if (minute < 10) { 
			minString = "0" + minString; 
		} 

		if (second < 10) { 
			secString = "0" + secString; 
		} 

		if (count < 10) { 
			countString = "0" + countString; 
		} 

		document.getElementById('hr').innerHTML = hrString; 
		document.getElementById('min').innerHTML = minString; 
		document.getElementById('sec').innerHTML = secString; 
		document.getElementById('count').innerHTML = countString; 
		setTimeout(stopWatch, 10); 
	} 
}
