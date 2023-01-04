import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import { CHOICES, CATEGORIES } from './SpendSaveConfig/data'
import { shuffle, getTimeLeft, move, GAME_STATE } from './SpendSaveConfig/utils'

import Modal from './SpendSaveGameSetup/Modal'
import Dropzone from './SpendSaveGameSetup/Dropzone'
import Header from './SpendSaveGameSetup/Header'


const GAME_DURATION = 1000 * 120;

const initialState = {
    bench: shuffle(CHOICES),
    [CATEGORIES.SAVE]: [],
    [CATEGORIES.SPEND]: [],
    gameState: GAME_STATE.READY,
    timeLeft: 0
};

class SpendSave extends React.Component {
    state = initialState;

    startGame = () => {
        this.currentDeadline = Date.now() + GAME_DURATION;

        this.setState(
            {
                gameState: GAME_STATE.PLAYING,
                timeLeft: getTimeLeft(this.currentDeadline),
            },
            this.gameLoop
        )
    }

    gameLoop = () => {
        this.timer = setInterval(() => {
            const timeLeft = getTimeLeft(this.currentDeadline);
            const isTimeout = timeLeft <= 0;
            if (isTimeout && this.timer) {
                clearInterval(this.timer);
            }

            this.setState({
                timeLeft: isTimeout ? 0 : timeLeft,
                ...(isTimeout ? { gameState: GAME_STATE.DONE } : {}),
            });
        }, 1000);
    }

    endGame = () => {
        if (this.timer) {
            clearInterval(this.timer)
        }

        this.setState({
            gameState: GAME_STATE.DONE,
        })
    };

    resetGame = () => {
        this.setState(initialState)
    };

    onDragEnd = ({ source, destination }) => {
        if (!destination) {
            return;
        }

        this.setState(state => {
            return move(state, source, destination);
        })
    };

    render() {
        const { gameState, timeLeft, bench, ...groups } = this.state;
        const isDropDisabled = gameState === GAME_STATE.DONE;

        return (
            <>
            <Header gameState={gameState} timeLeft={timeLeft} endGame={this.endGame} />
            {this.state.gameState !== GAME_STATE.PLAYING && (
                <Modal
                    startGame={this.startGame}
                    resetGame={this.resetGame}
                    timeLeft={timeLeft}
                    gameState={gameState}
                    groups={groups}
                />
            )}
            {(this.state.gameState === GAME_STATE.PLAYING || this.state.gameState === GAME_STATE.DONE) && (
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div className='container'>
                        <div className='columns'>
                            <Dropzone
                                id={CATEGORIES.SAVE}
                                choices={this.state[CATEGORIES.SAVE]}
                                isDropDisabled={isDropDisabled}
                            />
                            <Dropzone id="bench" choices={bench} isDropDisabled={isDropDisabled} />
                            <Dropzone
                                id={CATEGORIES.SPEND}
                                choices={this.state[CATEGORIES.SPEND]}
                                isDropDisabled={isDropDisabled}
                            />
                        </div>
                    </div>
                </DragDropContext>
            )}
            </>
        )
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }
}

export default SpendSave