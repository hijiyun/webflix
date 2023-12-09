let initialState={
  popularMovies:{},
  topRatedMovies:{},
  upcomingMovies:{}
}

function movieReducer(state = initialState, action){
  let {type, payload} = action;
  switch(type){
    case "GET_MOVIES_SECCES":
      return {...state,}
  }
}

export default movieReducer;