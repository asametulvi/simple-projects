function currentTime() {

    let hourDOM = document.querySelector(".hour")
    let minuteDOM = document.querySelector(".minute")
    let secondDOM = document.querySelector(".second")
    let dayDOM = document.querySelector(".day")
    
    let time = new Date()

    let hour = time.getHours()
    hour = hour < 10 ? "0" + hour : hour;
    let minute = time.getMinutes();
    minute = minute < 10 ? "0" + minute : minute;
    let second = time.getSeconds();
    second = second < 10 ? "0"+ second : second;

    function nameDay() {
        let day = time.getDay()

        switch(day) {
            case 1 : 
                return "Monday"
            case 2 :
                return "Tuesday"
            case 3 :
                return "Wednesday"
            case 4 :
                return "Thursday"
            case 5 : 
                return "Friday"
            case 6 :
                return "Saturday"
            default :
                return "Sunday"
        }
    }

    let day = nameDay() 

    hourDOM.innerHTML = hour
    minuteDOM.innerHTML = minute
    secondDOM.innerHTML = second
    dayDOM.innerHTML = day
}

setInterval(currentTime, 1000)

currentTime();