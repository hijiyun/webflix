import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from "react-router"; 
import Footer from '../components/Footer';
import StartRating from '../components/StartRating';
import axios from 'axios';

const API_TOKEN = process.env.REACT_APP_API_TOKEN


const MovieDetail = () => {
  const { genreList } = useSelector(state=>state.movie)
  const {state} = useLocation();
  console.log("item:", state)

  const [movieDetails, setMovieDetails] = useState(null);
  let id = state.id
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const url = (`https://api.themoviedb.org/3/movie/${id}?language=ko`);
        const headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_TOKEN}`, 
        };
        
        console.log(url)
        const response = await axios.get(url, {headers});
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [state]);
  console.log("movieDetails", movieDetails)

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const contentHeight = document.documentElement.scrollHeight;
    const middlePosition = Math.max((contentHeight - windowHeight) / 2, 0);
    //스크롤 위치 수정
    window.scrollTo(0, middlePosition); 
  }, []);

  return (
    <div style={{position:'relative'}}>
      <div className='movie-detail' 
      style={{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), URL(" + `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${state.backdrop_path}` + ")",
      }}>
        <div className='blur'></div>
        <div className='movie-detail-info'>
          <div className='movie-detail-poster'
          style={{backgroundImage:"URL(" + `https://image.tmdb.org/t/p/original/${state.poster_path}` + ")",
        }}>
          </div>
          <div className='movie-detail-list' style={{color:'white'}}>
            <p className='movie-detail-title'>{state.title}</p>
            <p className='movie-detail-title2'>{movieDetails ? movieDetails.tagline : null} </p>

            <div style={{marginTop:10, fontWeight:700}}>
              <div style={{marginBottom:8}}>
                <span className='tag'>개봉</span>
                <span>{movieDetails ? movieDetails.release_date : null}</span> <br></br>
              </div>
              <div style={{marginBottom:8}}>
                <span className='tag'>국가</span>
                <span>{movieDetails ? movieDetails.production_countries[0].name : null}</span><br></br>
              </div>
              <div style={{marginBottom:8}}>
                <span className='tag'>시간</span>
                <span>{movieDetails ? movieDetails.runtime : null} min</span><br></br>
              </div>
              <div style={{marginBottom:8}}>
                <span className='tag'>장르</span>
                <span className='movie-detail-badge'>
                {state.genre_ids.map(id=><span style={{marginRight:8}}>{genreList.find(item => item.id === id).name}</span>)}
                </span>
              </div>
              <div className='movie-detail-rating'>
                <span className='tag'>평점</span>
                <span><StartRating rating={state.vote_average} /></span>
              </div>
            </div>
            <p className='movie-detail-overview'>{state.overview}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MovieDetail