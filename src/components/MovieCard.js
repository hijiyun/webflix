import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


const MovieCard = ({item}) => {
  const { genreList } = useSelector(state=>state.movie)
  return (
    <div className='card' style={{border:'none'}}>
      <div 
        className='card-img'
        style={{backgroundImage:"URL(" + `https://image.tmdb.org/t/p/original//${item.poster_path}` + ")",
  }}>
    </div>
          <div className='overlay'>
            <h1 className='head'>{item.title}</h1> 
            <div>{item.genre_ids.map(id=><Badge bg="secondary">
              {genreList.find(item => item.id === id).name}
            </Badge>)}
            </div>
            <div>
              <span>{item.vote_average.toFixed(1)}</span>
              <span>{item.adult?<Badge pill bg="danger">19</Badge>:<Badge pill bg="warning" text="dark">all</Badge>}</span>
            </div>
          </div>
    </div>
  )
}

export default MovieCard