import React, {Component} from 'react';


class Todos extends Component {

    render(){
        return (
           <p>{this.props.task}</p>
        )
    }
}

export default Todos;