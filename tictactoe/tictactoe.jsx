let AudioSound = new Audio();
let haveWinner = false;
let totmoves = 0;
let winner = 0;

const audioEffects = ["start.mp3","tapp.mp3","final_win.mp3","game-end.mp3"];

AudioSound.src = audioEffects[0];

function playSound(sound) { 
      sound.play() 
  } 

const Board = () => {
    // 1st player is X ie 1
    // State keeps track of next player and gameState
    const [player, setPlayer] = React.useState(1);
    const [gameState, setGameState] = React.useState([]);
    let status = `Winner is: ${checkForWinner(gameState)}`;
    haveWinner = !status.includes("Yet");

  
    // Part 1 step 1 code goes here
    // Use conditional logic to set a variable to either 'Player O' or  'Player X'
    let nextPlayer = player == 1? "Player X":"Player O";
  
    console.log(`We hav a winner ${status}`);
  
    const takeTurn = (id) => {
      setGameState([...gameState, { id: id, player: player }]);
      setPlayer((player + 1) % 2); // get next player

      return player;
    };
    function renderSquare(i) {
      // use properties to pass callback function takeTurn to Child
      return <Square takeTurn={takeTurn} id={i}></Square>;
    }
    

    if (haveWinner && winner > 0) {
      AudioSound.src=audioEffects[2];
      playSound(AudioSound);
      alert(status);
      
      window.location.reload();
    }

    if (!haveWinner && (totmoves == 9))
    {
      AudioSound.src=audioEffects[3];
      playSound(AudioSound);
      alert("We have a Draw...!!!");
      window.location.reload();
    }

    if (haveWinner) winner+=1;
    
    
    return (
      <div className="game-board">
        <div className="grid-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="grid-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="grid-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <div className="status" id="info">
          {
          <h2 id="turn">Next Player: {nextPlayer} </h2>
          }
          <h2>{status}</h2>
        </div>
      </div>
    );
    

  };
  
  const Square = ({ takeTurn, id }) => {
    const mark = ['O', 'X', ''];
    // id is the square's number
    // filled tells you if square has been filled
    // tik tells you symbol in square (same as player)
    // You call takeTurn to tell Parent that the square has been filled
    const [filled, setFilled] = React.useState(false);
    const [tik, setTik] = React.useState(2);

    

    return (
      <button
        // Part 2: update the return statement below to add css classes
        onClick={() => {
          setTik(takeTurn(id));
          setFilled(true);
          AudioSound.src = audioEffects[1];
          playSound(AudioSound);
          totmoves+=1;
          console.log(`Square: ${id} filled by player : ${tik}`);
        }}
      >
        <h1 className={tik==1 ? "red" : "white"}>{mark[tik]} </h1>
      </button>
    );
  };
  
  const Game = () => {
       
    return (
      <div className="game">
        <Board></Board>
      </div>
    );
  };
  
  // Checking for Winner takes a bit of work
  // Use JavaScript Sets to check players choices
  // against winning combinations
  // Online there is more compact version but Dr. Williams prefers this one
  
  const win = [
    // rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // cols
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  const checkPlayerTurn = (gameState) => {
    return gameState.player;
  };
  
  const checkForWinner = (gameState) => {
    // get array of box id's
    // can't be a winner in less than 5 turns
    if (gameState.length < 5) return 'No Winner Yet';
    let p0 = gameState.filter((item) => {
      if (item.player == 0) return item;
    });
    p0 = p0.map((item) => item.id);
    let px = gameState.filter((item) => {
      if (item.player == 1) return item;
    });
    px = px.map((item) => item.id);
    if (p0 != null && px != null) {
      var win0 = win.filter((item) => {
        return isSuperset(new Set(p0), new Set(item));
      });
      var winX = win.filter((item) => {
        return isSuperset(new Set(px), new Set(item));
      });
    }


    if (win0.length > 0)      return 'Player O ';
    else if (winX.length > 0) return 'Player X ';
    return 'No Winner Yet';
  };
  // check if subset is in the set
  function isSuperset(set, subset) {
    for (let elem of subset) {
      if (!set.has(elem)) {
        return false;
      }
    }
    return true;
  }
  
  // ========================================
  
  
  ReactDOM.render(<Game />, document.getElementById('root'));
  
