import React, { Component } from 'react'
import Movie from './components/Movie'
import data from './data/movies.json'

class App extends Component {
  state = {
    moviesdata: data.results
  }

  render() {
    // const sorted_date

    return (
      <>
        {this.state.moviesdata
          .sort(
            (a, b) => Date.parse(b.release_date) - Date.parse(a.release_date)
          )
          .map(movie => {
            return (
              <Movie
                key={movie.id}
                title={movie.title}
                dateMovie={new Date(movie.release_date).toDateString()}
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
