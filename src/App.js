import React, { Component } from 'react'
import Movie from './components/Movie'
import data from './data/movies.json'

class App extends Component {
  render() {
    return (
      <>
        {data.results.map(movie => {
          return (
            <Movie
              key={movie.id}
              title={movie.title}
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
