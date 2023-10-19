
"use strict";

mahdiCampoMinato();

function mahdiCampoMinato(){

const btn = document.querySelector('.btn');

btn.addEventListener('click', () =>{

    const level = document.getElementById('choose').value;

    //numero di quadratini da generare
    let numSquare = selectLevel(level);

    console.log(numSquare);
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
});

/**
 * 
 * @param {any} content 
 * @param {Number} squareWidth 
 * @returns {Object} il quadratino creato
 */

function drawSquare(content,squareWidth){
    //creo nuovo elemento div
    const square = document.createElement('div');
    //aggiungo square 
    square.classList.add('square');
    square.style.width = `calc(100% / ${squareWidth})`;
    square.style.height = square.style.width;
    //stampo squares in html
    square.innerHTML = content;
    //al click..
    square.addEventListener('click',drawClick);
    return square;
}

function drawClick(){
    //lo square diventa aquamarine
    square.classList.add('active');
    //e il numero nero
    square.style.color = 'black';
    console.log(square.textContent);
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
}


