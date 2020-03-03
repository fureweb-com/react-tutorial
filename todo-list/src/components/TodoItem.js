import React, { Component } from 'react';
import './TodoItem.css';

const getCurrentColor = (colors) => colors.find(color => color.selected)?.hex

class TodoItem extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { colors, text, checked, id, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함
          onRemove(id)}
        }>&times;</div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div style={{ color: getCurrentColor(colors) }}>{text}</div>
        </div>
        {
          checked && (<div className="check-mark">✓</div>)
        }
      </div>
    );
  }
}

export default TodoItem;
