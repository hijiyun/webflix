import api from "../api";

function getMovies(){
  return async (dispatch)=>{
    const popularMovieApi = api.get(`movie/popular?language=en-US&page=1`)

    const topRatedMovieApi = api.get(`movie/top_rated?language=en-US&page=1`)

    const upcomingMovieApi = api.get(`movie/upcoming?language=en-US&page=1`)

    let [popularMovie, topRatedMovie, upcomingMovie] = await Promise.all([
      popularMovieApi, topRatedMovieApi, upcomingMovieApi
    ]);

    dispatch({
      type: "GET_MOVIES_SECCES",
      payload: {popularMovies: popularMovie.data, topRatedMovies: topRatedMovie.data, upcomingMovies:upcomingMovie.data}
    })
  }
}

export const movieAction = {
  getMovies,
}