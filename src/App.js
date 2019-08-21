import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    habits: [<Habit habitName="pooping my pants"/>, <Habit habitName="peeing my pants"/> ], //This array will be used to keep track of each of the habits
    colorZero: "#000000",
    colorOne: "#00000",
    colorTwo: "#00000",
    colorThree: "#00000",
  }

  render() {
    var { habits } = this.state
    return (
      <div className="app">
        <h1>Habit Tracker</h1>
        <p>A great way to track your personal progress!</p>
        {habits.map(habit => {
          return(
          <span>
            {habit}
            <br/>
          </span>
        )})}
      </div>
    );
  }
}

export default App;

// This is an object for each box that contains the day and the color of the box.
function Square(props) {
  var { color, dayNumber, habitName } = props
  const tag = habitName + " " + dayNumber
  console.log(tag)
  return (<button className = "Square" style={{ backgroundColor: "#000000" }}>
    {dayNumber}
  </button>)
}

// This is an object that contains the boxes for each day of the week, with the name of the habit.
function Habit(props) {
  var { habitName } = props
  var boxes = []
  for (let j = 1; j < 8; j++) {
    boxes.push(<Square dayNumber={j} habitName={habitName} />)
  }
  return (boxes)
}
