import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, colors, onToggle, onRemove } = this.props;
    const todoList = todos.map((todo) => (
      <TodoItem
        {...todo}
        colors={colors}
        onToggle={onToggle}
        onRemove={onRemove}
        key={todo.id}
      />
    ))
    return (
      <div>
        { todoList }
      </div>
    );
  }
}

export default TodoItemList;
