
const display = document.getElementById('clock');;
const alarm = new Audio('https://audio-previews.elements.envatousercontent.com/files/106595456/preview.mp3?response-content-disposition=attachment%3B+filename%3D%225UBZP7Q-danger-alarm.mp3%22');
alarm.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function updateTime() {
	const date = new Date();
	const hour = formatTime(date.getHours());
	const minutes = formatTime(date.getMinutes());
	const seconds = formatTime(date.getSeconds());

	display.innerText= `${hour} : ${minutes} : ${seconds}`;
	
}

function formatTime(time) {
	if (time < 10) {
		return '0' + time;
    }
	return time;
}
function setAlarmTime(value) {
	alarmTime = value;
}

function setAlarm() {
	if (alarmTime) {
		const current = new Date();
		const timeToAlarm = new Date(alarmTime);

		if (timeToAlarm > current) {
			const timeout = timeToAlarm.getTime() - current.getTime();
			alarmTimeout = setTimeout(() => alarm.play(), timeout);
			alert('Done!');
        }
	}

}

function clearAlarm() {
	alarm.pause();
	if (alarmTimeout) {
		clearTimeout(alarmTimeout);
		alert("Threat neutralized");
		}
    }

setInterval(updateTime, 1000);