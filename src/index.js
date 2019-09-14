import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Grid from './components/Grid';

class Main extends React.Component {
    constructor(){
        super()

        this.rows = 50;
        this.cols = 100;

        this.state = {
            checkLife: "",
            generations: 0,
            initialGrid: Array(this.rows).fill().map(()=> Array(this.cols).fill(false))
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
        this.interval = setInterval(this.play, 0.1)
    }

    pauzeGame = () => {
        clearInterval(this.interval);
    }

    clearGame = () => {
        clearInterval(this.interval);
        this.setState({
            checkLife: "",
            initialGrid: Array(this.rows).fill().map(()=> Array(this.cols).fill(false)),
            generations: 0,
        })
    }

    randomGame = () => {
        this.setState({
            initialGrid: Array(this.rows).fill().map(()=> Array(this.cols).fill(false)),
        })
        
        let cloneGrid = deepCopy(this.state.initialGrid);

        for(let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                if(Math.floor(Math.random() * 4) === 1) {
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
            checkLife: "",
        })

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
              let numberOfNeighbours = 0;

            //checking all 8 surrounding cells 
                if (i > 0 && j > 0) if(grid[i-1][j-1]) numberOfNeighbours ++
                if (i > 0) if(grid[i-1][j]) numberOfNeighbours ++
                if (i > 0 && j < this.cols-1) if(grid[i-1][j+1]) numberOfNeighbours ++
                if (j > 0) if(grid[i][j-1]) numberOfNeighbours ++
                if (j < this.cols-1) if(grid[i][j+1]) numberOfNeighbours ++
                if (i < this.rows-1 && j>0) if(grid[i+1][j-1]) numberOfNeighbours ++
                if (i < this.rows-1) if(grid[i+1][j]) numberOfNeighbours ++
                if (i < this.rows-1 && j < this.cols-1) if(grid[i+1][j+1]) numberOfNeighbours ++
  
            // applying rules
            if(grid[i][j] && numberOfNeighbours < 2 || numberOfNeighbours > 3 ) cloneGrid[i][j] = false;
            if(!grid[i][j] && numberOfNeighbours === 3) cloneGrid[i][j] = true;
            }
          }

          this.setState({ 
            initialGrid: cloneGrid,
            generations: this.state.generations + 1
          });


          if(!cloneGrid.some(row => row.includes(true))) {
              this.setState({
                  checkLife: "populations has died"
              })
          }
    }




    render(){
        return (
            <div>
                <h1>Game of Life</h1>
                <h2>Seed some cells or choose a pattern</h2>
                <button onClick={this.startGame}>PLAY</button>
                <button onClick={this.pauzeGame}>PAUZE</button>
                <button onClick={this.clearGame}>CLEAR</button>
                <button onClick={this.randomGame}>RANDOM</button>
                <div>{this.state.checkLife}</div>
                <Grid
                    initialGrid = {this.state.initialGrid}
                    rows = {this.rows}
                    cols = {this.cols}
                    selectBox={this.selectBox}
                />
                <h2>Generations: {this.state.generations}</h2>
            </div>
        )
    }

}

function deepCopy(arr){
    let copy = [];
    arr.forEach(elem => {
      if(Array.isArray(elem)){
        copy.push(deepCopy(elem))
      } else{
        copy.push(elem)  
      }
    })
    return copy;
  }

ReactDOM.render(<Main />, document.getElementById('root'));

