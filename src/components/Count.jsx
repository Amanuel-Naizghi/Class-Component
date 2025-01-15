import { Component } from "react";

class Count extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="counter">
                Number of Todos: {this.props.state.todos.length}
            </div>
        )
    }
}

export {Count}