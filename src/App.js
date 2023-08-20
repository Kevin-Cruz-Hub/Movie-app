import {useState, useEffect} from 'react'
import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay'
import './App.css';
// console.log(process.env.REACT_APP_MOVIE_API_KEY);

function App() {
  // You always need to enter process.env.<api key variable>
  // if you put a new environment variable you need to stop the server and run it again
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
    <div className='bg-white m-20 rounded-3xl flex flex-col justify-center items-center shadow-2xl'>
      <h1 className='text-2xl border-3 text-yellow-400 ease-in duration-200 hover:text-yellow-600'>Movie Display</h1>
      <Form movieSearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
