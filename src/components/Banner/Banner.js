import React,{useEffect,useState} from 'react';
import './Banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'

function Banner() {
  const [movie, setmovie] = useState([]);
  const [urlId,setUrlId]=useState('');

  useEffect(() => {
   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    setmovie(response.data.results.sort(function(a,b){return 0.5-Math.random()})[0])
   })
  }, []);

  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+ movie.backdrop_path : ""})`}} >
     <div className="contents">
        <h1 className='title'>{movie ? movie.title : ""}</h1>
        <div className="banner_buttons">
            <button className='button'><i class="fa-solid fa-play"></i>Play</button>
            <button className='button'><i class="fa-solid fa-list"></i>My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview: ""}</h1>
       
     </div>
     <div className="fade_bottom">
    
            </div>
    </div>
  );
}

export default Banner;
