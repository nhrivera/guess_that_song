const prompt = require('readline-sync');
const maxGuesses = 3;
let currentGuess = 0;
let score = 0;

let music = {
    "songs" : [
        {
            "lyrics" : "\"With the lights out, it's less dangerous,\nHere we are now, entertain us\"",
            "name" : "Smells like Teen Spirit"
        },
        {
            "lyrics" : "\"But you did't have to cut me off,\nMake out like it never happened and that we were nothing\"",
            "name" : "Somebody that I used to know"
        },
        {
            "lyrics" : "\"Wish we could turn back time, to the good old days\nWhen our momma sang us to sleep but now we're stressed out\"",
            "name" : "Stressed Out"
        },
        {
            "lyrics" : "\"I tried so hard, And got so far,\nBut in the end, It doesn't even matter\"",
            "name" : "In the end"
        },
        {
            "lyrics" : "\"If you like it, then you shoulda put a ring on it\"",
            "name" : "Single ladies"
        },
        {
            "lyrics" : "\"Oh, baby, give me one more chance, (To show you that I love you)\nWon't you please let me Back in your heart\"",
            "name" : "I want you back"
        },
        {
            "lyrics" : "\"It's close to midnight and something evil's lurkin' in the dark\nUnder the moonlight you see a sight that almost stops your heart\"",
            "name" : "Thriller"
        },
        {
            "lyrics" : "\"It might seem crazy what I'm 'bout to say\nSunshine she's here, you can take a break\"",
            "name" : "Happy"
        },
        {
            "lyrics" : "\"Hey I just met you, and this is crazy \nbut here's my number\"",
            "name" : "Call me maybe"
        },
        {
            "lyrics" : "\"People always told me be careful of what you do \nAnd don't go around breaking young girls' hearts\"",
            "name" : "Billie Jean"
        },
        

    ]
}
let randomNumber = Math.floor(Math.random() * music.songs.length);
let userGuess = prompt.question(
    `Type the Name of the Song that goes with the following lyrics: \n\n${music.songs[randomNumber].lyrics} \n`).toLowerCase().split(" ").join("");


const game = userGuess => {
    
    for (let guesses = 0; guesses < maxGuesses; ) {
        if(userGuess == music.songs[randomNumber].name.toLowerCase().split(" ").join("") && music.songs.length == 1){
            score++;
            console.log(`\nYou Win! \n Your score: ${score}`);
            break
        }
        else if (userGuess == music.songs[randomNumber].name.toLowerCase().split(" ").join("")){
            console.log("\nCorrect!\n")
            score++;
            music.songs.splice(randomNumber, 1);
            randomNumber = Math.floor(Math.random() * music.songs.length);
            userGuess = prompt.question(
            `${music.songs[randomNumber].lyrics} \n`).toLowerCase().split(" ").join("");
        }
        else if (guesses === maxGuesses - 1) {
            console.log(`\nGameOver \nThe song was: ${music.songs[randomNumber].name} \n Your score: ${score}`);
            break
        }
        else { 
            console.log("\nIncorrect!\n");
            guesses++;
            currentGuess++;
            console.log('Guesses Left: ', maxGuesses - currentGuess);
            userGuess = prompt.question('Guess again...\n').toLowerCase().split(" ").join("");
        }
    }
}

game(userGuess);