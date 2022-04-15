import { ReviewForm } from "../ReviewPage/ReviewForm";
import ReviewList from "../ReviewPage/ReviewList";
import { MovieDetails } from "../ReviewPage/MovieDetails";
import { useParams } from "react-router-dom";

function NewReview() {
  let { myShowId } = useParams();

  return (
    <div className="App">
      <MovieDetails showId={myShowId} />
      <ReviewForm showId={myShowId} />
      <ReviewList showId={myShowId} />
    </div>
  );
}

export default NewReview;
