import React from 'react';
import './RowPost.css'
import { useEffect, useState } from 'react';
import axios from '../../axios'
import {imageUrl} from '../../constants/constants'



function RowPost(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data.results);
      setMovies(response.data.results);
    }).catch(err=>{
      alert("Network error")
    })
  }, []);
  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className="posters">
          {movies.map((obj)=>
              <img className={props.isSmall ? 'small_poster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Netflix image" /> 
          )}
                        
        </div>
      
    </div>
  );
}

export default RowPost;
