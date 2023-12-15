import React from 'react'
import Badge from 'react-bootstrap/Badge';

const MovieCard = ({item}) => {
  return (
    <div 
      className='card'
      style={{backgroundImage:"URL(" + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.poster_path}` + ")",
      height:200}}>
        <div className='overlay'>
          <h1>{item.title}</h1> 
          <div>{item.genre_ids.map(id=><Badge bg="secondary">{id}</Badge>)}</div>
          <div>
            <span>{item.vote_average}</span>
            <span>{item.adult?<Badge pill bg="danger">19</Badge>:<Badge pill bg="warning" text="dark">all</Badge>}</span>
          </div>
        </div>
    </div>
  )
}

export default MovieCard