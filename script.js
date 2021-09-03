let score;
let scoreTotalJoueur1;
let scoreTotalJoueur2;
scoreTotalJoueur1 = 0;
scoreTotalJoueur2 = 0;
var dice;
score = 0;

//Initialisation des scores a 0 des deux joueurs
document.getElementById('player1-total-score').innerText = '0';
document.getElementById('player2-total-score').innerText = '0';
document.getElementById('player1-current-score').innerText = '0';
document.getElementById('player2-current-score').innerText = '0';
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
    document.getElementById('player1-total-score').innerText = '0';
    document.getElementById('player2-total-score').innerText = '0';
    document.getElementById('player1-current-score').innerText = '0';
    document.getElementById('player2-current-score').innerText = '0';
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
            document.getElementById('dice2').style.display = "none";
            document.getElementById('dice3').style.display = "none";
            document.getElementById('dice4').style.display = "none";
            document.getElementById('dice5').style.display = "none";
            document.getElementById('dice6').style.display = "none";
            score = score + 1;
            break;
        case 2:
            document.getElementById('dice2').style.display = "block";
            document.getElementById('dice1').style.display = "none";
            document.getElementById('dice3').style.display = "none";
            document.getElementById('dice4').style.display = "none";
            document.getElementById('dice5').style.display = "none";
            document.getElementById('dice6').style.display = "none";
            score = score + 2;
            break;
        case 3:
            document.getElementById('dice3').style.display = "block";
            document.getElementById('dice2').style.display = "none";
            document.getElementById('dice1').style.display = "none";
            document.getElementById('dice4').style.display = "none";
            document.getElementById('dice5').style.display = "none";
            document.getElementById('dice6').style.display = "none";
            score = score + 3;
            break;
        case 4:
            document.getElementById('dice4').style.display = "block";
            document.getElementById('dice2').style.display = "none";
            document.getElementById('dice3').style.display = "none";
            document.getElementById('dice1').style.display = "none";
            document.getElementById('dice5').style.display = "none";
            document.getElementById('dice6').style.display = "none";
            score = score + 4;
            break;
        case 5:
            document.getElementById('dice5').style.display = "block";
            document.getElementById('dice2').style.display = "none";
            document.getElementById('dice3').style.display = "none";
            document.getElementById('dice4').style.display = "none";
            document.getElementById('dice1').style.display = "none";
            document.getElementById('dice6').style.display = "none";
            score = score + 5;
            break;
        case 6:
            document.getElementById('dice6').style.display = "block";
            document.getElementById('dice2').style.display = "none";
            document.getElementById('dice3').style.display = "none";
            document.getElementById('dice4').style.display = "none";
            document.getElementById('dice5').style.display = "none";
            document.getElementById('dice1').style.display = "none";
            score = score + 6;
            break;     
    }

    console.log('score = ' + score);
    console.log('dice = ' + dice);
    if(document.getElementById('player1').classList.contains('current')){
        if(dice == 1){
            score = 0;
            document.getElementById('player1').classList.toggle('current');
            document.getElementById('player2').classList.toggle('current');
        }
        document.getElementById('player1-current-score').innerText = score;
    }else{
        if(dice == 1){
            score = 0;
            document.getElementById('player1').classList.toggle('current');
            document.getElementById('player2').classList.toggle('current');
        }
        document.getElementById('player2-current-score').innerText = score;
    }
    
});

document.getElementById('btn-hold').addEventListener('click', function(){
    console.log(score);
    if(document.getElementById('player1').classList.contains('current')){
        scoreTotalJoueur1 = scoreTotalJoueur1 + score;
        score = 0;
        document.getElementById('player1-total-score').innerText = scoreTotalJoueur1;
        document.getElementById('player1').classList.toggle('current');
        document.getElementById('player2').classList.toggle('current');
    }else{
        scoreTotalJoueur2 = scoreTotalJoueur2 + score;
        score = 0;
        document.getElementById('player2-total-score').innerText = scoreTotalJoueur2;
        document.getElementById('player1').classList.toggle('current');
        document.getElementById('player2').classList.toggle('current');
    }
    
    if(scoreTotalJoueur1 >= 100){
        alert('Le Joueur 1 a gagner la partie');
        score = 0;
        scoreTotalJoueur1 = 0;
        document.getElementById('player1-total-score').innerText = scoreTotalJoueur1;
        document.getElementById('dice1').style.display = "none";
        document.getElementById('dice2').style.display = "none";
        document.getElementById('dice3').style.display = "none";
        document.getElementById('dice4').style.display = "none";
        document.getElementById('dice5').style.display = "none";
        document.getElementById('dice6').style.display = "none";
    }else if(scoreTotalJoueur2 >= 100){
        alert('Le Joueur 2 a gagner la partie');
        score = 0;
        scoreTotalJoueur2 = 0;
        document.getElementById('player2-total-score').innerText = scoreTotalJoueur2;
        document.getElementById('dice1').style.display = "none";
        document.getElementById('dice2').style.display = "none";
        document.getElementById('dice3').style.display = "none";
        document.getElementById('dice4').style.display = "none";
        document.getElementById('dice5').style.display = "none";
        document.getElementById('dice6').style.display = "none";
    }
    console.log('joueur 1 ' + scoreTotalJoueur1);
    console.log('joueur 2 ' + scoreTotalJoueur2); 
});



