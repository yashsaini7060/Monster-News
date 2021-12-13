// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

//  a='monk';

state={
  progress:0
}
//creating  a function to update progress
changeProgress=(progress)=>{

  this.setState({progress:progress}) 
  //since it's a class based component ,we must have to use this.setState()
    
}
  render() {
    return (
      <div>
        {/* Hey you know what , you are my first class based component.
         {this.a} */}
         {/* to use class based component we must use ||this.variableName|| */}
         <Router>
   
        <Navbar/>
        {/* <div> */}

        <LoadingBar
        color='#f11946'
        height={4}
        progress={this.state.progress}
        //progress is a state

      />
     


        {/* <News changeProgress={this.changeProgress} size={6} country={"us"}  category={"health"}/> */}
        {/* </div> */}
        <Switch>
          <Route exact path="/"><News changeProgress={this.changeProgress} key='general'  size={6} country={"us"}  category={"general"}/></Route>
          <Route exact path="/health"><News changeProgress={this.changeProgress} key='health'  size={6} country={"us"}  category={"health"}/></Route>
          <Route exact path="/business"><News changeProgress={this.changeProgress} key='business'  size={6} country={"us"}  category={"business"}/></Route>
          <Route exact path="/sports"><News changeProgress={this.changeProgress} key='sports'  size={6} country={"us"}  category={"sports"}/></Route>
          <Route exact path="/science"><News changeProgress={this.changeProgress} key='science'  size={6} country={"us"}  category={"science"}/></Route>
          <Route exact path="/technology"><News changeProgress={this.changeProgress} key='technology'  size={6} country={"us"}  category={"technology"}/></Route>
          <Route exact path="/entertainment"><News changeProgress={this.changeProgress} key='entertainment'  size={6} country={"us"}  category={"entertainment"}/></Route>
          <Route exact path="/"><News changeProgress={this.changeProgress} key='general'  size={6} country={"us"}  category={"general"}/></Route>
          
          
        </Switch>

        </Router>
      </div>
    )
  }
}


