//local storage
let userVal = localStorage.getItem('userScore');
localStorage.setItem( 'userScore' , userVal===null ? 0: userVal );

let pcVal = localStorage.getItem('pcScore')
localStorage.setItem('pcScore', pcVal===null? 0: pcVal);

resetBtn = document.getElementById('hurray-play-again')

userScore = document.getElementById('user-score')
pcScore = document.getElementById('pc-score')

const mainContainer = document.getElementsByClassName('main-container')[0]
const scoreArea = document.getElementsByClassName('score-area')[0]
const gameArea = document.getElementsByClassName('game-area')[0]
const hurrayContainer = document.getElementsByClassName('hurray-container')[0]


let rulesOpenBtn = document.getElementById('rules-button')
let rulesCard = document.getElementsByClassName('rules-card')[0]
let rulesCloseBtn = document.getElementsByClassName('cross')[0]

//choose option
let rock = document.getElementById('rock')
let scissors = document.getElementById('scissors')
let paper = document.getElementById('paper')


const iconImage = {
    r: "images/rock.svg",
    p: "images/paper.svg",
    s: "images/scissors.svg"
}

const iconColors = {
    r: "#0074B6",
    p: "#FFA943",
    s: "#BD00FF"
}

const circles={
    1: "#03ad0341",
    2: "#2f9a25c3",
    3: "#008400a7"
}

const userChoice= document.getElementById('user-choice')
const pcChoice= document.getElementById('pc-choice')


const level = document.querySelectorAll('.level') // targets all levels
const level1 = document.getElementsByClassName('level1')
const level2 = document.getElementsByClassName('level2')
const level3 = document.getElementsByClassName('level3')

let playground = document.getElementsByClassName('playground')[0]
let iconChoiceBtns = document.querySelectorAll('.play-icons')


//display choice
let userIcon = document.getElementById('user-icon')
let pcIcon = document.getElementById('pc-icon')

userMsg = document.getElementsByClassName('user-msg')[0]

let eachRoundResult = document.getElementsByClassName('each-round-result')[0]
let playAgain = document.getElementsByClassName('play-again')[0]

userIconDiv = document.getElementsByClassName('user-icon-div')[0]
pcIconDiv = document.getElementsByClassName('pc-icon-div')[0]


// next button 
const next = document.getElementById('next')
const hurrayPlayAgain = document.getElementById('hurray-play-again')

// rules
rulesOpenBtn.addEventListener('click', ()=>{
    rulesCard.classList.remove('inactive')
})

rulesCloseBtn.addEventListener('click', ()=>{
    rulesCard.classList.add('inactive')
})

//play
iconChoiceBtns.forEach(button =>{
    button.addEventListener('click', ()=>{
        playground.classList.add('inactive')
        eachRoundResult.classList.remove('inactive')
    })
})
// play again 
playAgain.addEventListener('click', ()=>{
    level.forEach((lvl)=>{
        lvl.style.borderColor= "transparent";
    })
    
    next.classList.add('inactive')
    eachRoundResult.classList.add('inactive')
    playground.classList.remove('inactive')
})

// next button 
next.addEventListener('click', ()=>{
    mainContainer.classList.add('inactive')
    next.classList.add('inactive')
    hurrayContainer.classList.remove('inactive')
    
})
hurrayPlayAgain.addEventListener('click', ()=>{
    level.forEach((lvl)=>{
        lvl.style.borderColor= "transparent";
    })

    mainContainer.classList.remove('inactive')
    next.classList.add('inactive')
    hurrayContainer.classList.add('inactive')
    eachRoundResult.classList.add('inactive')
    playground.classList.remove('inactive')
})

const userWins= ()=>{
    userMsg.innerHTML = "YOU WON"
    localStorage.userScore =Number(localStorage.userScore) + 1;
    next.classList.remove('inactive')

    level1[0].style.borderColor = circles[1]
    level2[0].style.borderColor = circles[2]
    level3[0].style.borderColor = circles[3]
}
const userLoses= ()=>{
    userMsg.innerHTML = "YOU LOST"
    localStorage.pcScore = Number(localStorage.pcScore)+ 1;

    level1[1].style.borderColor = circles[1]
    level2[1].style.borderColor = circles[2]
    level3[1].style.borderColor = circles[3]
}
const userDraws= ()=>{
    userMsg.innerHTML= "TIE UP"
   
}

const playGame=(userChoice)=>{
    const options = ['r', 'p', 's']
    let pcChoice = options[ Math.floor(Math.random() * 3) ]

    userIcon.src=  iconImage[userChoice]
    pcIcon.src = iconImage[pcChoice]

    switch(userChoice+pcChoice){
        case "rs":
        case "sp":
        case "pr":
            userWins()
            break;
        case "sr":
        case "ps":
        case "rp":
            userLoses()
            break;
        case "rr":
        case "ss":
        case "pp":
            userDraws()
            break;
    }

    userScore.innerHTML= localStorage.userScore;
    pcScore.innerHTML = localStorage.pcScore;
    
    userIconDiv.style.borderColor = iconColors[userChoice]
    pcIconDiv.style.borderColor = iconColors[pcChoice]
}

const startGame= ()=>{
    rock.addEventListener('click', ()=>{
        playGame('r')
    })
    scissors.addEventListener('click', ()=>{
        playGame('s');
    })
    paper.addEventListener('click', ()=>{
        playGame('p');
    })
}

startGame()

resetBtn.addEventListener('click', ()=>{
    window.location.reload()
    localStorage.setItem( 'userScore' ,0);
    localStorage.setItem( 'pcScore' ,0)
})

userScore.innerHTML= localStorage.getItem( 'userScore');
pcScore.innerHTML = localStorage.getItem('pcScore');