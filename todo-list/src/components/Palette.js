import React, { Component } from 'react';
import Color from './Color'
import './Palette.css'

class Palette extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.colors !== nextProps.colors
  }

  render() {
    const { colors, onColorChange } = this.props

    const palettes = colors.map((color) => <Color color={color} key={color.name} onColorChange={onColorChange}/>)

    return (
      <div className="palette">
        {palettes}
      </div>
    )
  }
}

export default Palette;
