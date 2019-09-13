import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Grid from './components/Grid';

class Main extends React.Component {
    constructor(){
        super()

        this.speed = 100;
        this.rows = 60;
        this.cols = 100;

        this.state = {
            generations: 0,
            filledGrid: Array(this.rows).fill().map(()=> Array(this.cols).fill(false))
        }
    }

    render(){
        return (
            <div>
                <h1>Game of Life</h1>
                <Grid
                    filledGrid = {this.state.filledGrid}
                    rows = {this.rows}
                    cols = {this.cols}
                    selectBox={this.selectBox}
                />
                <h2>Generations: {this.state.generations}</h2>
            </div>
        )
    }

}

ReactDOM.render(<Main />, document.getElementById('root'));

