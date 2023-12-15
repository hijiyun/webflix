import React,{useEffect} from 'react';
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upcomingMovies, loading} = useSelector(state => state.movie)
  
  useEffect(()=>{
    dispatch(movieAction.getMovies())
  },[])

  if(loading){
    return <ClipLoader color="#ffff" loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader"
  />
  }
  return (
    <div>
      <Banner movie={popularMovies.results[0]}/>
      <h1>popular movie</h1>
      <MovieSlide movies={popularMovies}/>
      <h1>top rated movie</h1>
      <MovieSlide movies={topRatedMovies}/>
      <h1>upcoming movie</h1>
      <MovieSlide movies={upcomingMovies}/>
    </div>
  )
}

export default Home