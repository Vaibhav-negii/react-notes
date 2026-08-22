import { useState } from "react";
import "../App.css";
import Searchform from "./SearchForm";  
import ProfileCard from "./ProfileCard";

 function Github(){
  const [username,setUsername] = useState("");
  const  [result,setResult] = useState(null);
  const [error,setError] = useState("");
  const [profile,setProfile] = useState("");


 async  function handlesubmit(e){
  e.preventDefault();
  try{
    setResult("loading");
  let fetching = await fetch(`https://api.github.com/users/${username}`);
  if(!fetching.ok) throw new Error("server not responding");
  const data = await fetching.json();

  setProfile(data);
  setResult("successful");
  }catch(err){
    setResult("Error");
    setError(err.message);
    

  }
}
  





return(
  <div>
  <h1>github lookup</h1>
   <Searchform username ={username} setUsername={setUsername} onSearch={handlesubmit}/>
    <div id="result">
      {result === "successful" && (
       <ProfileCard profile={profile}/>
      )
      }
      {result ==="Error" && (
       <p>{error}</p>
      )}
      {result ==="loading" && (
        <p>Loading ...</p>


      )}


    </div>


  
  </div>

);

}
export default Github;