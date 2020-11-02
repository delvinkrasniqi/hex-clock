var clockText = document.getElementById("clock");


setInterval(() => {
    var time = new Date(),
    hour = time.getHours(),
    minute = time.getMinutes(),
    second = time.getSeconds();

    if(hour<=9){
        hour = "0"+hour;
    }
    if(minute<=9){
        minute ="0" + minute;
    }
    if(second<=9){
        second = "0" + second;
    }

    document.body.style.backgroundColor = "#"+hour + minute+second;
    clockText.innerText = "#" + hour + minute+ second; 
}, 1000);