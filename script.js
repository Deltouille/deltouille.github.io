let scoreJoueur;
let score;
let joueur;
var dice;
score = 0;
scoreJoueur = 0;
joueur = 'Joueur 1';
//Initialisation des scores a 0 des deux joueurs
document.getElementById('player1-total-score').textContent = '0';
document.getElementById('player2-total-score').textContent = '0';
document.getElementById('player1-current-score').textContent = '0';
document.getElementById('player2-current-score').textContent = '0';
//Cache les images des dès
document.getElementById('dice1').style.display = "none";
document.getElementById('dice2').style.display = "none";
document.getElementById('dice3').style.display = "none";
document.getElementById('dice4').style.display = "none";
document.getElementById('dice5').style.display = "none";
document.getElementById('dice6').style.display = "none";

//Réalisation de la fonction permettant de remettre a 0 la partie
document.getElementById('btn-ng').addEventListener('click', function(){
    //Remise a 0 des scores
    document.getElementById('player1-total-score').textContent = '0';
    document.getElementById('player2-total-score').textContent = '0';
    document.getElementById('player1-current-score').textContent = '0';
    document.getElementById('player2-current-score').textContent = '0';
    //Cache les images des dès
    document.getElementById('dice1').style.display = "none";
    document.getElementById('dice2').style.display = "none";
    document.getElementById('dice3').style.display = "none";
    document.getElementById('dice4').style.display = "none";
    document.getElementById('dice5').style.display = "none";
    document.getElementById('dice6').style.display = "none";
});

document.getElementById('btn-roll').addEventListener('click', function(){
    //Onn génère un entier aléatoire entre 1 et 6
    dice = Math.floor(Math.random()*(6-1)+1);
    
    switch(dice){
        case 1:
            document.getElementById('dice1').style.display = "block";
            score = score + 1;
            break;
        case 2:
            document.getElementById('dice2').style.display = "block";
            score = score + 2;
            break;
        case 3:
            document.getElementById('dice3').style.display = "block";
            score = score + 3;
            break;
        case 4:
            document.getElementById('dice4').style.display = "block";
            score = score + 4;
            break;
        case 5:
            document.getElementById('dice5').style.display = "block";
            score = score + 5;
            break;
        case 6:
            document.getElementById('dice6').style.display = "block";
            score = score + 6;
            break;     
    }
});




