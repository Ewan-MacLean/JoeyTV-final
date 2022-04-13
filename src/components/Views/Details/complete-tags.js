import ProgressBar from "react-bootstrap/ProgressBar"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from 'react-bootstrap'

const CompleteTags = function (props) {
    // const summaryData = require('./894summary.json')
    const summaryData = props.props[2];
    let countReviews = summaryData.countReviews;
    let items = [];
    for (let p in summaryData.tagsObj) {
            let progress = (100*summaryData.tagsObj[p]/countReviews);
            items.push(<div key={p}>{p}
                <ProgressBar animated now={progress}/>
            </div>)
        
    }

    let empty  = true;
    let msg = "Be the first one to tag this show!"
    if(countReviews==0) 
    {
        empty = true;
    }
    else
{
    empty = false;  
}

    return (
        <Card>
            <Card.Header as="h2">Show tags</Card.Header>
            {empty? msg : ""}
            {items}

        </Card>
    )
}

export default CompleteTags;