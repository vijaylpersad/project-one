console.log('hello world')

let board = ['','','','','','','','','','','','','','','','']
const winningConditions = [
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15],
    [0,4,8,12],
    [1,5,9,13],
    [2,6,10,14],
    [3,7,11,15]
];
///gameboard:
//Column 1 [0, 4, 8, 12]
//Column 2 [1, 5, 9, 13]
//Column 3 [2, 6, 10, 14]
//Column 4 [3, 7, 11, 15]

let playerOneScore = 0
let playerTwoScore = 0
let turnCount = 1 //initial state
const playerOneScore_span = document.querySelector('.playerOneScore')
const playerTwoScore_span = document.querySelector('.playerTwoScore')
const announceTurnSpan = document.querySelector('.announceTurn') 
const announceWinner = document.querySelector('.announcer > p')
// const tile = document.querySelectorAll('.tile') //doesnt work if i do querySelectorAll -- event listener error //RESOLVED
const tiles = document.querySelectorAll('.container div')
const columnOne = document.querySelectorAll('columnOne')
const reset = document.getElementById('reset')

let currentPlayer = 1

function boardCheck() {
    for (let x = 0; x< winningConditions.length; x++){
        const tile1 = tiles[winningConditions[0]]
        const tile2 = tiles[winningConditions[1]]
        const tile3 = tiles[winningConditions[2]]
        const tile4 = tiles[winningConditions[3]]
//compare each of the tile indices to winning indices
        if (
            tile1.classList.contains('playerOneChoice') &&
            tile2.classList.contains('playerOneChoice') &&
            tile3.classList.contains('playerOneChoice') &&
            tile4.classList.contains('playerOneChoice')
            )
            {
                announceWinner.innerText = "Player One Wins!"
            }
        
            if (
            tile1.classList.contains('playerTwoChoice') &&
            tile2.classList.contains('playerTwoChoice') &&
            tile3.classList.contains('playerTwoChoice') &&
            tile4.classList.contains('playerTwoChoice')
            )
            {
                announceWinner.innerText = "Player Two Wins!"
            }
    }
    // check tiles to see if class is playerone or two

}

for (let i=0; i < tiles.length; i++){
    tiles[i].onclick = () => {
        //if square below your current square is taken you can go on top of it
        if(tiles[i + 4].classList.contains('taken')){
            if (currentPlayer == 1) {
                tiles[i].classList.add('taken')   
                tiles[i].classList.add('playerOneChoice')
                //change player
                currentPlayer = 2
                announceTurnSpan.innerText = currentPlayer
            } else if (currentPlayer === 2) {
                tiles[i].classList.add('taken')
                tiles[i].classList.add('playerTwoChoice')
                //change player
                currentPlayer = 1
                announceTurnSpan.innerText = currentPlayer
            }
        } else alert('Invalid move.') 

    } 
}

//reset button
reset.onclick = () => {
    tiles.classList.remove('playerOneChoice') //additional research needed on removing class from multiple things https://stackoverflow.com/questions/23565551/javascript-add-remove-a-single-class-on-multiple-elements
    tiles.classList.remove('playerTwoChoice')
    tiles.classList.remove('taken')
    tiles[16].classList.add('taken')
    tiles[17].classList.add('taken')
    tiles[18].classList.add('taken')
    tiles[19].classList.add('taken')
} 
//in console we see that column effect works, however style doesnt apply properly, buttons clicked again will add other player choice 
//https://www.freecodecamp.org/news/learn-javascript-by-building-7-games-video-course/

//still need a win check and announcement function


//need a win/score count function


//need to remove all classList on reset button click














//OVERARCHING ISSUE-- == breaks button display

///PLAYER SWITCH IDEA: create a turn counter, if (turn count % 2 !== 0) add classList playerOneChoice, else add playerTwoChoice
// function playerSwitch (){
    
//     div.forEach(div => {
//         div.addEventListener('click', event => {
//         console.log(event)
//         if(div.classList = 'playerOneChoice' || 'playerTwoChoice'){
//             turnCount = turnCount
//         } else if(div.classList != 'playerOneChoice' || 'playerTwoChoice'){
//             turnCount++
//         }
//         console.log(turnCount)
//     })})   //CONSOLE LOGS TURNS CORRECTLY --conditionals break it 
    // if(turnCount % 2 !==0){
    //     div.forEach(div => {
    //         div.addEventListener('click', event => {               
    //             // if(div.classList !== 'playerTwoChoice')
    //             div.classList.add('playerOneChoice')
    //     } else {            
    //         div.addEventListener('click', event => {               
    //         // if(div.classList !== 'playerTwoChoice')
    //         div.classList.add('playerTwoChoice')
    //         } 
    //     }
    //     }
    // } ///CONDITIONAL DOESNT WORK ******//////
// }
// playerSwitch()

//ORIGINAL PLAYER BUTTON REVEAL FUNCTION THAT WORKS:
// let playerMove = div.forEach(div => {
//     div.addEventListener('click', event => {
//         console.log(event)

//         // if(div.classList !== 'playerTwoChoice')
//         div.classList.add('playerOneChoice')
    
//     // individual column click conditional function 
//         //if 0 4 8 12 are clicked, if 12 is empty, add classList to 12. if 12classList =${playerOneChoice OR playerTwoChoice}, move on
//         //if 8 isnt filled add classlist, else move on, if 4 isnt filled add classlist, else add classlist to 0 
//         //ALTERNATE IDEA: create column classes. add event listener on column class, click, if (twelve.classList != playerxchoice){twelve.classList.add('playerxchoice')} else if ,
    
        
//     })
// })
//https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/

//columnOne stacking function 
// function columnOneStack(){
//     columnOne.addEventListener('click', event => {  //error in console says columnone.addeventlisterner is not a function...might need to use a forEach
//         Array.from(columnOne)
//         if(columnOne[1].classList = 'playerOneChoice' || 'playerTwoChoice'){
//             columnOne[0].classList.add('playerOneChoice')
//         } else
//         if(columnOne[2].classList = 'playerOneChoice' || 'playerTwoChoice'){
//             columnOne[1].classList.add('playerOneChoice')
//         } else
//         if(columnOne[3].classList = 'playerOneChoice' || 'playerTwoChoice'){
//             columnOne[2].classList.add('playerOneChoice')
//         } else
//         if(columnOne[3].classList != 'playerOneChoice' || 'playerTwoChoice'){
//             columnOne[3].classList.add('playerOneChoice')
//         } 
//     })
// }
// columnOneStack()



//function to occur on event of click on tile:

// function playerMove() {
//     if(div.classList !== 'playerOneChoice') {
//         div.classList.add('playerOneChoice')
//     }
//     console.log('clicked')
// }

// tile.addEventListener('click', playerMove) 

// when you click on each square, a function should check if the bottom square in that column isnt displaying none. if it isnt displaying nothing, check the square above it, if it isnt displaying nothing, check above, if it is displaying nothing, fill with playerTurnColorCLass, log value in playerColorClass array
//and check for winner: does current array(s) match winning combos, if yes announce winner, if no playerSwitch(), repeat the game loop  




//2/7:
