///its like our  store.ts
// interface Game{
//     id:string;
//     whitePlayerName:string;
//     blackPlayerName:string;
//     moves:string[];
// }

// export const games:Game[]=[];

/*This will work, but a lot of times you need to attach functionality to state as well. 
Let’s see how can we create a class called GameManager and expose some functions on it that can be called by files using it */




/*Classes >>>
Let’s create a class that
1.Stores games
2.Exposes functions that let you mutate the state
interface */
//classeful -- state management // redux can also be used  as a backend state management

// interface Game {
//     id: string; 
//     whitePlayer: string;
//     blackPlayer: string;
//     moves: string[];
// }

// export class GameManager {
//     private games: Game[] = [];

//     public addGame(game: Game) {
//         this.games.push(game);
//     }

//     public getGames() {
//         return this.games;
//     }

//     // e5e7
//     public addMove(gameId: string, move: string) {
//         const game = this.games.find(game => game.id === gameId);
//         if (game) {
//             game.moves.push(move);
//         }
//     }

//     public logState() {
//         console.log(this.games);
//     }
// }

// export const gameManager = new GameManager();



/*The Singleton pattern is a design pattern that restricts the instantiation of a class to only one instance and provides a global point of access to that instance. This is particularly useful when you need to ensure that there is a single instance of a class, such as when managing a connection to a database or a configuration manager.

Key Points:
1.Single Instance: The Singleton pattern ensures that only one instance of the class exists.
2.Global Access: The instance is globally accessible through a static method.
3.Lazy Initialization: The instance is created only when it's first needed.

patters -- adapter pattern , factory patteren 
in js we will mainly use the sigleton  pattern,strategy pattern...

leys enfore so no oen can create GameManager() objects again  
    
            private games: Game[] = [];

*/


//singleton pattern 
interface Game {
    id: string; 
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

export class GameManager {
    private static instance: GameManager;  // Static instance to hold the singleton
    private games: Game[] = [];

    // Private constructor to prevent instantiation from outside
    private constructor() {}

    // Public method to get the single instance of GameManager
    public static getInstance(): GameManager {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }

    public addGame(game: Game) {
        this.games.push(game);
    }

    public getGames() {
        return this.games;
    }

    public addMove(gameId: string, move: string) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }

    public logState() {
        console.log(this.games);
    }
}

// Usage of Singleton instance:
const gameManager = GameManager.getInstance(); // Always use getInstance to access the same instance
gameManager.addGame({
    id: "1",
    whitePlayer: "Alice",
    blackPlayer: "Bob",
    moves: ["e2e4", "e7e5"]
});
gameManager.logState();



/*
Private Constructor: The constructor is made private to prevent the creation of multiple instances from outside the class.
Static instance Property: A static property (instance) is used to hold the single instance of GameManager.
Static getInstance() Method: This method checks if the instance already exists. If not, it creates a new instance. This ensures only one instance is ever created.
Why This is Singleton:
Single Instance: The GameManager class now ensures that only one instance is created, and every time you call GameManager.getInstance(), the same instance is returned.
Global Access: The single instance of GameManager is accessible globally through the getInstance() method.  */