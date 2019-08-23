import React from 'react';
import './App.css';

class Square extends React.Component {

  state = {
    currentColor: "#fff000",
    colorZero: "#fff000",
    colorOne: "#32a86d",
    colorTwo: "#9e32a8",
    colorThree: "#a83232",
  }

  render(dayNumber, habitName) {
    var { currentColor } = this.state
    //const tag = habitName + " " + dayNumber (for testing purposes)
    var backgroundColor = currentColor
    //console.log(tag) (for testing purposes)

    return (
      <button
        className="Square"
        style={{ backgroundColor }}
        onClick={ handleClick.bind(this) }
      >
        {dayNumber}
      </button>)
  }
}

export default Square;

function handleClick(props){
  var {currentColor, colorZero, colorOne, colorTwo, colorThree} = this.state
  // this checks the current color and sets it to the next one
  if (currentColor === colorZero) { this.setState({currentColor: colorOne })} 
  else if (currentColor === colorOne) {this.setState({currentColor: colorTwo })}
  else if (currentColor === colorTwo) {this.setState({currentColor: colorThree })}
  else if (currentColor === colorThree) {this.setState({currentColor: colorZero })}
  // console.log(this.state.currentColor) (for testing purposes)
}