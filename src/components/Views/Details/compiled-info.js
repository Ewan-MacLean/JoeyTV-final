// import { useContext } from 'react';
// import ShowContext from '../Context/show-context';
// import { useApi } from '../Context/show-context';
import { Figure, ProgressBar, Button, Card } from 'react-bootstrap';
import StarRating from '../../StarRating';

const CompiledInfo = function (props) {
    // const data = require('./894.json')
    const data = props.props[0][0];
    // const summaryData = require('./894summary.json')
    const summaryData = props.props[2];
    
    const saveFavorite = function () {
        alert('Saving favorite TBD')
    }

    const copyLink = function () {
        alert('Share TBD')
    }



    return (
        <Card>
        {data && (
       <div>
            <h1>{data.name} </h1>   
            <Figure>
                <Figure.Image
                    src={data.image.medium} />
                <Figure.Caption>
                    Show image
                </Figure.Caption>
            </Figure>
            <div>
                Recommended ages:
                {summaryData? summaryData.ages.sort((a,b)=>a-b).map(age => (
                    <Button variant="light" key={age} >{age}</Button>
                )): ''}
            </div>
            <div>
                Show Rate
                <StarRating score={summaryData.rating} />
                 
            </div>
            <Card body>
                {(data.summary.replace(/<p[^>]*>/g, '').replace(/<b>/g, '').replace(/<\/b>/g, ''))}
            </Card>
            <div id='Showlinks'>
                <Button href="">Review</Button>
                <Button onClick={saveFavorite}>Favorites</Button>
                <Button onClick={copyLink}>Share</Button>
                <div>
                    <p>Available on:</p>
                    <Button variant="outline-secondary" href="">Netflix </Button>
                    <Button variant="outline-secondary" href="">DisneyPlus </Button>
                </div>
            </div>
        </div>
        )}
        </Card>
    )
}

export default CompiledInfo;