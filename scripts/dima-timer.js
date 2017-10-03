function timer() {
    var nowDate = new Date();
    var achiveDate = new Date(2017,8,30,18,0,0); //set the desired date
    var result = (achiveDate - nowDate)+1000;
    if (result < 0) {
      var elmnt = document.getElementById('timer');
      elmnt.innerHTML = 'Дима<br>Потрачено';
      document.querySelector('.dima-time').classList.add('dima-time2');
      return undefined;
    }
    var seconds = Math.floor((result/1000)%60);
    var minutes = Math.floor((result/1000/60)%60);
    var hours = Math.floor((result/1000/60/60)%24);
    var days = Math.floor(result/1000/60/60/24);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    var elmnt = document.getElementById('timer');
    elmnt.innerHTML = 'Дней: ' + days + '<br>' + hours + ':' + minutes + ':' + seconds;
    setTimeout(timer, 1000);
}
window.onload = function() {
    timer();
}
