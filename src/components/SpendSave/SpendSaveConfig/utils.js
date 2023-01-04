import { CATEGORIES, CHOICES } from './data'

//Knuth Shuffle Algo
export function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    //While there are elements left to shuffle
    while (0 !== currentIndex) {
        //pick remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        //swap with current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//enums for game state
export const GAME_STATE = {
    READY: 'ready',
    PLAYING: 'playing',
    DONE: 'done',
};

//points caluclation
function calculateScore(groupedChoices, categories) {
    const correctOrder = CHOICES.filter(choice => choice.categories === categories)

    return groupedChoices.reduce((score, { name }, index) => {
        const maxPoint = CHOICES.length;
        const choiceIndex = correctOrder.findIndex(choice => choice.name === name)
        const penalty = choiceIndex >= 0 ? Math.abs(index - choiceIndex) : maxPoint;
        console.log({ name, points: maxPoint - penalty })
        return score + (maxPoint);
    }, 0)
}

export function getTotalScore(groups, timeLeft) {
    const gameScore = Object.values(CATEGORIES).reduce((sum, categoriesName) => sum + calculateScore(groups[categoriesName], categoriesName),0);

    const timeBonus = getSeconds(timeLeft);
    return gameScore ? gameScore + timeBonus : 0;
}

//Time
export const getTimeLeft = deadline => deadline - Date.now()

export const getSeconds = timeLeft => Math.floor(timeLeft / 1000)

//Method to handle movement
export const move = (state, source, destination) => {
    const srcListClone = [...state[source.droppableId]];
    const destListClone = source.droppableId === destination.droppableId ? srcListClone : [...state[destination.droppableId]];

    const [movedElement] = srcListClone.splice(source.indes, 1);
    destListClone.splice(destination.index, 0, movedElement);

    return {
        [source.droppableId] : srcListClone, ...(source.droppableId === destination.droppableId ? {} : { [destination.droppableId] : destListClone})
    }
}