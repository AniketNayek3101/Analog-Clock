setInterval(()=>{
    d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
    hr = 30*hour + minutes/2;
    mr = 6*minutes;
    sr = 6*seconds;
    
    hour.style.transform = `rotate(${hr}deg)`;
    minute.style.transform = `rotate(${mr}deg)`;
    second.style.transform = `rotate(${sr}deg)`;
},1000)