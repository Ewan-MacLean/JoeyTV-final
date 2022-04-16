import { ReviewForm } from "../ReviewPage/ReviewForm";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

function NewReview() {
  let { showId } = useParams();

  return (
    <Card className="text-center">
      <ReviewForm showId={showId} />
    </Card>
  );
}

export default NewReview;
