var linksa = document.querySelector('.user-block');
var banzai = document.querySelector('.login-form');
var close = document.querySelector('.cross-close');
var form = banzai.querySelector('form');
var login = banzai.querySelector('[name=login]');
var password = banzai.querySelector('[name=password]');
var storage = localStorage.getItem('login');
var activeNav = document.querySelector('.active');
var galleryStyle = document.querySelector('.gallery');
var setTime = document.querySelector('[name=datetime-local]');

linksa.addEventListener('click', function (event) {
  event.preventDefault();
  banzai.classList.add('login-form-switch');
  login.focus();

  if (storage) {
    login.value = storage;
    password.focus();
  }
});

close.addEventListener('click', function (event) {
  event.preventDefault();
  banzai.classList.remove('login-form-switch');
});

window.addEventListener('keydown', function (event) {
  if (event.keyCode == 27) {
    if (banzai.classList.contains('login-form-switch')) {
      banzai.classList.remove('login-form-switch');
    }
  }
});

form.addEventListener('submit', function (event) {
  if (!(login.value && password.value)) {
    event.preventDefault();
    console.log('Нужно ввести логин и пароль');
  } else {
    localStorage.setItem('login', login.value);
  }
});

activeNav.addEventListener('click', function (){
  event.preventDefault();
});

galleryStyle.classList.add('gallery-live');
galleryStyle.querySelector('.hidden').classList.remove('hidden');
galleryStyle.querySelector('.hidden').classList.remove('hidden');
setTodayTime();


function setTodayTime(){
  var today = new Date();
  var year = today.getFullYear();
  var mounth = today.getMonth()+1;
  var day = today.getDate();

  if(mounth<10){
    mounth = "0"+mounth;
  }
  if(day<10){
    day = "0"+day;
  }
  var totaldate = ""+year+"-"+mounth+"-"+day;
  if(totaldate === setTime.value){

  }

  setTime.min = totaldate;
  setTime.value = totaldate;
}
