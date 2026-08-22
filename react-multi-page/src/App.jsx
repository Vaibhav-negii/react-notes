import React from "react";
import Home from './components/Home';
import Notes from './components/Notes';
import Notfound from './components/Notfound';
import Github from './components/Github';
import { Routes , Route ,Link } from "react-router-dom";
function App(){
  return(
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to ="/notes">Notes</Link>
      <Link to = "/github">Github</Link>

      
    </nav>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/notes" element = {<Notes/>}/>
      <Route path="/github" element= {<Github/>}/>
      <Route path="*" element = {<Notfound/>}/>
    </Routes>
    </>
  )

}
export default App;