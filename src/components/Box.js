import React from 'react';

class Box extends React.Component {

    selectbox = () => {
        this.props.selectbox(this.props.row, this.props.col)
    }
    render(){
        return(
            <div 
                className="box"
                id={this.props.boxId}
                onclick={this.selectbox}>
            </div>
        )
    }
}

export default Box