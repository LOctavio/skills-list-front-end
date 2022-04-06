import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { slug } = useParams();
  const username = slug.split(' ').join('_').toLowerCase();

  const [error, setError] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const getSkills = async () => {
      await axios.get(`https://sheltered-gorge-66533.herokuapp.com/api/v1/users/${username}`)
      .then(res => {
        const data = res.data;
        setName(data.full_name);
      })
      .catch(err => {
        setError("This user doesn't exist");
      });
    };
    getSkills();
  }, [username]);

  return(
    <div className="row justify-content-sm-center">
      <div className="col-sm-5">
        if (error!=='') {
          <h1 className="text-white text-center">{error}</h1>
        } else {
          <h1 className="text-white text-center">{name}</h1> 
        }
      </div>
    </div>
    
  );
}

export default User;