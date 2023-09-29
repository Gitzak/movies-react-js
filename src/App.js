// import { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';

// 78a9e749

// const DOMAIN = 'https://www.omdbapi.com?apikey=78a9e749';

function App() {

  // const searchMovies = async (title) => {
  //   const response = await fetch(`${DOMAIN}&s=${title}`);
  //   const data = await response.json();

  //   console.log(data);
  // }

  // useEffect(() => {
  //   searchMovies('Titanic')
  // }, []);

  return (
    <div>
      <Navbar />
      <Header textHeader="Watch Movies Online Free" textP="LFRAJA is one of the best free sites to watch movies online for free" />
    </div>
  );
}

export default App;
