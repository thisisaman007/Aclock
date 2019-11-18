var canvas =document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var d,hr,min,sec,ms;
var c = canvas.getContext('2d');

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

function digitalC(){
    update();
    var time =hr+":"+min+":"+sec+":"+ms;
    c.fillStyle="black";
    c.font="55px Arial";
    c.fillText(time,canvas.width/2.7,canvas.height/2);
}

function analogC(){
    update();
    
    for(var i=1;i<=12;i++){
    var x=(220*Math.cos(Math.PI/-2 +(2*i*Math.PI)/12)+ canvas.width/2);
    var y=(220*Math.sin(Math.PI/-2 +(2*i*Math.PI)/12)+ canvas.height/2);
    c.font="20px arial";
    c.fillText(i,x,y);
    }
    c.stroke();
    c.strokeStyle="#fff";
    c.lineWidth=2;
    var radius=180;
    c.beginPath();
    c.moveTo(canvas.width/2,canvas.height/2);
    var x=(radius*Math.cos(Math.PI/-2 +(2*sec*Math.PI)/60)+ canvas.width/2);
    var y=(radius*Math.sin(Math.PI/-2 +(2*sec*Math.PI)/60)+ canvas.height/2);
    c.lineTo(x,y);
    //c.arc(canvas.width/2,canvas.height/2,200,Math.PI/-2,Math.PI/(-2)+6*sec*Math.PI/180);  
    
    c.stroke();
    c.strokeStyle="rgba(46, 98, 195, 0.79)";
    c.lineWidth=8;
    var radius=150;
    c.moveTo(canvas.width/2,canvas.height/2);
    var x=(radius*Math.cos(Math.PI/-2 +(2*min*Math.PI)/60)+ canvas.width/2);
    var y=(radius*Math.sin(Math.PI/-2 +(2*min*Math.PI)/60)+ canvas.height/2);
    c.lineTo(x,y);
    
    c.stroke();
    c.strokeStyle="#204774";
    c.lineWidth=10;
    var radius=130;
    c.moveTo(canvas.width/2,canvas.height/2);
    var x=(radius*Math.cos(Math.PI/-2 +(2*hr*Math.PI)/11)+ canvas.width/2);
    var y=(radius*Math.sin(Math.PI/-2 +(2*hr*Math.PI)/11)+ canvas.height/2);
    c.lineTo(x,y);
    
    c.moveTo(canvas.width/2,canvas.height/2);
    c.arc(canvas.width/2,canvas.height/2,10,0,2*Math.PI);
    
}

function update(){
    d= new Date();
 hr= d.getHours()%12;
 min=d.getMinutes();
 sec=d.getSeconds();
 ms=d.getMilliseconds();
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  init();
}
animate();

function init(){
    analogC();
}

init();