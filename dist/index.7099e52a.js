AOS.init();const e=new Date("Nov 6, 2024 19:00:00").getTime(),t=setInterval(function(){let n=e-new Date().getTime(),o=Math.floor(n/864e5),a=Math.floor(n%864e5/36e5),r=Math.floor(n%36e5/6e4),l=Math.floor(n%6e4/1e3);document.getElementById("contador").innerHTML=`${o}d ${a}H ${r}M ${l}S`,n<0&&(clearInterval(t),document.getElementById("contador").innerHTML="Evento ja aconteceu :(")},1e3);
//# sourceMappingURL=index.7099e52a.js.map
