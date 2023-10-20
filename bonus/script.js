
"use strict";

mahdiCampoMinato();

function mahdiCampoMinato(){

    
    //numero bombe
    const NUM_BOMBS = 16;

    //massimo numero di tentativi
    let max_attempt;

    //array delle bombe
    let bombs;

    //punteggio giocatore
    let score;

    //fine partita
    let gameOver = false;

    //div da mostrare a fine partita
    const winEl = document.getElementById


    const btn = document.querySelector('.btn');
    btn.addEventListener("click", playGame); 

    /**
     * playGame - avvia gioco
     */


    function playGame(){

        const level = document.getElementById('choose').value;
        //numero di quadratini da generare
        let numSquare = selectLevel(level);
        // console.log(numSquare);
        // let bomb = getRndInteger(1, numSquare);

        score = 0;
        gameOver = false;

        //array bombs
        bombs = generateBombs(numSquare);

        

        //numero quadratini per lato
        const squareWidth = Math.sqrt(numSquare);
        //prendo la griglia di gioco
        const playground = document.getElementById('playground');
        //prima di riempire svuoto tutto
        playground.innerHTML = '';
        //ciclo per stampare gli squares
        for(let i = 0; i < numSquare; i++){
            //genero square
            let square = drawSquare(i+1,squareWidth);
            //appendo square al playground
            playground.append(square);

        }

    }

        /**
     * Draw a square
     * @param {any} content 
     * @param {Number} squareWidth 
     * @returns {Object} il quadratino creato
     */

    function drawSquare(content,squareWidth, fn){
        //creo nuovo elemento div
        const square = document.createElement('div');
        //aggiungo square 
        square.classList.add('square');
        square.style.width = `calc(100% / ${squareWidth})`;
        square.style.height = square.style.width;
        //stampo squares in html
        square.innerHTML = content;
        //al click..
        square.addEventListener('click',fn);
        return square;
    }

    /**
     * EventListener function on square
     * @returns {void}
     */

    function drawClick(){
        if(!this) return;
        //lo square diventa aquamarine
        this.classList.add('active');
        //e il numero nero
        this.style.color = 'black';
        console.log(this.textContent);
    }

    function selectLevel(level){
        //numero di quadratini da generare
        let numSquare;
        switch(level){
            case 'medium':
                numSquare = 81;
                break;
            case 'hard':
                numSquare = 49;
                break;
            case 'easy':
                numSquare = 100;
            }
            return numSquare;
        }

    
    function generateBombs(){
        while (bombs.length < NUM_BOMBS){
            let bomb = getRndInteger(1, numSquare);
            console.log(bomb);
            if(!bombs.includes(bomb)){
                bombs.push(bomb);
            }
        }
        console.log(bombs.length);
    }
}
