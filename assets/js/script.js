var c = document.getElementById("Partie1Exercice1");
var ctx = c.getContext("2d");

// Dimensions de Partie1Exercice1 : 400px x 400px

// Murs
ctx.beginPath(); // Débute un chemin
ctx.moveTo(50,100); // Démarre le tracé à partir de ces coordonnées
ctx.lineTo(350,100); // Segment jusqu'à ces coordonnées
ctx.lineTo(350,400);
ctx.lineTo(50,400);
ctx.closePath(); // Fermeture du chemin
ctx.fillStyle = "lightblue";
ctx.fill();

// Toit
ctx.beginPath(); // Débute un chemin
ctx.moveTo(25,100); // Démarre le tracé à partir de ces coordonnées
ctx.lineTo(375,100); // Segment jusqu'à ces coordonnées
ctx.lineTo(200,0);
ctx.closePath();
ctx.fillStyle = "brown";
ctx.fill();

// Première fenêtre
ctx.beginPath(); // Débute un chemin
ctx.moveTo(100,150); // Démarre le tracé à partir de ces coordonnées
ctx.lineTo(150,150); // Segment jusqu'à ces coordonnées
ctx.lineTo(150,200);
ctx.lineTo(100,200);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();

// Carreaux fenêtre 1
ctx.beginPath(); // Débute un chemin
ctx.moveTo(100,175); // Démarre le tracé à partir de ces coordonnées
ctx.lineTo(150,175); // Segment jusqu'à ces coordonnées
ctx.closePath();
ctx.stroke();
ctx.strokeStyle = "black";

ctx.beginPath(); // Débute un chemin
ctx.moveTo(125,150); // Démarre le tracé à partir de ces coordonnées
ctx.lineTo(125,200); // Segment jusqu'à ces coordonnées
ctx.closePath();
ctx.stroke();
ctx.strokeStyle = "black";

// Deuxième fenêtre
ctx.beginPath(); // Débute un chemin
ctx.moveTo(300,150); // Démarre le tracé à partir de ces coordonnées
ctx.lineTo(250,150); // Segment jusqu'à ces coordonnées
ctx.lineTo(250,200);
ctx.lineTo(300,200);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();

// Carreaux fenêtre 2
ctx.beginPath(); // Débute un chemin
ctx.moveTo(300,175); // Démarre le tracé à partir de ces coordonnées
ctx.lineTo(250,175); // Segment jusqu'à ces coordonnées
ctx.closePath();
ctx.stroke();
ctx.strokeStyle = "black";

ctx.beginPath(); // Débute un chemin
ctx.moveTo(275,150); // Démarre le tracé à partir de ces coordonnées
ctx.lineTo(275,200); // Segment jusqu'à ces coordonnées
ctx.closePath();
ctx.stroke();
ctx.strokeStyle = "black";

// Porte
ctx.beginPath(); // Débute un chemin
ctx.moveTo(175,400); // Démarre le tracé à partir de ces coordonnées
ctx.lineTo(225,400); // Segment jusqu'à ces coordonnées
ctx.lineTo(225,300);
ctx.lineTo(175,300);
ctx.closePath();
ctx.fillStyle = "grey";
ctx.fill();
