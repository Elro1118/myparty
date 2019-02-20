// * Render at least the title, poster image, and plot overview. Feel free to include other pieces of the data.
import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <div className="FirstSection">
        <div className="SecondSection">
          <h3>{this.props.title}</h3>
          <p>{this.props.detail}</p>
        </div>
        <img
          className="ImageSection"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${
            this.props.urlImg
          }`}
        />
      </div>
    )
  }
}

export default Movie
