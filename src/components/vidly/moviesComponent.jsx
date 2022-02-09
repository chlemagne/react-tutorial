import React, { Component } from "react";
import { getMovies } from "../../services/vidly/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movieId) => {
    const movies = this.state.movies.filter((movie) => movie._id !== movieId);

    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count < 1) return <p>There are no movies in the database.</p>;

    return (
      <React.Fragment>
        <p>
          Showing <b>{count}</b> movies in the database.
        </p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Number in Stock</th>
              <th scope="col">Daily Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(movie._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
