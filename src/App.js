import React, { Component } from 'react'
import Movie from './components/Movie'
import data from './data/movies.json'

class App extends Component {
  render() {
    // const sorted_date

    return (
      <>
        {/* {data.results.sort((a, b) => a.release_date > b.release_date)} */}

        {data.results.map(movie => {
          return (
            <Movie
              key={movie.id}
              title={movie.title}
              dateMovie={movie.release_date}
              detail={movie.overview}
              urlImg={movie.poster_path}
            />
          )
        })}
      </>
    )
  }
}

export default App
