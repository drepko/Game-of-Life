import React from 'react';

function Rules() {
    return (
        <div class='rules-box content-box'>
            <h1>Rules</h1>
            <div class='rules content'>
                The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead. Every cell interacts with its eight neighbours, which are the cells that are directly horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
                <ul>        
                    <li>Any live cell with fewer than two live neighbours dies, as cause of underpopulation.
                    </li>
                    <li>Any live cell with more than three live neighbours dies, as cause of overpopulation.
                    </li>
                    <li>Any live cell with two or three live neighbours lives, unchanged, to the next generation.
                    </li>
                    <li>Any dead cell with exactly three live neighbours will come to life.
                    </li>
                </ul>
                The initial pattern constitutes the 'seed' of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed — births and deaths happen simultaneously, and the discrete moment at which this happens is sometimes called a tick. (In other words, each generation is a pure function of the one before.) The rules continue to be applied repeatedly to create further generations.                </div>
        </div>
    )


}

export default Rules  