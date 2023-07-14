import {PosicioBranca, branca } from "./ramas.js";

let xx,yy,xx2,yy2;
let SM=[];
let Cadenes=[[]];
let CadenesGerma=[[]];
let SMenUs;
let salidas=0;
let Linees=[];
let Ample_Branca;
let Curves=[];
let imagen=[];
let germanes;
Curves[0]=[35,15,62,22,82,25,114,20,139,18,161,20,
191,25,206,21,252,18,273,23,311,26,345,22,
385,15,400,22,417,25,440,20,463,18,480,20,
491,25,514,21,523,18,537,23,556,26,575,22,
600,20,615,17,628,12,639,15,652,22,682,25,
714,20,739,17,761,20,791,25,806,21,852,18,
873,23,911,26,945,22,985,18,1000,20,1017,23,
1040,18,1063,17,1080,20,1091,23,1114,21,1123,18,
1137,22,1156,25,1175,20,1200,17,1215,15,1228,14,
1235,16,1262,21,1282,24,1314,20,1339,18,1361,20,
1391,25,1406,21,1435,15,1462,22,1482,25,1514,20,
1539,18,1561,20,1591,25,1606,21,1652,18,1673,23,
1711,26,1745,22,1835,15,1862,22,1882,25,1914,20,1939,18,1961,20,1991,25,2000,21]

export function canvas0(){ // redimensiona canvas i el document

  xx=window.screen.width;
  yy=window.screen.height;
  xx2=0.95*xx+"px";
  yy2=0.85*yy+"px";

  document.body.style.zoom = "100%";

  document.getElementById("micanvas").style.width =xx2;
  document.getElementById("micanvas").style.height =yy2;

  AmpleBranca();
}

//Calcula l'aplaria de la branca en la posició inicial
let AmpleBranca=function(){
	let parcial1=0;
	for(let i=0;i<branca.length;i++){
		if(branca[i].nivell==0){ // el 0 ha de ser una variable que canviarà amb la redimensió.
		
		  for(let j=0;j<branca.length;j++){
			if(branca[i].nom==branca[j].mare){
			  parcial1++;
			}
		  }
		  if(parcial1==0){salidas++;}
		   parcial1=0
		};
	};
	parcial1=0;
	for(let i=0;i<branca.length;i++){
	  if(branca[i].germana=="") parcial1++;
	}
	germanes=branca.length-parcial1;
	Ample_Branca=Math.floor((0.85*yy-15*(2*branca.length+1-salidas))/salidas) // He definit l'espai entre branques com a 15, es pot canviar.
	SuperMare(); 
  }
  
  let SuperMare=function(){ // detecta els registres que eixen des de l'arrel.
  
	let contador=0;
	for(let i=0;i<branca.length;i++){
	  if(branca[i].mare==""&&branca[i].germana==""){
		SM[contador]=branca[i].nom;
		contador++;
	  }
	}
	Cadenes[0][0]=SM[0]; //Defeneix el primer element de la primera cadena,
	SMenUs=0;
	Cadenesf(SMenUs,0) 
  }
  
  function Cadenesf(parametre,posicio){  // crea les cadenes de subbranques.
  
	for(let i=posicio;i<branca.length;i++){
	  let contador=0;
	  for(let j=0;j<branca.length;j++){
	   if(branca[j].mare==Cadenes[parametre][i]&&contador==0){
		 Cadenes[parametre][i+1]=branca[j].nom;
  
		 contador=1;
	   }
	  }
	}  
  
	if(Cadenes.length==salidas-germanes){
	  CadenesGermaf();
	  AfegirGermanes();
	  DefLinees();
	}
	SaltCadena(parametre);
  }
  
  let SaltCadena=function(parametre2){ // Compara les filles que té un registre i les que ja hem utilitzat i crea la nova cadena.
  
	if(Cadenes[parametre2].length>1){
	  let j=Cadenes.length; 
	  Cadenes.push();
	  Cadenes[j]=[];
  
	  // filles del registre.
	  let contador=0;
	  for(let i=0;i<branca.length;i++){
		if(branca[i].mare==Cadenes[parametre2][Cadenes[parametre2].length-2]){
		  contador++; 
		} 
	  } 
	  // filles utilitzades.
	  let contador2=1;
	  for(let i=1;i<Cadenes.length;i++){
		if(Cadenes[i][Cadenes[parametre2].length-2]==Cadenes[parametre2][Cadenes[parametre2].length-2]&&Cadenes[i][Cadenes[parametre2].length-1]!=Cadenes[i-1][Cadenes[parametre2].length-1]){
		  contador2++;
		}
	  } 
  
	  if(contador2<contador){
		
		let i = 0;
		while (Cadenes[j-1][i]) {      
		Cadenes[j][i]=Cadenes[j-1][i];
		i++;
		}
		
	  let contador3=0;        
	  for(let k=0;k<branca.length;k++){ 
		if(Cadenes[j][i-2]==branca[k].mare){
		  contador3++;
		  if(contador3==contador2+1){ 
			Cadenes[j][i-1]=branca[k].nom;
		  }
		}
	  }    
		Cadenesf(j,i-1);
	  }
	  if(contador2==contador){ //assigna el següent element de la cadena baixant un nivell
		if(Cadenes[parametre2].length>2){
		  let contador=0;
		  for(let i=0;i<branca.length;i++){
			if(branca[i].mare==Cadenes[parametre2][Cadenes[parametre2].length-3]){
			  contador++; 
			}
		  }
		  let contador2=1;
		  for(let i=1;i<Cadenes.length;i++){
			if(Cadenes[i][Cadenes[parametre2].length-3]==Cadenes[parametre2][Cadenes[parametre2].length-3]&&Cadenes[i][Cadenes[parametre2].length-2]!=Cadenes[i-1][Cadenes[parametre2].length-2]){
			  contador2++;
			}
		  };
		  let i = 0;
		  while (Cadenes[j-1][i]) {      
		  Cadenes[j][i]=Cadenes[j-1][i];
		  i++;
		  }
		Cadenes[j].pop();
  
		let contador3=0;        
		for(let k=0;k<branca.length;k++){ 
		  if(Cadenes[j][i-3]==branca[k].mare){
			contador3++;
			if(contador3==contador2+1){
			  Cadenes[j][i-2]=branca[k].nom;
			}
		  }
		}    
		Cadenesf(j,i-2);
		}
		if(Cadenes[parametre2].length==2){
		  SMenUs++;
		  Cadenes[j][0]=SM[SMenUs];
		  Cadenesf(j,0);
		}
	  }
	}
	if(Cadenes[parametre2].length==1){
	  if(SM.length>SMenUs){
	  SMenUs++;
	  Cadenes.push();
	  Cadenes[Cadenes.length]=[];
	  Cadenes[Cadenes.length-1][0]=SM[SMenUs];
	  Cadenesf(Cadenes.length-1,0);
	  }
	}
  
  }
  
  let CadenesGermaf=function(){// Denota amb 1 si la l'element de la cadena es filla.
	for(let j=0;j<Cadenes[0].length;j++){
	  CadenesGerma[0][j]=1;
	}
	for(let i=1;i<Cadenes.length;i++){
	  CadenesGerma.push();
	  CadenesGerma[i]=[];
	  for(let j=0;j<Cadenes[i].length;j++){
	  CadenesGerma[i][j]=1;
	  }
	}
  //  for(let i=0;i<Cadenes.length;i++){alert(CadenesGerma[i][0]+"     "+CadenesGerma[i][1]+"      "+CadenesGerma[i][2])}
   OrdenFilles();
  }
  
  let OrdenFilles=function(){// ordena les cadenes de forma que les anteriors en el temps estiguen primeres.
	let Maxim=0;
	for(let i=0;i<Cadenes.length;i++){
	  Maxim=Math.max(Maxim, Cadenes[i].length);
	}
	for(let k=Maxim-1;k>=0;k--){
	  for(let i=0;i<Cadenes.length;i++){
		for(let j=i+1;j<Cadenes[i].length;j++){
		  if(Cadenes[i][k]&&Cadenes[j][k]){
			let Primera;
			for(let m=0;m<branca.length;m++){
			  if(Cadenes[i][k]==branca[m].nom) Primera=branca[m].inici;
			}
			let Segona;
			for(let m=0;m<branca.length;m++){
			  if(Cadenes[j][k]==branca[m].nom) Segona=branca[m].inici;
			}
			if(Segona<Primera){
			  let Canvi1=[...Cadenes[i]];
			  Cadenes[i]=[...Cadenes[j]];
			  Cadenes[j]=[...Canvi1];
			}
		  }
		}
	  }
	}
  }
  
  let AfegirGermanes=function (){// inseta els registres de germanes a les cadenes de filles ja creades.
	for(let k=0;k<branca.length;k++){
	let contador=0;
	  for(let i=Cadenes.length-1;i>=0;i--){
		for(let j=0;j<Cadenes[i].length;j++){
		  if(branca[k].germana==Cadenes[i][j]&&contador==0){
			contador=1;
  
			Cadenes.push();
			Cadenes[Cadenes.length]=[]
			for(let m=Cadenes.length-1;m>i;m--){//**************************************
			}
		  }
		}
	  }
	}
  
  }
  
  
  
  let DefLinees=function(){
  //for(i=0;i<Cadenes.length;i++){alert(Cadenes[i][0]+"   "+Cadenes[i][1]+"     "+Cadenes[i][2])}
	for(let j=0;j<Cadenes[0].length;j++){//Linees del 0
	  Linees[j]=[];
	  Linees[j][0]=Cadenes[0][j];
	  Linees[j][1]=15*(j+1);
	  Linees[j][2]=inicif(Cadenes[0][j]);
	  Linees[j][3]=1;
	}
	// tanca la última del 0
	Linees[Linees.length]=[];
	Linees[Linees.length-1][0]=Cadenes[0][Linees.length-2];
	Linees[Linees.length-1][1]=Linees[Linees.length-2][1]+Ample_Branca;
	Linees[Linees.length-1][2]=inicif(Cadenes[0][Linees.length-2]);
	Linees[Linees.length-1][3]=0;
	
	for(let i=1;i<Cadenes.length;i++){
	
	// tanca la resta de la cadena
	  if(Cadenes[i-1].length>1){
		for(let j=Cadenes[i-1].length-2;j>=0;j--){
		  if(Cadenes[i][j]!=Cadenes[i-1][j]){
			Linees[Linees.length]=[];
			Linees[Linees.length-1][0]=Cadenes[i-1][j];
			Linees[Linees.length-1][1]=Linees[Linees.length-2][1]+15;
			Linees[Linees.length-1][2]=inicif(Cadenes[i-1][j]);
			Linees[Linees.length-1][3]=0;    
		  }
		}
	  }
   
	  // fa les línies de la cadena
	  for(let j=0;j<Cadenes[i].length;j++){
		if(Cadenes[i][j]!=Cadenes[i-1][j]){
		  Linees[Linees.length]=[];
		  Linees[Linees.length-1][0]=Cadenes[i][j];
		  Linees[Linees.length-1][1]=Linees[Linees.length-2][1]+15;
		  Linees[Linees.length-1][2]=inicif(Cadenes[i][j]);
		  Linees[Linees.length-1][3]=1;
		}
	  }
	  // tanca la última del la cadena
	  Linees[Linees.length]=[];
	  Linees[Linees.length-1][0]=Linees[Linees.length-2][0];
	  Linees[Linees.length-1][1]=Linees[Linees.length-2][1]+Ample_Branca;
	  Linees[Linees.length-1][2]=inicif(Linees[Linees.length-2][0]); 
	  Linees[Linees.length-1][3]=0; 
	} 
	
	// tanca la resta de la última cadena.
	if(Cadenes[Cadenes.length-1].length>1){
	  for(let j=Cadenes[Cadenes.length-1].length-2;j>=0;j--){
		
		  Linees[Linees.length]=[];
		  Linees[Linees.length-1][0]=Cadenes[Cadenes.length-1][j];
		  Linees[Linees.length-1][1]=Linees[Linees.length-2][1]+15;
		  Linees[Linees.length-1][2]=inicif(Cadenes[Cadenes.length-1][j]);   
		  Linees[Linees.length-1][3]=0;
	}
	}
	 
  //   for(let i=0;i<Linees.length;i++){
  //  alert(Linees[i][0]+"    "+Linees[i][1]+"    "+Linees[i][2]);
  // }
	Dibuixa();
  }
  
  let Dibuixa=function(){
  
	let c = document.getElementById("micanvas");
	let cxt = c.getContext("2d");
	
  
  
	// donem colors a les branques.
	cxt.beginPath();
	cxt.moveTo(10,35);
	for(let i=0;i<41;i++){
	  cxt.quadraticCurveTo(Curves[0][4*i]+Linees[0][2],Curves[0][4*i+1]+Linees[0][1],Curves[0][4*i+2]+Linees[0][2],Curves[0][4*i+3]+Linees[0][1]);
	}; 
	cxt.lineTo(2052,608);
	for(let i=40;i>=0;i--){
	  cxt.quadraticCurveTo(Curves[0][4*i]+Linees[11][2],Curves[0][4*i+1]+Linees[11][1],Curves[0][4*i-2]+Linees[11][2],Curves[0][4*i-1]+Linees[11][1]);
	};
	cxt.quadraticCurveTo(Curves[0][0]+Linees[11][2],18+Linees[11][1],10,19+Linees[11][1]);
	cxt.closePath();
	cxt.globalAlpha=0.45;
	cxt.fillStyle = "red"; 
	cxt.fill();   
  
  // dibuixem les linies de les branques
	cxt.beginPath();
  
	for(let j=0;j<Linees.length;j++){
	  cxt.moveTo(10+Linees[j][2],Linees[j][1]+20);
	  for(let i=0;i<42;i++){
		cxt.quadraticCurveTo(Curves[0][4*i]+Linees[j][2],Curves[0][4*i+1]+Linees[j][1],Curves[0][4*i+2]+Linees[j][2],Curves[0][4*i+3]+Linees[j][1]);
	  }; 
	}
  cxt.globalAlpha=1;
	cxt.stroke();
  //  alert(Linees[0][2]+"   "+Linees[0][1]+"    "+Linees[6][2]+"     "+Linees[6][1]);
	
	for(let i=1;i<100;i++){
	  let pos=i*50;
	  cxt.fillStyle = "grey"; // Definimos el color para rellenar el rectangulo
	  cxt.fillRect(pos,0,1,1075); // Dibuja un rectangulo relleno - fillRect(x,y,width,height)
  
  //cxt.fillStyle = "red";
  //cxt.fillRect(0, 0, 2000, 1075);
	  cxt.fillStyle = "black";
	  cxt.font = "15px Calibri, Arial";  // Fuente para el texto
	  cxt.fillText(125*i-3000,pos,15);  // Texto relleno años
	}
   
	 cxt.fillStyle = "black";
	 cxt.font = "18px Calibri, Arial";
  
	 for(let i=0;i<Linees.length;i++){
	   if(Linees[i][3]==1){
		 imagen[i] = new Image(); 
		 cxt.fillText(Linees[i][0],Linees[i][2]+15,Linees[i][1]+35);
		 for(let j=0;j<branca.length;j++){
		   if(Linees[i][0]==branca[j].nom){
			 imagen[i].src = 'buscar.png'; // Se define la ruta de la imagen
			 imagen[i].onload = function(){ // Mediante el evento onload se espera a que se cargue la imagen
			 cxt.drawImage(imagen[i], Linees[i][2]+15,Linees[i][1]+35); // Dibuja la imagen en la posicion indicada
			 }
		   }         
		 }
	   }
	} 
	
  }
  
  function inicif(triabranca){// Defineix l'inici de cada línia
	for(let i=0;i<branca.length;i++){
	 if(triabranca==branca[i].nom){
	 return Math.floor((branca[i].inici*2+6000)/5)
	 }
	}
  }


window.AmpleBranca = AmpleBranca;
window.SuperMare = SuperMare;
window.Cadenesf = Cadenesf;
window.SaltCadena= SaltCadena;
window.CadenesGermaf= CadenesGermaf;
window.OrdenFilles= OrdenFilles;
window.AfegirGermanes= AfegirGermanes;
window.DefLinees= DefLinees;
window.Dibuixa= Dibuixa;
window.inicif= inicif;



