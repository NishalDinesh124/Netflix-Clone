import React from 'react';
import './RowPost.css'
import { useEffect, useState } from 'react';
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'
import YouTube from 'react-youtube';




function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId,setUrlId]= useState('');
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data.results);
      setMovies(response.data.results);
    }).catch(err=>{
      alert("Network error")
    })
  },[]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovies=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results);
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log("Array Empty");
      }
    })
  }

  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className="posters">
        {movies.map((obj)=>
           <img onClick={()=>{handleMovies(obj.id)} } className={props.isSmall ? 'small_poster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Netflix image" /> 
               
          )}          
        </div>
        {urlId && <YouTube videoId={urlId.key} opts={opts} />} 
             
           </div>
  );
}

export default RowPost;
