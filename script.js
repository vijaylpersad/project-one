console.log('hello world')

const tiles = Array.from(document.querySelectorAll('.tile'))

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
tiles.forEach((tile, index) => {
    tile.addEventListener('click', )
})