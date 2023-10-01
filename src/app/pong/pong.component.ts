import { Component, ElementRef, NgZone, OnInit, OnDestroy, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { AgentService } from './agent.service';

@Component({
  selector: 'app-pong',
  templateUrl: './pong.component.html',
  styleUrls: ['./pong.component.scss'],
})
export class PongComponent implements OnInit, OnDestroy {
  private canvas!: HTMLCanvasElement;
  private context!: CanvasRenderingContext2D;
  private intervalID: any;

  private ballX: number = 0;
  private ballY: number = 0;


  // Game variables
  private paddleWidth = 15;
  private paddleHeight = 100;
  private ballSize = 10;
  private paddleSpeed = 5;
  private ballSpeedX = 5;
  private ballSpeedY = 2;
  playerScore = 0;
  computerScore = 0;

  private myAgent: AgentService;
  backgroundColor = "transparent"

  // Paddle positions
  private playerY = 0;
  private computerY = 0;

  private leftArrowPressed = false;
  private rightArrowPressed = false;

  constructor(private elementRef: ElementRef, private ngZone: NgZone) {
    this.config = {
      licenseKey: 'gplv3-license',
      anchors: ['profile', 'projects', 'playground', 'contact'],
      menu: '#navigation',
      navigation: true,
    };
    this.myAgent = new AgentService()
  }

  ngOnInit() {
    // Initialize canvas and context here
    this.canvas = this.elementRef.nativeElement.querySelector('canvas');
    this.context = this.canvas.getContext('2d')!;

    this.initGame();

    this.intervalID = setInterval(() => this.gameLoop(), 1000 / 100); // 60 FPS
  }

  ngOnDestroy() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
    }
  }

  gameLoop() {
    // this.updateGame();
    this.draw();
  }

  initGame() {
    // Initialize game variables and positions here
    this.playerY = (this.canvas.height - this.paddleHeight) / 2; // Center player paddle
    this.computerY = (this.canvas.height - this.paddleHeight) / 2; // Center computer paddle

    // Initial ball position at the center
    this.ballX = this.canvas.width / 2; // Center X
    this.ballY = this.canvas.height / 2; // Center Y

    // Initial ball position at the center
    this.ballSpeedX = Math.random() > 0.5 ? this.ballSpeedX : -this.ballSpeedX; // Randomize initial ball direction
    this.ballSpeedY = Math.random() * 2 - 1; // Randomize initial ball vertical speed

    this.playerScore = 0;
    this.computerScore = 0;
  }

  draw() {
    // Clear the canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw paddles and ball
    this.drawPaddle(0, this.playerY);
    this.drawPaddle(this.canvas.width - this.paddleWidth, this.computerY);
    this.drawBall();
    // Calculate maxPaddleVelocity based on paddleSpeed
    const maxPaddleVelocity = Math.abs(this.paddleSpeed);

    // Get the current game state
    const currentState = this.myAgent.getGameState(this.playerY, this.ballX, this.ballY, this.ballSpeedX, this.canvas.height, this.canvas.width, maxPaddleVelocity);

    // Update Q-learning agent with the current game state and reward
    const reward = this.calculateReward();
    this.myAgent.learn(currentState, 0, currentState, reward); // Assuming action 0 (do nothing)

    // Make Q-learning agent's decision and update player's paddle
    const action = this.myAgent.selectAction(currentState);
    this.updatePlayerPaddle(action);

    // Update game logic (e.g., move paddles, check collisions, update scores)
    this.updateGame();
  }

  calculateReward() {
    // Calculate the reward based on specific game conditions
    // For example, you can provide positive rewards for hitting the ball
    // and negative rewards for missing the ball
    // Return a reward value

    // Example: Calculate reward based on ball hitting player's paddle
    const paddleHitReward = 10; // Positive reward for hitting the ball
    const paddleMissReward = -5; // Negative reward for missing the ball

    if (
      this.ballX - this.ballSize / 2 < this.paddleWidth &&
      this.ballY > this.playerY &&
      this.ballY < this.playerY + this.paddleHeight
    ) {
      return paddleHitReward;
    } else {
      return paddleMissReward;
    }
  }
  updatePlayerPaddle(action: number) {
    // Implement how the player's paddle should be updated based on the action
    // The action can be discrete values like 0 (do nothing), 1 (move up), or 2 (move down)
    // You can map these actions to specific movements

    const paddleSpeed = 5; // Adjust the paddle speed as needed

    if (action === 1) {
      // Move the paddle up while staying within the canvas boundaries
      this.playerY = Math.max(0, this.playerY - paddleSpeed);
    } else if (action === 2) {
      // Move the paddle down while staying within the canvas boundaries
      this.playerY = Math.min(this.canvas.height - this.paddleHeight, this.playerY + paddleSpeed);
    }
  }






  // Define helper methods to draw paddles and ball

  drawPaddle(x: number, y: number) {
    // Draw a paddle at the specified position
    this.context.fillRect(x, y, this.paddleWidth, this.paddleHeight);
  }
  // Move the player's paddle based on keyboard input
  movePlayerPaddle() {
    if (this.leftArrowPressed) {
      // Move left, but stay within the canvas boundaries
      this.playerY = Math.max(0, this.playerY - this.paddleSpeed);
    }
    if (this.rightArrowPressed) {
      // Move right, but stay within the canvas boundaries
      this.playerY = Math.min(this.canvas.height - this.paddleHeight, this.playerY + this.paddleSpeed);
    }
  }

  // Move the computer's paddle (simple AI)
  moveComputerPaddle() {
    // Follow the ball's vertical position
    const paddleCenter = this.computerY + this.paddleHeight / 2;
    if (paddleCenter < this.canvas.height / 2) {
      // Move down, but stay within the canvas boundaries
      this.computerY = Math.min(this.canvas.height - this.paddleHeight, this.computerY + this.paddleSpeed);
    } else {
      // Move up, but stay within the canvas boundaries
      this.computerY = Math.max(0, this.computerY - this.paddleSpeed);
    }
  }

  // Update the ball's position
  moveBall() {
    this.ballX += this.ballSpeedX;
    this.ballY += this.ballSpeedY;
  }

  checkCollisions() {
    // Ball collisions with top and bottom walls
    if (this.ballY - this.ballSize / 2 < 0 || this.ballY + this.ballSize / 2 > this.canvas.height) {
      this.ballSpeedY = -this.ballSpeedY;
    }



    // Ball collisions with player's paddle
    if (
      this.ballX - this.ballSize / 2 < this.paddleWidth &&
      this.ballY > this.playerY &&
      this.ballY < this.playerY + this.paddleHeight
    ) {
      this.ballSpeedX = -this.ballSpeedX;
      // Move the ball slightly away from the paddle to avoid sticking
      this.ballX = this.paddleWidth + this.ballSize / 2 + 1;
      // Change background color to green when the ball is hit
      this.backgroundColor = 'green';
    }

    // Ball collisions with computer's paddle
    if (
      this.ballX + this.ballSize / 2 > this.canvas.width - this.paddleWidth &&
      this.ballY > this.computerY &&
      this.ballY < this.computerY + this.paddleHeight
    ) {
      this.ballSpeedX = -this.ballSpeedX;
      // Move the ball slightly away from the paddle to avoid sticking
      this.ballX = this.canvas.width - this.paddleWidth - this.ballSize / 2 - 1;
      // Change background color to green when the ball is hit
      this.backgroundColor = 'green';
    }

    // Ball out of bounds (scoring)
    if (this.ballX < 0) {
      this.computerScore++;
      this.ballSpeedX = -this.ballSpeedX;
      this.backgroundColor = 'red';
    } else if (this.ballX > this.canvas.width) {
      this.playerScore++;
      this.ballSpeedX = -this.ballSpeedX;
      this.backgroundColor = 'red';
    }


  }


  // Keyboard input event handlers
  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.leftArrowPressed = true;
    } else if (event.key === 'ArrowDown') {
      this.rightArrowPressed = true;
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.leftArrowPressed = false;
    } else if (event.key === 'ArrowDown') {
      this.rightArrowPressed = false;
    }
  }

  drawBall() {
    // Draw the ball at its current position
    this.context.beginPath();
    this.context.arc(this.ballX, this.ballY, this.ballSize, 0, Math.PI * 2);
    this.context.fillStyle = '#fff'; // Set the fill color for the ball
    this.context.fill();
    this.context.closePath();
  }



  // Update the game state (paddle movement, ball movement, collisions, and scores)
  updateGame() {
    // Move the paddles
    this.movePlayerPaddle();
    this.moveComputerPaddle();

    // Move the ball
    this.moveBall();

    // Check for collisions
    this.checkCollisions();

    // Update scores
  }

  config;
  fullpage_api: any;






  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }



}
