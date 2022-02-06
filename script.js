console.log('hello world')

const tiles = Array.from(document.querySelectorAll('.tile'))

let board = ['','','','','','','','','','','','','','','','']
let playerOneScore = 0
let playerTwoScore = 0
const playerOneScore_span = document.querySelector('.playerOneScore')
const playerTwoScore_span = document.querySelector('.playerTwoScore')
const tile = document.getElementsByClassName('tile')


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
//Column 1 [0, 4, 8, 12]
//Column 2 [1, 5, 9, 13]
//Column 3 [2, 6, 10, 14]
//Column 4 [3, 7, 11, 15]


//function to occur on event of click on tile:

function playerMove() {
    // if(tile.classList !== 'playerOneChoice') {
    //     tile.classList.add('playerOneChoice')
    // }
    console.log('clicked')
}

tile.addEventListener('click', playerMove()) 

// when you click on each square, a function should check if the bottom square in that column isnt displaying none. if it isnt displaying nothing, check the square above it, if it isnt displaying nothing, check above, if it is displaying nothing, fill with playerTurnColorCLass, log value in playerColorClass array
//and check for winner: does current array(s) match winning combos, if yes announce winner, if no playerSwitch(), repeat the game loop  




//userAction
// const userAction = (tile, index) => {
//     if(//action is vaid && game is active) {
//         tile.classList.add(`player${currentPlayer}`)
//         // updateBoard(index)
//         // handleResultValidation()
//         // changePlayer()
//     }
// }


//for each area (tile or column TBD) listen for click, and perform userAction function--include
// tiles.forEach((tile, index) => {
//     tile.addEventListener('click', )
// })