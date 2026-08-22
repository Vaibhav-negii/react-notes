import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Notes(){
  const [list,setList] = useState([]);
const [notetxt,setNotetxt] = useState("");
const [error,setError] = useState("");
useEffect(() =>{
  const saved = localStorage.getItem("key");
  if(saved){
    setList(JSON.parse(saved))
  }
},[])
function handleupdate(e){
  e.preventDefault();
  if(notetxt ===""){
    setError("Pls write something")
    return;
  }
  setNotetxt("");
  const Newarray = ([...list,notetxt]);
  setList(Newarray);
  saveStorage(Newarray);




}
function saveStorage(updatedarray){
  localStorage.setItem("key", JSON.stringify(updatedarray))
}
function deletebtn(indexTodelete){
  const updatedarray = (list.filter((note,index)=>(
    index !== indexTodelete
   
    

  )))
   setList(updatedarray)
   saveStorage(updatedarray)
  

}
return(
  <>
  <h1>Note app</h1>
  <form onSubmit={handleupdate}>
    <input type="text" placeholder="Write your note" value={notetxt} onChange={(e) =>setNotetxt(e.target.value)} />
    {error && <p style={{color:"red"}}>{error}</p>}
      {list.map((note,index) =>
  <p key ={index}>{note}<button type="button" onClick={() => deletebtn(index)}>Delete</button></p>

  )}

    
    
  </form>
  </>
)

}
export default Notes;

