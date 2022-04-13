import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const ShowCard = function(props){
    // console.log({props})


    return(
        <Card className='mb-3' style={{ width: '60rem' }}>
            <div className='row g-0'>
                <div className='col-md-4'>
                    <Card.Img variant="top" src={props.image} />
                </div>
                <div className='col-md-8'>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>{props.summary}</Card.Text>
                        <Card.Text>Rating {props.rating}</Card.Text>
                        {/* <Link to={"/details/"+props.showId} > <button type="button">Testing</button></Link> */}
                        <Button as={Link} to={"/details/"+props.showId} variant="primary">Details</Button>
                    </Card.Body>
                </div>
            </div>
            
        </Card>
        
    );
};

export default ShowCard;