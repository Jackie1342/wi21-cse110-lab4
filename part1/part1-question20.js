function secTime(){
    let d= new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setTimeout(secTime,1000);
