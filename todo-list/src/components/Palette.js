import React, { Component } from 'react';
import './Palette.css'

class Palette extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.colors !== nextProps.colors
  }

  render() {
    const { colors, onColorChange } = this.props

    const palettes = colors.map(color => (
      <div
        key={color.name}
        className={`color ${color.name} ${color.selected ? 'active' : ''}`}
        style={{backgroundColor: color.hex}}
        onClick={() => onColorChange(color.name)}>
      </div>
    ))
    return (
      <div className="palette">
        {palettes}
      </div>
    )
  }
}

export default Palette;
