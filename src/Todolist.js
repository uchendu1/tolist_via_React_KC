import React, { Component } from "react";
import TodoItems from "./TodoItems"


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
            <div className="todolistmain">
                <div className="header">
                    <form onSubmit={this.addItem} >
                        <input ref={this.reference} placeholder="Enter Tasks"></input>
                        <button type="submit">Add</button>
                    </form>
                </div>         
                    <TodoItems  entries={this.state.items}/>
            </div>
        );
    }
}

export default Todolist;