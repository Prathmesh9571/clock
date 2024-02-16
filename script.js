function displayTime(){
	let dt = new Date();
	let hr = (dt.getHours())%12;
	let mn = dt.getMinutes();
	let sc = dt.getSeconds();
	let clock = document.getElementById("clock");
	clock.innerHTML = (hr+":"+mn+":"+sc); 
}
setInterval(displayTime,1000)