

var nouveau_jeu = document.getElementById("img_new_game");   // ensuite mise à zero des compteurs
var roll_dice = document.getElementById("img_roll_dice");    // chiffre aléatoire entre 1 et 6
var hold_score = document.getElementById("img_add_score");  // ajouter score au global

var count_j1 = document.getElementById("score_round_joueur1");       // score du joueur 1
var global_j1 = document.getElementById("score_global_joueur1");

var count_j2 = document.getElementById("score_round_joueur2");     // score du joueur 2
var global_j2 = document.getElementById("score_global_joueur2");


var compteur_current_joueur1 = 0 ;
var compteur_global_joueur1 = 0;
var compteur_current_joueur2 = 0;
var compteur_global_joueur2 = 0;

var tirage = 0;
var joueur = 2;

function debut_partie () {   
    compteur_current_joueur1 = 0;
    compteur_global_joueur1 = 0;
    compteur_current_joueur2 = 0;
    compteur_global_joueur2 = 0;

    count_j1.textContent =  compteur_current_joueur1;
    global_j1.textContent = compteur_global_joueur1;
    count_j2.textContent = compteur_current_joueur2;
    global_j2.textContent = compteur_global_joueur2; 
    joueur = 2 ;    
    
}

var dice1 = document.createElement("img");
var dice2 = document.createElement("img");
var dice3 = document.createElement("img");
var dice4 = document.createElement("img");
var dice5 = document.createElement("img");
var dice6 = document.createElement("img");

dice1.id = "des";
dice2.id = "des";
dice3.id = "des";
dice4.id = "des";
dice5.id = "des";
dice6.id = "des";

dice1.src = "img/dice-1.svg";
dice2.src = "img/dice-2.svg";
dice3.src = "img/dice-3.svg";
dice4.src = "img/dice-4.svg";
dice5.src = "img/dice-5.svg";
dice6.src = "img/dice-6.svg";

var dot1 = document.createElement("img");
dot1.src = "img/dot.svg";
dot1.id = "dotP1";

var dot2 = document.createElement("img");
dot2.src = "img/dot.svg";
dot2.id = "dotP2";




function jeter_des(){
    if (compteur_global_joueur1 >= 100 || compteur_global_joueur2 >= 100){
        return;
    }
        count_j1.textContent = compteur_current_joueur1;
        global_j1.textContent = compteur_global_joueur1;
        count_j2.textContent = compteur_current_joueur2;
        global_j2.textContent = compteur_global_joueur2;

        

        tirage = Math.floor(Math.random()*6)+1;

        if (tirage == 1) {
            
            img_des.removeChild(des);
            img_des.appendChild(dice1);
            tirage = 1;

        } else if (tirage == 2) {
            
            img_des.removeChild(des);
            img_des.appendChild(dice2);
            tirage = 2;
            
        }
        else if (tirage == 3) {
            img_des.removeChild(des);
            img_des.appendChild(dice3);
            tirage = 3;
            
        }
        else if (tirage == 4) {
            
            img_des.removeChild(des);
            img_des.appendChild(dice4);
            tirage = 4;
            
        }
        else if (tirage == 5) {
            
            img_des.removeChild(des);
            img_des.appendChild(dice5);
            tirage = 5;
            
        }
        else if (tirage == 6) {
           
            img_des.removeChild(des);
            img_des.appendChild(dice6);
            tirage = 6;
            
        }
    
        
         if (((joueur % 2) == 0)){

            if (tirage != 1) {
                conteneur_dot1.append(dot1);
                document.getElementById("box_joueur1").style.backgroundColor ="rgb(238, 227, 227)";
                compteur_current_joueur1 += tirage;
                count_j1.textContent = compteur_current_joueur1;
                
            }
            else  {
                compteur_current_joueur1 = 0;
                count_j1.textContent = compteur_current_joueur1;
                joueur += 1;
                conteneur_dot1.removeChild(dot1);
                document.getElementById("box_joueur1").style.backgroundColor="white";
                
            }
                
        } 

        else  {

            if (tirage!=1) {
                conteneur_dot2.append(dot2);
                document.getElementById("box_joueur2").style.backgroundColor = "rgb(238, 227, 227)";
                compteur_current_joueur2 += tirage;
                count_j2.textContent = compteur_current_joueur2;
                
            }
            else {
                compteur_current_joueur2 = 0;
                count_j2.textContent = compteur_current_joueur2;
                joueur += 1;
                conteneur_dot1.removeChild(dot2);
                document.getElementById("box_joueur2").style.backgroundColor = "white";
                
            }
            
        }
}

function ajout_global() {
    if(compteur_global_joueur1 >= 100 || compteur_global_joueur2 >= 100){
        return;
    }
        if ((joueur % 2) == 0){
       
            compteur_global_joueur1 += compteur_current_joueur1;
            global_j1.textContent = compteur_global_joueur1;
            compteur_current_joueur1 = 0;
            count_j1.textContent = compteur_current_joueur1;
            joueur +=1;
            conteneur_dot1.removeChild(dot1);
            document.getElementById("box_joueur1").style.backgroundColor = "white";
    }
         else {

             compteur_global_joueur2 += compteur_current_joueur2;
             global_j2.textContent = compteur_global_joueur2;
             compteur_current_joueur2 = 0;
             count_j2.textContent = compteur_current_joueur2;
             joueur += 1;
            conteneur_dot2.removeChild(dot2);
            document.getElementById("box_joueur2").style.backgroundColor = "white";
    }
    }

nouveau_jeu.addEventListener("click", debut_partie);
roll_dice.addEventListener("click", jeter_des);
hold_score.addEventListener("click", ajout_global);