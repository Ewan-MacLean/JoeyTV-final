import { Button, Card, ProgressBar } from 'react-bootstrap';
import StarRating from './StarRating';

const SingleReview = function (props) {
    // const reviews = require('./894reviews.json')
    const reviews = props.props;

    return (
        <div>
            {reviews.map(rev => (
                <Card key={rev.userId}>
                    <Card.Title>
                        <StarRating score={rev.rating} />

                    </Card.Title>
                    <Card.Text>{rev.review}</Card.Text>
                    <div>{rev.tags.map(tag => (
                        <Button variant="primary" key={tag} style={{ border: '1px solid black', borderRadius: 5, margin: '2px', padding: '2px' }} >{tag}</Button>
                    ))}</div>
                </Card>))
            }
        </div>
    )
}
export default SingleReview;