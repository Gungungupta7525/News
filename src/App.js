
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Newz from './Components/Newz';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
 
  handleClick=()=>{
    if(this.state.mode==="dark"){
        document.body.style.backgroundColor="black"
       this.setState({mode:"light"});
    }
    else{
        document.body.style.backgroundColor="pink"
      this.setState({mode:"dark"});
    }
}
constructor(){
  super();
    this.state={
        mode:"light"
    }
}
  render() {
    
    return (
      <div>
        <Navbar title="Breaking News" handle={this.handleClick}/>
        <BrowserRouter>
       <Routes>
       <Route path="/" element={<Newz category="general"/>}></Route>
       <Route path="/sports" element={<Newz category="sports"/>}></Route>
       <Route path="/science" element={<Newz category="science"/>}></Route>
       <Route path="/Health" element={<Newz category="Health"/>}></Route>
       <Route path="/Entertainment" element={<Newz category="Entertainment"/>}></Route>
      
       </Routes>
       </BrowserRouter>
      </div>
    )
  }
}
