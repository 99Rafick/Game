const grille = document.querySelectorAll('.case')

let scorePlayer1 = document.querySelector('.score_player1')
let scorePlayer2 = document.querySelector('.score_player2')

let couleur = ['red'];

let winner = null;

const combinaison_gagnantes = 
[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]     


let validation = (tab1, tab2) => {

    const ok = [];

    for(let k = 0; k < tab1.length; k++){


        for(let i = 0; i < tab2.length; i++){
            if(tab1[k] == tab2[i]){
                ok.push('ok')
            }
        }
    }

    if(ok.length >= 3) return true;

}

function initialisation (gagnant) {

    grille.forEach(el => {
        let div = el.firstChild;

        if(div != null){
            el.removeChild(div)
        }

        if(el.classList.contains('take')){
            el.classList.remove('take');
        }
    })

    if(gagnant) {
        couleur = ['black']
    }else {
        couleur = ['red']
    }
    player1 = []
    player2 = []


}
    

let player1 = []
let player2 = []



grille.forEach((el, k) => {


    el.addEventListener('click', () => {

    

        if(el.classList.contains('take')) return;
        
        let l = couleur.length - 1
        let motif = document.createElement('div')

        if(couleur[l] ==  'red'){
            
            motif.setAttribute('class', 'motif1')
            el.classList.add('take')
            couleur.push('black')
            el.appendChild(motif)
            player1.push(k)

            combinaison_gagnantes.forEach(el => {
                if(validation(el, player1)) {
                    let score1 = parseInt(scorePlayer1.textContent);
                    score1 = score1 + 1;
                    scorePlayer1.textContent = score1;
                    winner = true;

                    initialisation(winner);

                   
                    
                }
            })

            if(player1.length > 4){
                initialisation();
            }
            

        }else {
            motif.setAttribute('class', 'motif2')
            el.classList.add('take')
            couleur.push('red')
            el.appendChild(motif)
            player2.push(k)

            combinaison_gagnantes.forEach(el => {
                if(validation(el, player2)){
                    let score2 = parseInt(scorePlayer2.textContent);
                    score2 = score2 + 1;
                    scorePlayer2.textContent = score2;
                    winner = false;

                    initialisation();
                
                }
            })

            if(player2.length > 4){
                initialisation();
            }
        }

        
    })

})













