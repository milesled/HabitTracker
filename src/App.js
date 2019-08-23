import React from 'react';
import Square from './Square.js';
import './App.css';

class App extends React.Component {

  state = {
    habits: [<Habit habitName="pooping my pants" />, <Habit habitName="peeing my pants" />], //This array will be used to keep track of each of the habits
    
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>Habit Tracker</h1>
          <p>A great way to track your personal progress!</p>
        </div>
          {/* This part lists the different habits you have */}
          {this.state.habits.map(habit => {
            return (
              <span> { habit } <br /> </span>
            )
          })}
          <button onClick={() => {
            this.setState({
              habits: this.state.habits.concat(<Habit habitName="new-habit" />)
            })
          }}>
            Add New Habit
        </button>
        </div>
    );
  }
}

export default App;

// This is an object that contains the boxes for each day of the week, with the name of the habit.
function Habit(props) {
  var { habitName } = props
  var boxes = []
  for (let j = 1; j < 8; j++) {
    boxes.push(<Square dayNumber={j} habitName={habitName} />)
  }
  return (boxes)
}
