console.log('hello world')

///gameboard:
//Column 1 [0, 4, 8, 12]
//Column 2 [1, 5, 9, 13]
//Column 3 [2, 6, 10, 14]
//Column 4 [3, 7, 11, 15]

let playerOneScore = 0
let playerTwoScore = 0
let turnCount = 0 //initial state
const playerOneScore_span = document.querySelector('#playerOneScore')
const playerTwoScore_span = document.querySelector('#playerTwoScore')
const announceTurnSpan = document.querySelector('.announceTurn') 
const announceWinner = document.querySelector('.announcer')
const tiles = document.querySelectorAll('.container div') //refers to a an array of nodes essentially 
const reset = document.getElementById('reset')
const grid = document.getElementById('grid')
const bot1 = document.getElementById('bot1')  
const bot2 = document.getElementById('bot2')
const bot3 = document.getElementById('bot3')
const bot4 = document.getElementById('bot4')

let currentPlayer = 1

const winningConditions = [
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15],
    [0,4,8,12],
    [1,5,9,13],
    [2,6,10,14],
    [3,7,11,15],
    [0,5,10,15],
    [3,6,9,12]
];

function boardCheck() {
    for (let x = 0; x<winningConditions.length; x++){   //for each array in the winning conditions array
        const tile1 = tiles[winningConditions[x][0]] //going into "tiles" variable's generated array based on player inputs, and passing through each individual index of each winningConditions arrays   
        const tile2 = tiles[winningConditions[x][1]] ////https://www.freecodecamp.org/news/learn-javascript-by-building-7-games-video-course/
        const tile3 = tiles[winningConditions[x][2]]
        const tile4 = tiles[winningConditions[x][3]]
//compare each of the tile indices to winning indices
            if (
            // check tiles to see if class is playerone or two
            tile1.classList.contains('playerOneChoice') && //we're taking these user gamebooard inputs, broken down into winningConditions arrays, and seeing if any of the arrays all have a classList of playerOneChoice or playerTwoChoice to declare winner
            tile2.classList.contains('playerOneChoice') &&
            tile3.classList.contains('playerOneChoice') &&
            tile4.classList.contains('playerOneChoice')
            )
            {
                announceWinner.innerText = "Player One (Red) Wins!"
                playerOneScore++
                playerOneScore_span.innerText = playerOneScore
      
            }
        
            if (
            tile1.classList.contains('playerTwoChoice') &&
            tile2.classList.contains('playerTwoChoice') &&
            tile3.classList.contains('playerTwoChoice') &&
            tile4.classList.contains('playerTwoChoice')
            )
            {
                announceWinner.innerText = "Player Two (Black) Wins!"
                playerTwoScore++
                playerTwoScore_span.innerText = playerTwoScore
       
            }
            //else after all tiles are clicked, announceWinner.innerText = "draw"
            if(turnCount >= 16)
            {
                announceWinner.innerText = "Draw" 
            }

            // if(announceWinner.innerText != ''){
            //     console.log('the game is over')
            //     for (let i=0; i < tiles.length; i++){
            //         tiles[i].onclick = () => {
            //             alert('The game is over. Click Reset to continue.') //https://stackoverflow.com/questions/20224394/tic-tac-toe-javascript-stop-switching-turns-after-winner-has-been-announced
            //         }
            //     }
            // }
    }
    

}

// function endGame() {
//     if(announceWinner.innerText !== ''){
//         break boardCheck
//     }
// }



////https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
for (let i=0; i < tiles.length; i++){
    tiles[i].onclick = () => {
        //only if square below your current square is taken, and current doesnt already have class of taken can you go here
        if(tiles[i + 4].classList.contains('taken') &&! tiles[i].classList.contains('taken'))
        
        {
            if (currentPlayer == 1) {
                tiles[i].classList.add('taken')   //will make that div invalid 
                tiles[i].classList.add('playerOneChoice') //add red piece 
                //change player
                currentPlayer = '2' //change player
                announceTurnSpan.innerText = currentPlayer
                turnCount++ //add to turnCount value used for measuring a draw 
                // console.log(turnCount)
            } else if (currentPlayer == 2) {
                tiles[i].classList.add('taken')
                tiles[i].classList.add('playerTwoChoice')
                //change player
                currentPlayer = '1'
                announceTurnSpan.innerText = currentPlayer
                turnCount++
                // console.log(turnCount)
            }
        } else alert('Invalid move.') 
        
        boardCheck()
    } 
}



//reset button
reset.onclick = () => {

        [].forEach.call(tiles, function(el){
        el.className = ''
        })
     //additional research needed on removing class from multiple things https://stackoverflow.com/questions/23565551/javascript-add-remove-a-single-class-on-multiple-elements
    //https://stackoverflow.com/questions/15040297/clear-element-classlist
    currentPlayer = '1'
    announceWinner.innerText = ''
    turnCount = 0

    bot1.classList.add('taken','hidden')
    bot2.classList.add('taken', 'hidden')
    bot3.classList.add('taken', 'hidden')
    bot4.classList.add('taken', 'hidden')
    //add class 'taken' back to ids representing board guide & column rules 
} 



if(announceWinner.innerText != ''){
    console.log('the game is over')
    for (let i=0; i < tiles.length; i++){
        tiles[i].onclick = () => {
            alert('The game is over. Click Reset to continue.') //https://stackoverflow.com/questions/20224394/tic-tac-toe-javascript-stop-switching-turns-after-winner-has-been-announced
        }
    }
}







//https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/




