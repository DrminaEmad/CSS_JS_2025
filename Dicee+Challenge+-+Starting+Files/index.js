
var randomNumber1 = Math.floor(Math.random()*5) + 1
console.log(randomNumber1)

var randomNumber2 = Math.floor(Math.random()*5) + 1
console.log(randomNumber2)

var dice_A =  "./images/dice"+randomNumber1+'.png'
var dice_B =  "./images/dice"+randomNumber2+'.png'

var dice_1 = document.querySelector(".img1")
dice_1.setAttribute('src', dice_A)


var dice_2 = document.querySelector(".img2")
dice_2.setAttribute('src', dice_B)

var headings = document.querySelector('h1')


if(randomNumber1 === randomNumber2){
// headings.setAttribute('textContent', 'Draw');
headings.textContent = 'Draw'
}
else if(randomNumber1 > randomNumber2){
// headings.setAttribute('textContent', 'Player 1 wins');
headings.textContent = 'Player 1 wins'
}
else if(randomNumber1 < randomNumber2){
    // headings.setAttribute('textContent', 'Player 2 wins');
    headings.textContent = 'Player 2 wins'
}