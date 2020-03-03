import React, { Component } from 'react';
import './Color.css'

class Color extends Component {
  render() {
    const { color, onColorChange } = this.props

    return (
      <div
        key={color.name}
        className={`color ${color.name} ${color.selected ? 'active' : ''}`}
        style={{backgroundColor: color.hex}}
        onClick={() => onColorChange(color.name)}
      />
    )
  }
}

export default Color
