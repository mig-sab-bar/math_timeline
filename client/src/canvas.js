import {r, rama } from "./ramas.js";

var tempor;
var tiempo=0;
var xx,yy,xx2,yy2;
var xx3,yy3;
var pos;
var linees =new Array(6);
linees[0]=new Array(35,15,62,22,82,25,114,20,139,18,161,20,191,25,206,21,252,18,273,23,311,26,345,22,385,15,400,22,417,25,440,20,463,18,480,20,491,25,514,21,523,18,537,23,556,26,575,22,600,20,615,17,628,12,639,15,652,22,682,25,714,20,739,17,761,20,791,25,806,21,852,18,873,23,911,26,945,22,985,18,1000,20,1017,23,1040,18,1063,17,1080,20,1091,23,1114,21,1123,18,1137,22,1156,25,1175,20,1200,17,1215,15,1228,14,1235,16,1262,21,1282,24,1314,20,1339,18,1361,20,1391,25,1406,21,1435,15,1462,22,1482,25,1514,20,1539,18,1561,20,1591,25,1606,21,1652,18,1673,23,1711,26,1745,22,1835,15,1862,22,1882,25,1914,20,1939,18,1961,20,1991,25,2000,21);
linees[1]=new Array(0,0,0,0,0,0);
linees[2]=new Array(0,0,0,0,0,0);
linees[3]=new Array(0,0,0,0,0,0);
linees[4]=new Array(0,0,0,0,0,0);
linees[5]=new Array(0,0,0,0,0,0);
var ocupacio=new Array();
var interrama;var anchorrama,parcial2,pepe,total,parcial1, inici;



 export function canvas1(){
xx=window.screen.width;
yy=window.screen.height;
xx2=0.95*xx+"px";
yy2=0.85*yy+"px";
xx3=xx-200+"px";yy3=yy-150+"px";
document.getElementById("div2").style.left =xx3; 

tiempo=0;
presentacio();
pepe=rama.length+2;
for(let i=0;i<rama.length;i++){for(let j=0;j<pepe;j++){r[i][j]=0}};
valoracio();
document.body.style.zoom = "100%";


document.getElementById("micanvas").style.width =xx2;
document.getElementById("micanvas").style.height =yy2;




var c = document.getElementById("micanvas");
var cxt = c.getContext("2d");


//cxt.fillStyle = "red";
//cxt.fillRect(0, 0, 2000, 1075);


cxt.beginPath();
cxt.moveTo(10,20);
for(let i=0;i<42;i++){cxt.quadraticCurveTo(linees[0][4*i],linees[0][4*i+1],linees[0][4*i+2],linees[0][4*i+3]);};
if(rama[0][1].length!=0){inici=10}else{inici=anchorrama};
cxt.moveTo(10,inici+20);
for(let i=0;i<42;i++){cxt.quadraticCurveTo(linees[0][4*i],linees[0][4*i+1]+inici,linees[0][4*i+2],linees[0][4*i+3]+inici);}
for(let j=1;j<total*2;j++){
if(rama[0][1].length!=0&&j!=2*Math.floor(j/2)){inici+=anchorrama}else{inici+=10};
cxt.moveTo(10,inici+20);
for(let i=0;i<42;i++){cxt.quadraticCurveTo(linees[0][4*i],linees[0][4*i+1]+inici,linees[0][4*i+2],linees[0][4*i+3]+inici);}
}

cxt.stroke();

 


for(let i=1;i<100;i++){
pos=i*50;
cxt.fillStyle = "grey"; // Definimos el color para rellenar el rectangulo
cxt.fillRect(pos,0,1,1075); // Dibuja un rectangulo relleno - fillRect(x,y,width,height)


cxt.fillStyle = "black";
cxt.font = "15px Calibri, Arial";  // Fuente para el texto
cxt.fillText(i,pos,15);  // Texto relleno
}
//alert("hola");



//alert(xx+"   "+yy);

//alert(Math.round(window.devicePixelRatio * 100));
}


function presentacio()
{
if(tiempo==2){clearTimeout(tempor);document.getElementById("div1").style.visibility="hidden";};
tiempo++;
if(tiempo<3){tempor = setTimeout("presentacio()", 1000)};

}

window.presentacio = presentacio

function valoracio()
{
	total=rama.length;
//alert("Total "+total);
parcial1=0;parcial2=0;
for(let i=0;i<total;i++){if(rama[i][9]==0){if(rama[i][1].length==0){parcial2++};parcial1++};};
//alert("Parcial2 "+parcial2);
interrama=2*total-parcial2;
anchorrama=Math.floor((1075-10*interrama)/total);
for(let i=0;i<total;i++){ocupacio[i]=0}
//alert("parcial2 "+parcial2+" Interrama "+interrama+" Anchorrama "+anchorrama);

//for(i=0;i<total;i++){for(j=1;j<total;j++){for(k=0;k<rama[i][1].length;k++){if(rama[i][1][k]==j){r[i][j]=1;}}}};
//for(i=0;i<rama.length;i++){for(j=1;j<rama.length;j++){r[i][0]+=r[i][j]}};
//r[0][total]=1;

//for(i=0;i<total;i++){r[0][total+1]+=r[i][0]};r[0][total+1]=r[0][total+1]*2+r[0][total]+1;





}


