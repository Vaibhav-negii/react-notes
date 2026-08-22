 function Searchform({username,setUsername,onSearch}){
        return(
          <form onSubmit={onSearch}>
        <input type="text" placeholder="Enter github username" value={username} onChange={(e) =>setUsername(e.target.value)}/>
        <button type ="submit">Search</button>
        </form>
        );
      }
      export default Searchform;