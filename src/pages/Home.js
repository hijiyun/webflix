import React,{useEffect} from 'react';
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import ClipLoader from "react-spinners/ClipLoader";
import Footer from '../components/Footer';

const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upcomingMovies, loading} = useSelector(state => state.movie)
  
  useEffect(()=>{
    dispatch(movieAction.getMovies())
  },[])

  if(loading){
    return <ClipLoader color="#ffff" loading={loading} size={50} aria-label="Loading Spinner" data-testid="loader"
  />
  }
  return (
    <div>
      <Banner movie={popularMovies.results[0]}/>
      <div className='movies-series'>
        <h1 className='title'>보고 또 봐도 좋은 인기 시리즈</h1>
        <MovieSlide movies={popularMovies}/>
        <h1 className='title'>오늘 탑20 시리즈</h1>
        <MovieSlide movies={topRatedMovies}/>
        <h1 className='title'>이제 올라올 시리즈</h1>
        <MovieSlide movies={upcomingMovies}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home