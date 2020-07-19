import React, {Component} from 'react'

class AddTodo extends Component{
    state={
        content: ''
    }
    handlChange =(e)=>{
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handlChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddTodo