import SingleReview from "./single-review"
import { Card } from 'react-bootstrap';

const Reviews = function (props) {
    // const reviews = require('./894reviews.json')
    const reviews = props.props[1]

    return (
        <Card>
            <Card.Header as="h2">Complete Reviews</Card.Header>
            <SingleReview props={reviews} />
        </Card>

    )
}

export default Reviews;