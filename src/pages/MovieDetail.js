import React from 'react'
import { useLocation } from "react-router"; 
import Footer from '../components/Footer';

const MovieDetail = () => {
  const {state} = useLocation();
  console.log("item:", state)

  return (
    <div>
      <div className='movie-detail' 
      style={{backgroundImage:"URL(" + `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${state.backdrop_path}` + ")",
      }}>        
        <div>
          포스터 이미지
        </div>
        <div>
          영화 디테일
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MovieDetail