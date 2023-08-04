import {useState, useEffect} from 'react'
import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay'
import './App.css';
// console.log(process.env.REACT_APP_MOVIE_API_KEY);

function App() {
  const apiKey = process.env.REACT_APP_MOVIE_API_KEY

  const[movie, setMovie] = useState(null);

  // Get data from teh API
  const getMovie = async (searchTerm) =>{
   try{
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
    const data = await response.json();
    setMovie(data)
  }catch(e){
    console.log(e)
  }
   }
  // useEffect: runs once 
  useEffect(() =>{
    getMovie('Clueless')
  }, [])

  return (
    <div className="App">
      <Form movieSearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
