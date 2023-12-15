import api from "../api";

function getMovies(){
  return async (dispatch)=>{
    try {
      dispatch({type: "GET_MOVIES_REQUEST"})
      const popularMovieApi = api.get(`movie/popular?language=en-US&page=1`)

      const topRatedMovieApi = api.get(`movie/top_rated?language=en-US&page=1`)
  
      const upcomingMovieApi = api.get(`movie/upcoming?language=en-US&page=1`)

      const genreApi = api.get(`/genre/movie/list?language=en`)
  
      let [popularMovie, topRatedMovie, upcomingMovie, genreList] = await Promise.all([
        popularMovieApi, topRatedMovieApi, upcomingMovieApi, genreApi
      ]);
      console.log("genreList",genreList)
  
      dispatch({
        type: "GET_MOVIES_SECCES",
        payload: {
          popularMovies: popularMovie.data, 
          topRatedMovies: topRatedMovie.data, 
          upcomingMovies: upcomingMovie.data,
          genreList: genreList.data.genres,
        }
      })
    } catch (error) {
      // 에러핸들링 하는 곳
      dispatch({type: "GET_MOVIE_FAILURE"});
    }
  }
}

export const movieAction = {
  getMovies,
}