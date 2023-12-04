import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
