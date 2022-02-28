setInterval(()=>{

let date = new Date();
let htime = date.getHours();
let mtime = date.getMinutes();
let stime = date.getSeconds();


let hrotation = 30*htime + mtime/2;
let mrotation = 6*mtime ;
let srotation = 6*stime;

first.style.transform = `rotate(${srotation}deg)`
second.style.transform = `rotate(${mrotation}deg)`
three.style.transform = `rotate(${hrotation}deg)`



},1000)