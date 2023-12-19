import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import StartRating from './StartRating';
import {useNavigate} from 'react-router-dom'

const MovieCard = ({item}) => {
  const { genreList } = useSelector(state=>state.movie)
  const navigate = useNavigate()
  let goingDetailpage = () => {
    navigate(`/movies/${item.id}`, {state: item})
  }
  return (
    <div className='card' style={{border:'none'}}>
      <div 
        className='card-img'
        style={{backgroundImage:"URL(" + `https://image.tmdb.org/t/p/original//${item.poster_path}` + ")",
  }}>
    </div>
          <div className='overlay' onClick={goingDetailpage}>
            <div className='overlay-info'>
              <h1 className='head'>{item.title}</h1> 
              <div className='overlay-badge'>{item.genre_ids.map(id=><Badge bg="secondary">
                {genreList.find(item => item.id === id).name}
              </Badge>)}
              </div>
              <div className='overlay-rating'>
                <StartRating rating={item.vote_average} />
                <span>{item.adult?<Badge pill bg="danger">19</Badge>:<Badge pill bg="warning" text="dark">all</Badge>}</span>
              </div>
            </div>
          </div>
    </div>
  )
}

export default MovieCard