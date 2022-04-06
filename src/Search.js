import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () =>{
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  return(
    <div className="container p-5 mt-5">
      <h1 className="text-white text-center">Type the username and click the button to find user skills</h1>
      <div className="input-group input-group-lg p-3 mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Username" aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="btn btn-secondary"
          type="button"
          id="button-addon2"
          onClick={() => {
              navigate(`/user/${input}`);
          }}
        >Search</button>
      </div>
    </div>
  );
} 


export default Search;