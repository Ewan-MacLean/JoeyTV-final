import Form from "./components/reviewForm/Form";
import ReviewList from "./components/ReviewList/ReviewList";
import MovieDetails from "./components/movieDetails/MovieDetails";

function newReview () {
  return (
    <div className="App">
      <MovieDetails />
      <Form />
      <ReviewList />
    </div>
  );

}

export default newReview;