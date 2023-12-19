import React from 'react'
import { useLocation } from "react-router"; 
import Footer from '../components/Footer';

const MovieDetail = () => {
  const {state} = useLocation();
  console.log("item:", state)

  return (
    <div>
      <div className='movie-detail' 
      style={{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), URL(" + `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${state.backdrop_path}` + ")",
      }}>        
        <div className='movie-detail-info'>
          <div className='movie-detail-poster'
          style={{backgroundImage:"URL(" + `https://image.tmdb.org/t/p/original/${state.poster_path}` + ")",
        }}>
          </div>
          <div className='movie-detail-list' style={{color:'white'}}>
            영화 디테일
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MovieDetail