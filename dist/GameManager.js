"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
class GameManager {
    constructor() {
        this.games = [];
    }
    static getInstance() {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }
    addGame(game) {
        this.games.push(game);
    }
    getGames() {
        return this.games;
    }
    addMove(gameId, move) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }
    logState() {
        console.log(this.games);
    }
}
exports.GameManager = GameManager;
const gameManager = GameManager.getInstance();
gameManager.addGame({
    id: "1",
    whitePlayer: "Alice",
    blackPlayer: "Bob",
    moves: ["e2e4", "e7e5"]
});
gameManager.logState();
