import { Component } from "react";
import mark from './mark.png';

export class ToDoList extends Component{
    state={
        userInput:'',
        ToDoList:[]
    }
    onChangeEvent(e){
        this.setState({userInput:e});
    }
    addItem(input){
        if (input ===''){
            alert("Please eneter an item")
        }else{
        let listArray=this.state.ToDoList;
        listArray.push(input);
        this.setState({ToDoList:listArray, userInput:''})
       console.log(listArray);
    }
}
    crossedWord(event){
        const li=event.target;
        li.classList.toggle('crossed');
    }
    deleteItem(){
        let listArray=this.state.ToDoList;
        listArray=[];
        this.setState({ToDoList:listArray})
    }
    onFormSubmit(e){
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                <input type='text'
                placeholder="What do you have to do?"
                onChange ={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
                </div>
                <div className="container">
                    <button className="add" onClick={() =>this.addItem(this.state.userInput)}>Add</button>
                </div>
                <div className="container">
                <ul>
                    {this.state.ToDoList.map((item,index) => (<li onClick={this.crossedWord} key={index}><img src={mark} width="20px"/>{item}</li>))}
                </ul>
                </div>
                <div className="container">
                <button className="delete" onClick={()=>this.deleteItem()}>Delete</button>
                </div>
                </form>
            </div>
        )
    }
}

