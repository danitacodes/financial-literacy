//Knuth shuffle algo - HEAVILY RESEARCHED
export function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    //while there are still elements to shuffle
    while (0 !== currentIndex) {
        //pick element that remains
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        //swap element with current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//enums for representing the game state
export const GAME_STATE = {
    READY: 'ready',
    PLAYING: 'playing',
    DONE: 'done',
}