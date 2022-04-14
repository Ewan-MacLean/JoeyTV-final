// import { useContext } from 'react';
// import ShowContext from '../Context/show-context';
// import { useApi } from '../Context/show-context';
import { Figure, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const CompiledInfo = function (props) {

    const data = props.props[0][0];
    const summaryData = props.props[2];

    const saveFavorite = function () {
        alert('Saving favorite TBD')
    }

    const copyLink = function () {
        navigator.clipboard.writeText(window.location.href)
        alert('Link copied to clipboard')
    }



    return (
        <Card>
            {data && (
                <div>
                    <Card.Title>{data.name} </Card.Title>
                    <Figure>
                        <Figure.Image
                            src={data.image.medium} />
                    </Figure>
                    <Card.Text>
                        Recommended ages:
                        {summaryData ? summaryData.ages.sort((a, b) => a - b).map(age => (
                            <Button variant="light" key={age} >{age}</Button>
                        )) : 'Not available'}
                    </Card.Text>
                    <Card.Text>
                        Show Rate
                        <StarRating score={summaryData.rating} />
                        - based in {summaryData.countReviews} review(s)

                    </Card.Text>
                    <Card.Body>
                        {(data.summary.replace(/<p[^>]*>/g, '').replace(/<b>/g, '').replace(/<\/b>/g, ''))}
                    </Card.Body>
                    <Card.Body id='Showlinks'>
                        <Button as={Link} to={"/newReview/" + data.id}>Review</Button>
                        <Button onClick={saveFavorite}>Favorites</Button>
                        <Button onClick={copyLink}>Share</Button>
                        <Card.Text>
                            Available on:
                            <Button variant="outline-secondary" href="">Netflix </Button>
                            <Button variant="outline-secondary" href="">DisneyPlus </Button>
                        </Card.Text>
                    </Card.Body>
                </div>
            )}
        </Card>
    )
}

export default CompiledInfo;