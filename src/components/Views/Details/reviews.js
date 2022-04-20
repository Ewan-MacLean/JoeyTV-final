import SingleReview from "./single-review"
import { Card } from 'react-bootstrap';

const Reviews = function (props) {
    // const reviews = require('./894reviews.json')
    const reviews = props.props[1];
    let empty  = true;
    let msg = "Be the first one to write a review!"
    if(reviews.length==0) 
    {
        empty = true;
    }
    else
{
    empty = false;  
}

    return (
        <Card>
            <Card.Header as="h2">Users reviews</Card.Header>
            {empty? msg : ""}
            <SingleReview props={reviews} />
        </Card>

    )
}

export default Reviews;