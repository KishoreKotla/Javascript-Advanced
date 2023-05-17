function updateClock(){
    var hours  = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var ampm = document.getElementById("ampm");

    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    
    if(h>12){
        ampm.innerHTML = "PM"
        h = h-12;
    }

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    
}

setInterval(updateClock, 1000);