import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;

        return (
          <div>
           <TodoItem text="Init_ID : board1 (~n)"/>
            <TodoItem text="Lnit_PW : 1234 "/>
          </div>
        );
    }
}

export default TodoItemList;
