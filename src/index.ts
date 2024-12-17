// import { startLogger } from "./logger";
// import { games } from "./GameManager";


// startLogger();

// setInterval(() => {
//     games.push({
//         id: Math.random().toString(),
//         whitePlayerName: "Alice",
//         blackPlayerName: "Denzal",
//         moves: []
//     })
// }, 5000);


// //ws server



// import { GameManager } from "./GameManager";
// import {  gameManager} from "./GameManager";
// import { startLogger } from "./logger";


// startLogger(gameManager); // Pass GameManager to startLogger

// setInterval(() => {
//     gameManager.addGame({
//         id: Math.random().toString(),
//         whitePlayer: "harkirat",
//         blackPlayer: "jaskirat",
//         moves: []
//     });
// }, 5000);




// import { GameManager } from "./GameManager";
// import { startLogger } from "./logger";

// // Get the singleton instance of GameManager
// const gameManager = GameManager.getInstance(); // Always use getInstance to access the same instance

// // Start logging game state periodically
// startLogger(gameManager);

// // Add new games every 5 seconds
// setInterval(() => {
//     gameManager.addGame({
//         id: Math.random().toString(),
//         whitePlayer: "harkirat",
//         blackPlayer: "jaskirat",
//         moves: []
//     });
//     console.log("New game added");
// }, 5000);


import { PubSubManager } from "./PubSubManager";

setInterval(() => {
    PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPL");
}, 5000)
