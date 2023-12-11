import React,{useEffect} from 'react';
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';


const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upcomingMovies} = useSelector(state => state.movie)

  useEffect(()=>{
    dispatch(movieAction.getMovies())
  },[])
  return (
    <div>
      <Banner movie={popularMovies.result[0]}/>
    </div>
  )
}

export default Home