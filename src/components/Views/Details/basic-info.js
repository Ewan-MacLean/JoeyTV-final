// import { useContext } from 'react';
// import ShowContext from '../Context/show-context';
// import { useApi } from '../Context/show-context';
import { Card } from 'react-bootstrap';
import Flag from 'react-world-flags'

const BasicInfo = function (props) {

    const data = props.props[0][0];
    const episodes = props.props[3];

    return (
        <Card>
            {data && (
                <>
                    <Card.Title>Show Info</Card.Title>
                    <Card.Text>Network: {data.network.name} <Flag code={data.network.country.code} width='24px'/>{data.network.country.code}</Card.Text>
                    <Card.Text>Official site: <Card.Link href={data.officialSite}>{data.officialSite}</Card.Link></Card.Text>
                    <Card.Text>Pemiered: {data.premiered}</Card.Text>
                    <Card.Text>Status: {data.status}</Card.Text>
                    <Card.Text>Average runtime: {data.averageRuntime} min.</Card.Text>
                    {
                        episodes && (
                            <Card.Text> Last episode: {episodes.name} S{episodes.season} Ep{episodes.number} on {episodes.airdate}</Card.Text>
                        )
                    }


                </>
            )}
        </Card>
    )
}

export default BasicInfo;