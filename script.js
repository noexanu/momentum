
const addZero = (n) => {
  return (parseInt(n, 10) < 10 ? '0' : '') + n
}

////////////////////////////////////////////////////////////////////////////////////////////
//                                        TIME                                            //
////////////////////////////////////////////////////////////////////////////////////////////

const TIME = () => {
  const date = document.querySelector('.date')
  const time = document.querySelector('.time')
  const getNameOfDay = {
    '0' : 'Sunday',
    '1' : 'Monday',
    '2' : 'Tuesday',
    '3' : 'Wednesday',
    '4' : 'Thursday',
    '5' : 'Friday',
    '6' : 'Saturday'
  }
  const getNameOfMonth = {
    '0' : 'January',
    '1' : 'February',
    '2' : 'March',
    '3' : 'April',
    '4' : 'May',
    '5' : 'June',
    '6' : 'July',
    '7' : 'August',
    '8' : 'September',
    '9' : 'October',
    '10' : 'November',
    '11' : 'December'
  }
  const showTime = () => {
    const today = new Date()
    date.innerHTML = `${getNameOfDay[today.getDay()]}, ${today.getDate()} of ${getNameOfMonth[today.getMonth()]}`
    time.innerHTML = `${today.getHours()}:${addZero(today.getMinutes())}:${addZero(today.getSeconds())}`
    setTimeout(showTime, 1000)
  }
  showTime()
}

////////////////////////////////////////////////////////////////////////////////////////////
//                               BACKGROUND AND GREAT                                     //
////////////////////////////////////////////////////////////////////////////////////////////

const BACKGROUND_AND_GREAT = () => {
  const body = document.body.style
  const greeting = document.querySelector('.greeting')
  const img = new Image()
  let src = ''
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
  }
  const setBgGreet = () => {
    let today = new Date(),
      hour = today.getHours(),
      randomInt = addZero(getRandomInt(1,20))
      switch (true) {
        case hour < 6:
          //img.onload = () => body.backgroundImage = `url('https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/night/${randomInt}.jpg')`
          src = `https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/night/${randomInt}.jpg`
          greeting.textContent = 'Good Night,'
          break
        case hour < 12:
          //img.onload = () => body.backgroundImage = `url('https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/morning/${randomInt}.jpg')`
          src = `https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/morning/${randomInt}.jpg`
          greeting.textContent = 'Good Morning,'
          break
        case hour < 18:
          //img.onload = () => body.backgroundImage = `url('https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/day/${randomInt}.jpg')`
          src = `https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/day/${randomInt}.jpg`
          greeting.textContent = 'Good Day,'
          break
        default:
          //img.onload = () => body.backgroundImage = `url('https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/evening/${randomInt}.jpg')`
          src = `https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/evening/${randomInt}.jpg`
          greeting.textContent = 'Good Evening,'
      }
    img.onload = () => body.backgroundImage = `url(${src})`
    img.src = src
    setTimeout(setBgGreet, 3600000)
  }
  setBgGreet()
}

////////////////////////////////////////////////////////////////////////////////////////////
//                                    LOCAL STORAGE                                       //
////////////////////////////////////////////////////////////////////////////////////////////

const LOCAL_STORAGE = () => {
  const name = document.querySelector('.name')
  const city = document.querySelector('.city')
  const focus = document.querySelector('.focus')
  const output = document.querySelector('.weather')
  const weatherIcon = document.querySelector('.weather-icon')
  const getText = () => {
    if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '') {
      focus.textContent = '[Enter Focus]'
    } else {
      focus.textContent = localStorage.getItem('focus')
    }
    if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
      name.textContent = '[Enter Name]';
    } else {
      name.textContent = localStorage.getItem('name');
    }
    if (localStorage.getItem('city') === null || localStorage.getItem('city') === '') {
      output.textContent = ''
      city.textContent = '[Enter City]';
      weatherIcon.className = 'weather-icon owf'
    } else {
      city.textContent = localStorage.getItem('city');
    }
  }
  function setText(e) {
    const setItem = () => {
      localStorage.setItem(this.classList[0], this.innerText)
      name.blur()
      city.blur()
      focus.blur()
    }
    switch (e.type) {
      case 'focus':
        this.innerText = ''
        break
      case 'keypress':
        if (e.which == 13 || e.keyCode == 13) {
          setItem()
        }
        break
      case 'blur':
        if (this.innerText.length === 0) {
          getText()
        } else {
          setItem()
        }
        break
    }
  }
  name.addEventListener('focus', setText)
  name.addEventListener('keypress', setText)
  name.addEventListener('blur', setText)
  city.addEventListener('focus', setText)
  city.addEventListener('keypress', setText)
  city.addEventListener('blur', setText)
  focus.addEventListener('focus', setText)
  focus.addEventListener('keypress', setText)
  focus.addEventListener('blur', setText)
  getText()
}

////////////////////////////////////////////////////////////////////////////////////////////
//                                        SCROLL                                          //
////////////////////////////////////////////////////////////////////////////////////////////

const SCROLL = () => {
  let currentImg = 1
  let src = ''
  const body = document.body.style
  const next = document.querySelector('.scrollImg')
  const img = new Image()
  const scrollImg = () => {
    switch (true) {
        case currentImg < 21:
          //img.onload = () => body.backgroundImage = `url('https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/night/${addZero(currentImg)}.jpg')`
          src = `https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/night/${addZero(currentImg)}.jpg`
          break
        case currentImg < 41:
          //img.onload = () => body.backgroundImage = `url('https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/morning/${addZero(currentImg - 20)}.jpg')`
          src = `https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/morning/${addZero(currentImg - 20)}.jpg`
          break
        case currentImg < 61:
          //img.onload = () => body.backgroundImage = `url('https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/day/${addZero(currentImg - 40)}.jpg')`
          src = `https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/day/${addZero(currentImg - 40)}.jpg`
          break
        case currentImg < 81:
          //img.onload = () => body.backgroundImage = `url('https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/evening/${addZero(currentImg - 60)}.jpg')`
          src = `https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/evening/${addZero(currentImg - 60)}.jpg`
          break
      }
    img.onload = () => { 
      body.backgroundImage = `url(${src})`
      setTimeout(function() { next.disabled = false }, 2500)
    }
    img.src = src
    currentImg = (currentImg === 80 ? 0 : currentImg) + 1
    next.disabled = true
  }
  next.addEventListener('click', scrollImg)
}

////////////////////////////////////////////////////////////////////////////////////////////
//                                        QUOTE                                           //
////////////////////////////////////////////////////////////////////////////////////////////

const QUOTE = () => {
  const quote = document.querySelector('.quote')
  const refresh = document.querySelector('.refreshQuote')
  async function refreshQuot() {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json();
    quote.innerText = data.slip.advice
  }
  refresh.addEventListener('click', refreshQuot)
  refreshQuot()
}

////////////////////////////////////////////////////////////////////////////////////////////
//                                      WEATHER                                           //
////////////////////////////////////////////////////////////////////////////////////////////

const WEATHER = () => {
  const weatherIcon = document.querySelector('.weather-icon')
  const output = document.querySelector('.weather')
  const city = document.querySelector('.city')
  const lang = 'en'
  const units = 'metric'
  const key = '08f2a575dda978b9c539199e54df03b0'
  async function getWeather() {  
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.innerText}&lang=${lang}&appid=${key}&units=${units}`);
    const data = await res.json(); 
    output.textContent = `, ${(data.main.temp > 0 ? '+' : '') + data.main.temp}°${units === 'metric' ? 'C' : 'F'}`
    weatherIcon.className = 'weather-icon owf'
    weatherIcon.classList.add(`owf-${data.weather[0].id}`)
  }
  city.addEventListener('blur', getWeather)
  city.addEventListener('keypress', function(e) {
    if (e.which == 13 || e.keyCode == 13) {
      city.blur()
    }
  })
  getWeather()
}



TIME()
BACKGROUND_AND_GREAT()
LOCAL_STORAGE()
SCROLL()
QUOTE()
WEATHER()
