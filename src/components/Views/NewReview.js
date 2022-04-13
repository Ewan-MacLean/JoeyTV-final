import Form from "../ReviewPage/Form";
import ReviewList from "../ReviewPage/ReviewList";
import MovieDetails from "../ReviewPage/MovieDetails";
import {useParams} from 'react-router-dom';

function NewReview () {

  let { myShowId } = useParams();

  return (
    <div className="App">
      <MovieDetails showId={myShowId} />
      <Form showId={myShowId}/>
      <ReviewList showId={myShowId}/>
    </div>
  );

}

export default NewReview;