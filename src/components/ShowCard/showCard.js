import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ShowCard = function(props){
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
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                </div>
            </div>
        </Card>
    );
};

export default ShowCard;