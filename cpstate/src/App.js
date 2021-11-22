import React from "react";
import './App.css';
import Avatar from './img1.png';
import IntervalExample from './TimeInterval'


class App extends React.Component {

constructor() {
  super();
  this.state = { 
    Person: {imgSrc: Avatar, fullName: "John Doe", bio:"living among us", profession: "an agent of chaos"},
    Shows: true 
  }
} 
handleShows=()=>this.setState({Shows:!this.state.Shows})
render() { console.log (this.state.Person)
  return (
    <div className="App">
      <button onClick={this.handleShows}>{(this.state.Shows? "oooh you are in a big trouble !!!" : "Please, do not click!")}</button>
      <div>
      {this.state.Shows &&<img src= {this.state.Person.imgSrc} alt= "avatar"/>}
      {this.state.Shows &&<h1>Full Name <span>{this.state.Person.fullName}</span></h1>}
      {this.state.Shows &&<h1>Bio <span>{this.state.Person.bio}</span></h1>}
      {this.state.Shows &&<h1>Profession <span>{this.state.Person.profession}</span></h1>}
      </div>
      <IntervalExample/>
    </div>
  );
}
}
export default App;
