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


    return (
        <Card>
            <Card.Header as="h2">All tags</Card.Header>
            {items}

        </Card>
    )
}

export default CompleteTags;