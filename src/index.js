import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './Game';
  
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Game/>);

function calculateWinner(squares) {

    const possibleLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    for (let i = 0; i < possibleLines.length; i++) {
        const [a, b, c] = possibleLines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
            return squares[a];
    }
    return null;
}

function isBoardFull(squares) {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] == null)
            return false;
    }
    return true;
}

export {calculateWinner, isBoardFull}