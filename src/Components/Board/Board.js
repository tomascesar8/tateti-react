// import { useState } from 'react';
// import Square from '../Square/Square';
// import './Board.css'



// const Board = () => {
//   //Quien juega?
//   const [user, setUser] = useState('X')
//   //Como va el juego?
//   const [game, setGame] = useState(['','','','','','','','',''])
//   const [status, setStatus] = useState('');

//   const handlePlay = (position)=> {
//     if (game[position]!=='')return;
//     const newStateGame = [...game];  //! LO COPIO EN UNA NUEVA VARIABLE (game es un getter)
//     newStateGame[position] = user;
//     setGame(newStateGame)
//     console.log(newStateGame);
//     user==='X'? setUser('O'): setUser('X');
//     handleStatus()
//   }
//   const handleStatus = () =>{
//     const linesWin = [
//       [0,1,2],
//       [3,4,5],
//       [6,7,8],
//       [0,3,6],
//       [1,4,7],
//       [5,2,8],
//       [0,4,8],
//       [2,4,6]
//     ];
//     linesWin.forEach(([x,y,z])=>{
//       if(game[x]==game[y] && game[y]==game[z] && game[x]!=''){
//         console.log('holaaaaaaaaaa');
//         setStatus(`Ganó ${user}`);
//         return;
//       }else{
//         console.log('culiau');
//         setStatus(`Juega ${user}`);
//       }
//     })
//   }

//   return (
//     <>
//       <p>{status}</p>
//       <div className='row'>
//         <Square pushUser={()=>handlePlay(0)} player={game[0]}/>
//         <Square pushUser={()=>handlePlay(1)} player={game[1]}/>
//         <Square pushUser={()=>handlePlay(2)} player={game[2]}/>
//       </div>
//       <div className='row'>
//         <Square pushUser={()=>handlePlay(3)} player={game[3]}/>
//         <Square pushUser={()=>handlePlay(4)} player={game[4]}/>
//         <Square pushUser={()=>handlePlay(5)} player={game[5]}/>
//       </div>
//       <div className='row'>
//         <Square pushUser={()=>handlePlay(6)} player={game[6]}/>
//         <Square pushUser={()=>handlePlay(7)} player={game[7]}/>
//         <Square pushUser={()=>handlePlay(8)} player={game[8]}/>
//       </div>
//     </>
//   );
// }
 
// export default Board;


import { useState, useEffect } from 'react';
import Square from '../Square/Square';
import './Board.css';

const Board = () => {
  const [user, setUser] = useState('X');
  const [game, setGame] = useState(['', '', '', '', '', '', '', '', '']);
  const [status, setStatus] = useState(`Juega ${user}`);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setStatus(`Juega ${user}`);
  }, [user]);

  const checkWinner = (gameState) => {
    const linesWin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return linesWin.some(([x, y, z]) => gameState[x] === gameState[y] && gameState[y] === gameState[z] && gameState[z] !== '');
  };

  const handlePlay = (position) => {
    if (gameOver || game[position] !== '') return alert(`Termino la partida! Ganó ${user}`);;
    const newStateGame = [...game];
    newStateGame[position] = user;
    setGame(newStateGame);

    const winnerExists = checkWinner(newStateGame);
    if (winnerExists) {
      setStatus(`Ganó ${user}`);
      setGameOver(true);
    } else {
      setUser(user === 'X' ? 'O' : 'X');
    }
  };

  const handleRestart = () => {
    // Reiniciar todos los estados a sus valores iniciales
    setUser('X');
    setGame(['', '', '', '', '', '', '', '', '']);
    setStatus('Juega X');
    setGameOver(false);
  };

  return (
      <div className='board'>
        <p>{status}</p>
        <div className='row'>
          <Square pushUser={() => handlePlay(0)} player={game[0]} />
          <Square pushUser={() => handlePlay(1)} player={game[1]} />
          <Square pushUser={() => handlePlay(2)} player={game[2]} />
        </div>
        <div className='row'>
          <Square pushUser={() => handlePlay(3)} player={game[3]} />
          <Square pushUser={() => handlePlay(4)} player={game[4]} />
          <Square pushUser={() => handlePlay(5)} player={game[5]} />
        </div>
        <div className='row'>
          <Square pushUser={() => handlePlay(6)} player={game[6]} />
          <Square pushUser={() => handlePlay(7)} player={game[7]} />
          <Square pushUser={() => handlePlay(8)} player={game[8]} />
        </div>
        <button onClick={handleRestart}>Reiniciar</button> {/* Botón para reiniciar el juego */}
      </div>
  );
};

export default Board;
