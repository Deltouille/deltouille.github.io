let score;
let scoreglobalJoueur1;
let scoreglobalJoueur2;
scoreglobalJoueur1 = 0;
scoreglobalJoueur2 = 0;
var dice;
score = 0;

//Initialisation des scores a 0 des deux joueurs
document.getElementById('player1-global-score').innerText = '0';
document.getElementById('player2-global-score').innerText = '0';
document.getElementById('player1-round-score').innerText = '0';
document.getElementById('player2-round-score').innerText = '0';
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
    document.getElementById('player1-global-score').innerText = '0';
    document.getElementById('player2-global-score').innerText = '0';
    document.getElementById('player1-round-score').innerText = '0';
    document.getElementById('player2-round-score').innerText = '0';
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
            document.getElementById('player1-round-score').innerText = score;
            document.getElementById('player1').classList.toggle('current');
            document.getElementById('player2').classList.toggle('current');
            document.getElementById('player1-name').classList.toggle('inactiveplayer');
            document.getElementById('player2-name').classList.toggle('inactiveplayer');
            
        }
        document.getElementById('player1-round-score').innerText = score;
    }else{
        if(dice == 1){
            score = 0;
            document.getElementById('player2-round-score').innerText = score;
            document.getElementById('player1').classList.toggle('current');
            document.getElementById('player2').classList.toggle('current');
            document.getElementById('player1-name').classList.toggle('inactiveplayer');
            document.getElementById('player2-name').classList.toggle('inactiveplayer');
            
        }
        document.getElementById('player2-round-score').innerText = score;
    }
    
});

document.getElementById('btn-hold').addEventListener('click', function(){
    console.log(score);
    if(document.getElementById('player1').classList.contains('current')){
        scoreglobalJoueur1 = scoreglobalJoueur1 + score;
        score = 0;
        document.getElementById('player1-global-score').innerText = scoreglobalJoueur1;
        document.getElementById('player1').classList.toggle('current');
        document.getElementById('player2').classList.toggle('current');
        document.getElementById('player1-name').classList.toggle('inactiveplayer');
        document.getElementById('player2-name').classList.toggle('inactiveplayer');
    }else{
        scoreglobalJoueur2 = scoreglobalJoueur2 + score;
        score = 0;
        document.getElementById('player2-global-score').innerText = scoreglobalJoueur2;
        document.getElementById('player1').classList.toggle('current');
        document.getElementById('player2').classList.toggle('current');
        document.getElementById('player1-name').classList.toggle('inactiveplayer');
        document.getElementById('player2-name').classList.toggle('inactiveplayer');
    }
    
    if(scoreglobalJoueur1 >= 100){
        alert('Le Joueur 1 a gagner la partie');
        score = 0;
        scoreglobalJoueur1 = 0;
        document.getElementById('player1-global-score').innerText = scoreglobalJoueur1;
        document.getElementById('player1-round-score').innerText = score;
        document.getElementById('dice1').style.display = "none";
        document.getElementById('dice2').style.display = "none";
        document.getElementById('dice3').style.display = "none";
        document.getElementById('dice4').style.display = "none";
        document.getElementById('dice5').style.display = "none";
        document.getElementById('dice6').style.display = "none";
    }else if(scoreglobalJoueur2 >= 100){
        alert('Le Joueur 2 a gagner la partie');
        score = 0;
        scoreglobalJoueur2 = 0;
        document.getElementById('player2-global-score').innerText = scoreglobalJoueur2;
        document.getElementById('player2-round-score').innerText = score;
        document.getElementById('dice1').style.display = "none";
        document.getElementById('dice2').style.display = "none";
        document.getElementById('dice3').style.display = "none";
        document.getElementById('dice4').style.display = "none";
        document.getElementById('dice5').style.display = "none";
        document.getElementById('dice6').style.display = "none";
    }
    console.log('joueur 1 ' + scoreglobalJoueur1);
    console.log('joueur 2 ' + scoreglobalJoueur2); 
});



