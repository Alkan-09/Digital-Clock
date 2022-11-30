    let isStopped = false;

    function startTime() {
        let today = new Date();
        let hr = today.getHours();
        let min = today.getMinutes();
        let sec = today.getSeconds();
        ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
        hr = (hr == 0) ? 12 : hr;
        hr = (hr > 12) ? hr - 12 : hr;
        
        hr = checkTime(hr);
        min = checkTime(min);
        sec = checkTime(sec);
        document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
        
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let curWeekDay = days[today.getDay()];
        let curDay = today.getDate();
        let curMonth = months[today.getMonth()];
        let curYear = today.getFullYear();
        let date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
        document.getElementById("date").innerHTML = date;

        myTimeout = setTimeout(startTime, 500);
    }
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    function forceStopTime() {
        if(isStopped) {
            startTime();
            document.getElementById("btn").innerHTML="Durdur";
        } else {
            clearTimeout(myTimeout);
            document.getElementById("btn").innerHTML="Başlat";
        }
        isStopped = !isStopped

    }

    startTime();
    

    


