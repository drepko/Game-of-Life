import React from 'react';
import Box from './Box';

class Grid extends React.Component {
    
    render(){
        const width = this.props.cols * 12;
        let rowsArray = [];

        let boxClass = "";

        for(let i = 0 ; i < this.props.rows; i++ ) {
            for(let j = 0; j < this.props.cols; j++) {
                let boxId = i + "_" + j;
                boxClass = this.props.filledGrid[i][j]? "box on" : "box off";
                rowsArray.push(
                    <Box
                        boxClass={this.boxClass}
                        key={this.boxId}
                        boxId={this.boxId}
                        row={i}
                        col={j}
                        selectBox={this.props.selectBox}
                    />
                )
            }
        }


        return(
            <div className='grid' style={{width: width}}>
            {rowsArray}
            </div>
           
        )
    }
}

export default Grid