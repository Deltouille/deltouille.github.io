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
    //On switch jusqu'a tomber sur la valeur du dé et on affiche le dé en question tout en cachant les autres
    //On ajoute la valeur du dé au score courant
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
    //Si le joueur courrant est le joueur 1 alors on lui ajoute son score courrant
    //Et si le joueur courrant est le joueur 1 et qu'il tire le dé 1 on met son score courant a 0 et on passe au joueur 2
    //SINON
    //Si le joueur courrant est le joueur 2 alors on lui ajoute son score courrant
    //Et si le joueur courrant est le joueur 2 et qu'il tire le dé 1 on met son score courant a 0 et on passe au joueur 2
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
    //Si le joueur courrant est le joueur 1 alors on ajoute son score courrant au score global, on remet son score courant a 0 et on passe au joueur 2
    //SINON
    //Si le joueur courrant est le joueur 2 alors on ajoute son score courrant au score global, on remet son score courant a 0 et on passe au joueur 1
    if(document.getElementById('player1').classList.contains('current')){
        scoreglobalJoueur1 = scoreglobalJoueur1 + score;
        score = 0;
        document.getElementById('player1-global-score').innerText = scoreglobalJoueur1;
        document.getElementById('player1-round-score').innerText = 0;
        document.getElementById('player1').classList.toggle('current');
        document.getElementById('player2').classList.toggle('current');
        document.getElementById('player1-name').classList.toggle('inactiveplayer');
        document.getElementById('player2-name').classList.toggle('inactiveplayer');
    }else{
        scoreglobalJoueur2 = scoreglobalJoueur2 + score;
        score = 0;
        document.getElementById('player2-global-score').innerText = scoreglobalJoueur2;
        document.getElementById('player2-round-score').innerText = 0;
        document.getElementById('player1').classList.toggle('current');
        document.getElementById('player2').classList.toggle('current');
        document.getElementById('player1-name').classList.toggle('inactiveplayer');
        document.getElementById('player2-name').classList.toggle('inactiveplayer');
    }
    //Si le score du joueur 1 est supérieur ou égal a 100 alors on affiche un message disant qu'il a gagner et on remet tout a 0 
    //SINON
    //Si le score du joueur 2 est supérieur ou égal a 100 alors on affiche un message disant qu'il a gagner et on remet tout a 0 
    if(scoreglobalJoueur1 >= 100){
        alert('Le Joueur 1 a gagner la partie');
        score = 0;
        scoreglobalJoueur1 = 0;
        scoreglobalJoueur2 = 0;
        document.getElementById('player1-global-score').innerText = scoreglobalJoueur1;
        document.getElementById('player1-round-score').innerText = score;
        document.getElementById('player2-global-score').innerText = scoreglobalJoueur2;
        document.getElementById('player2-round-score').innerText = score;
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
        scoreglobalJoueur1 = 0;
        document.getElementById('player1-global-score').innerText = scoreglobalJoueur1;
        document.getElementById('player1-round-score').innerText = score;
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



