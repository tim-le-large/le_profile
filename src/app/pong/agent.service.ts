import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AgentService {
    private qTable: number[][][][][] = []; // Q-table for state-action values
    private learningRate = 0.7; // Learning rate
    private discountFactor = 0.9; // Discount factor (gamma)
    private explorationRate = 0.7; // Exploration rate (epsilon)

    constructor() {
        // Initialize the Q-table with initial Q-values
        this.initializeQTable();
    }

    private initializeQTable() {
        // Define the dimensions of the Q-table based on your state and action spaces
        const paddleYBins = 10; // Divide the paddle Y position into discrete bins
        const ballXBins = 10;   // Divide the ball X position into discrete bins
        const ballYBins = 10;   // Divide the ball Y position into discrete bins
        const paddleVelocityBins = 5; // Divide the paddle velocity into discrete bins

        const actionSpaceSize = 2; // Two possible actions: move up or move down

        // Define the range for random Q-values
        const minValue = -0.1;
        const maxValue = 0.1;

        for (let i = 0; i < paddleYBins; i++) {
            this.qTable[i] = [];
            for (let j = 0; j < ballXBins; j++) {
                this.qTable[i][j] = [];
                for (let k = 0; k < ballYBins; k++) {
                    this.qTable[i][j][k] = [];
                    for (let v = 0; v < paddleVelocityBins; v++) {
                        this.qTable[i][j][k][v] = Array(actionSpaceSize).fill(
                            // Initialize Q-values with random numbers within the specified range
                            Math.random() * (maxValue - minValue) + minValue
                        );
                    }
                }
            }
        }
    }

    getGameState(
        paddleY: number,
        ballX: number,
        ballY: number,
        paddleVelocity: number,
        canvasHeight: number,
        canvasWidth: number,
        maxPaddleVelocity: number
    ): [number, number, number, number] {
        // Define how to discretize continuous state variables into bins
        const paddleYBins = 10;
        const ballXBins = 10;
        const ballYBins = 10;
        const paddleVelocityBins = 5;

        // Map the continuous values to discrete bins
        const discretePaddleY = Math.floor((paddleY / canvasHeight) * paddleYBins);
        const discreteBallX = Math.floor((ballX / canvasWidth) * ballXBins);
        const discreteBallY = Math.floor((ballY / canvasHeight) * ballYBins);
        const discretePaddleVelocity = Math.floor((paddleVelocity / maxPaddleVelocity) * paddleVelocityBins);

        return [discretePaddleY, discreteBallX, discreteBallY, discretePaddleVelocity];
    }


    // Select an action using epsilon-greedy policy
    selectAction(state: [number, number, number, number]): number {
        if (Math.random() < this.explorationRate) {
            // Explore: Choose a random action
            return Math.floor(Math.random() * 2); // Two possible actions: 0 (move up) or 1 (move down)
        } else {
            // Exploit: Choose the action with the highest Q-value
            const actionValues = this.qTable[state[0]][state[1]][state[2]][state[3]];
            return actionValues.indexOf(Math.max(...actionValues));
        }
    }

    // Update the Q-value for a state-action pair
    updateQValue(
        state: [number, number, number, number],
        action: number,
        nextState: [number, number, number, number],
        reward: number
    ) {
        const currentQValue = this.qTable[state[0]][state[1]][state[2]][state[3]][action];
        const maxNextQValue = Math.max(...this.qTable[nextState[0]][nextState[1]][nextState[2]][nextState[3]]);
        this.qTable[state[0]][state[1]][state[2]][state[3]][action] =
            (1 - this.learningRate) * currentQValue + this.learningRate * (reward + this.discountFactor * maxNextQValue);
    }

    // Learn from a transition (state, action, next state, reward)
    learn(
        currentState: [number, number, number, number],
        action: number,
        nextState: [number, number, number, number],
        reward: number
    ) {
        // Update the Q-value for the current state-action pair
        this.updateQValue(currentState, action, nextState, reward);
    }
}
