import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    habits: [] //This array will be used to keep track of each of the habits
  }

  render() {
    var {habits} = this.state
    return (
      <div className="app">
        <h1>Habit Tracker</h1>
        <p>A great way to track your personal progress!</p>
      </div>
    );
  }
}

export default App;

// This is an object for each box that contains the day and the color of the box.
function Box(props) {
  var {color, dayNumber} = props
  return(color, dayNumber)
}

// This is an object that contains the boxes for each day of the week, with the name of the habit.
function Habit(props) {
  var boxes = {props} //You're going to run a map of boxes as the props
  var habitName
}