import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";


class Todolist extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.reference = this.reference.bind(this);
         
}

        addItem(e) {
        if (this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                 return {
                     items: prevState.items.concat(newItem)
                 };
            });
        }

        this._inputElement.value = "";
        console.log(this.state.items);
        e.preventDefault();
    }

    reference(a){
        this._inputElement = a
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem} >
                        <input className="no-outline" ref={this.reference} placeholder="Enter Tasks"></input>
                        <button type="submit" className="no-outline">Add</button>
                    </form>
                </div>         
                    <TodoItems  entries={this.state.items} 
                    delete={this.deleteItem}
                    />
            </div>
        );
    }
}

export default Todolist;