import React from 'react';
import Grid from './Grid';

class Main extends React.Component {
    constructor() {
        super()

        this.rows = 30;
        this.cols = 60;

        this.state = {
            generations: 0,
            initialGrid: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
            display: "none",
            speed: 200,
            speedbar: 100,

        }
    }

    selectBox = (row, col) => {

        let gridCopy = deepCopy(this.state.initialGrid);
        gridCopy[row][col] = !gridCopy[row][col];
        this.setState({
            initialGrid: gridCopy
        });
    }

    startGame = () => {
        this.setState({
            display: 'none',
            generations: 0
        });
        this.interval = setInterval(this.play, this.state.speed)
    }

    pauzeGame = () => {
        clearInterval(this.interval);
    }

    clearGame = () => {
        clearInterval(this.interval);
        this.setState({
            display: "none",
            initialGrid: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
            generations: 0,
        })
    }

    randomGame = () => {
        this.setState({
            initialGrid: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
        })

        let cloneGrid = deepCopy(this.state.initialGrid);

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (Math.floor(Math.random() * 5) === 1) {
                    cloneGrid[i][j] = true;
                }
            }
        }

        this.setState({
            initialGrid: cloneGrid
        })

    }

    play = () => {
        let grid = this.state.initialGrid
        let cloneGrid = deepCopy(this.state.initialGrid);

        this.setState({
            display: "none",
        })

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let numberOfNeighbours = 0;

                //checking all 8 surrounding cells 
                if (i > 0 && j > 0) if (grid[i - 1][j - 1]) numberOfNeighbours++
                if (i > 0) if (grid[i - 1][j]) numberOfNeighbours++
                if (i > 0 && j < this.cols - 1) if (grid[i - 1][j + 1]) numberOfNeighbours++
                if (j > 0) if (grid[i][j - 1]) numberOfNeighbours++
                if (j < this.cols - 1) if (grid[i][j + 1]) numberOfNeighbours++
                if (i < this.rows - 1 && j > 0) if (grid[i + 1][j - 1]) numberOfNeighbours++
                if (i < this.rows - 1) if (grid[i + 1][j]) numberOfNeighbours++
                if (i < this.rows - 1 && j < this.cols - 1) if (grid[i + 1][j + 1]) numberOfNeighbours++

                // applying rules
                if (grid[i][j] && numberOfNeighbours < 2 || numberOfNeighbours > 3) cloneGrid[i][j] = false;
                if (!grid[i][j] && numberOfNeighbours === 3) cloneGrid[i][j] = true;
            }
        }

        this.setState({
            initialGrid: cloneGrid,
            generations: this.state.generations + 1
        });


        if (!cloneGrid.some(row => row.includes(true))) {
            clearInterval(this.interval);
            this.setState({
                display: "block",
            })
        }
    }

    speedUp = () => {
        if(this.state.speed >= 200) {
            let newSpeed = this.state.speed -100
        this.setState({
            speed: newSpeed
        })
        }

    }

    speedDown = () => {
        if(this.state.speed <= 900){
            let newSpeed = this.state.speed + 100
            this.setState({
                speed: newSpeed
            })
        }
    }

    onChange = (event) => {
        event.preventDefault()
        const newGrid = this.state.initialGrid

        if(event.target.value === 'Small exploder'){
            newGrid[12][30] = true
            newGrid[13][29] = true
            newGrid[13][30] = true
            newGrid[13][31] = true
            newGrid[14][29] = true
            newGrid[14][31] = true
            newGrid[15][30] = true

            this.setState({
                initialGrid: newGrid
            })
        }

        if(event.target.value === "Exploder"){
            newGrid[10][28] = true
            newGrid[11][28] = true
            newGrid[12][28] = true
            newGrid[13][28] = true
            newGrid[14][28] = true

            newGrid[10][30] = true
            newGrid[14][30] = true

            newGrid[10][32] = true
            newGrid[11][32] = true
            newGrid[12][32] = true
            newGrid[13][32] = true
            newGrid[14][32] = true

            this.setState({
                initialGrid: newGrid
            })
        }

        if(event.target.value === "10 cell row"){
            newGrid[13][25] = true
            newGrid[13][26] = true
            newGrid[13][27] = true
            newGrid[13][28] = true
            newGrid[13][29] = true
            newGrid[13][30] = true
            newGrid[13][31] = true
            newGrid[13][32] = true
            newGrid[13][33] = true
            newGrid[13][34] = true

            this.setState({
                initialGrid: newGrid
            })
        }

        if(event.target.value === 'Lightweight Spaceship') {
            newGrid[12][29] = true
            newGrid[12][30] = true
            newGrid[12][31] = true
            newGrid[12][32] = true
            newGrid[13][28] = true
            newGrid[13][32] = true
            newGrid[14][32] = true
            newGrid[15][28] = true
            newGrid[15][31] = true

            this.setState({
                initialGrid: newGrid
            })
        }
        if(event.target.value === 'Tumbler') {
            newGrid[10][28] = true
            newGrid[10][29] = true
            newGrid[11][29] = true
            newGrid[11][28] = true
            newGrid[12][29] = true
            newGrid[13][27] = true
            newGrid[13][29] = true
            newGrid[14][27] = true
            newGrid[14][29] = true
            newGrid[15][27] = true
            newGrid[15][28] = true

            newGrid[10][31] = true
            newGrid[10][32] = true
            newGrid[11][31] = true
            newGrid[11][32] = true
            newGrid[12][31] = true
            newGrid[13][31] = true
            newGrid[13][33] = true
            newGrid[14][31] = true
            newGrid[14][33] = true
            newGrid[15][32] = true
            newGrid[15][33] = true

            this.setState({
                initialGrid: newGrid
            })
        }

    }

    render() {
        return (
            <div>
                <h1 class='header'>CONWAY'S GAME OF LIFE</h1>
                <div class='game'>
                    <div class='btns'>
                        <button onClick={this.startGame}>PLAY</button>
                        <button onClick={this.pauzeGame}>PAUZE</button>
                        <button onClick={this.clearGame}>CLEAR</button>
                        <button onClick={this.randomGame}>RANDOM</button>
                        <select class='select' name="patterns" onChange={this.onChange}>
                            <option value="">Choose pattern</option>
                            <option value="Small exploder">Small Exploder</option>
                            <option value="Exploder">Exploder</option>
                            <option value="10 cell row">10 Cell Row</option>
                            <option value="Lightweight Spaceship">Lightweight Spaceship</option>
                            <option value="Tumbler">Tumbler</option>
                        </select>
                    </div>

                    <div class='txt state'>Currect state of our population:</div>
                    <div class='txt gameover' style={{ display: this.state.display }}>THIS POPULATION HAS DIED AFTER {this.state.generations} {this.state.generations > 1 ? "GENERATIONS" : "GENERATIONS"}</div>
                    <Grid
                        initialGrid={this.state.initialGrid}
                        rows={this.rows}
                        cols={this.cols}
                        selectBox={this.selectBox}
                    />
                    <div class='txt generations'>Generations: {this.state.generations}</div>
                    {/* <b class='txt'>Speed:</b> <button class='speed-btn' onClick={this.speedDown}>-</button><button class='speed-btn' onClick={this.speedUp} >+</button>
                    {this.state.speed}
                    <div class="meter">
                        <span style={{ width: this.state.speedbar + '%' }}></span>
                    </div> */}
                </div>
            </div>
        )
    }

}

function deepCopy(arr) {
    let copy = [];
    arr.forEach(elem => {
        if (Array.isArray(elem)) {
            copy.push(deepCopy(elem))
        } else {
            copy.push(elem)
        }
    })
    return copy;
}

export default Main

