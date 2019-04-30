let clock = document.createElement('div'),
	day = document.createElement('div'),
	container = document.querySelector('.container');

container.appendChild(clock);
container.appendChild(day);

function startTime() {
	let date = new Date(),
    	hours = date.getHours(),
    	minutes = date.getMinutes(),
		seconds = date.getSeconds(),
		day = date.getDate(),
		month = date.getMonth() + 1,
		year = date.getFullYear();
		if (hours < 10) {
			hours = "0" + hours;
		}
  		if (minutes < 10) {
			minutes = "0" + minutes;
		}
  		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		if (day < 10) {
			day = "0" + day;
		}
  		if (month < 10) {
			month = "0" + month;
		}
		  clock.innerHTML = hours + ":" + minutes + ":" + seconds + " " + day + "." + month + "." + year;
		  clock.classList.add('center', 'bold');
  		setTimeout(startTime, 1000);
}
startTime();



function showToday() {
	let week = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],
	date = new Date();
	day.innerHTML = week[date.getDay()];
	day.classList.add('center', 'bold');
}

showToday();

let inputVal = document.querySelectorAll('input');
inputVal[2].disabled = true;

inputVal.forEach(item => item.addEventListener('input', function() {
	let firstDate = new Date(inputVal[0].value),
		secDate = new Date(inputVal[1].value);

	if (inputVal[0].value != '' && inputVal[0].value != null 
	&& inputVal[1].value != '' && inputVal[1].value != null) {
		inputVal[2].value = (firstDate.getTime() - secDate.getTime()) / 1000 / 60 / 60 / 24;
	}
}));






