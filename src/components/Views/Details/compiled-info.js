import { Figure, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import Flag from "react-world-flags";

const CompiledInfo = function (props) {
  const data = props.props[0][0];
  const summaryData = props.props[2];

  const saveFavorite = function () {
    alert("Saving favorite TBD");
  };

  const copyLink = function () {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard");
  };

  return (
    <Card className="text-center">
      {data && (
        <div>
          <Card.Title>
            <h2>{data.name}</h2>
          </Card.Title>
          <Figure>
            <Figure.Image src={data.image.medium} />
          </Figure>
          <Card.Text>
            <b>Show Type: </b>
            {data.type}
          </Card.Text>
          <Card.Text style={{ margin: 20 }}>
            <b>Recommended ages:</b>
            {summaryData
              ? summaryData.ages
                  .sort((a, b) => a - b)
                  .map((age) => (
                    <Button variant="light" key={age}>
                      {age}
                    </Button>
                  ))
              : "Not available"}
          </Card.Text>
          <Card.Text style={{ margin: 20 }}>
            <b>Show Rate</b>
            <StarRating score={summaryData.rating} />- based on{" "}
            {summaryData.countReviews} review(s)
          </Card.Text>
          <Card.Body>
            <Card>{data.summary}</Card>
            <Card>
              {data && (
                <>
                  <Card.Title>Show Info</Card.Title>
                    <Card.Text>
                      <b>Network:</b> {data.network.name ? data.network.name : ""}
                      <Flag code={data.network.country.code ? data.network.country.code : ""} width="24px" />
                      {data.network.country.code ? data.network.country.code : ""}
                    </Card.Text>
                  <Card.Text>
                    <b>Official site:</b>
                    <Card.Link href={data.officialSite}>
                      {data.officialSite}
                    </Card.Link>
                  </Card.Text>
                  <Card.Text>
                    <b>Pemiered:</b> {data.premiered}
                  </Card.Text>
                  <Card.Text>
                    <b>Status:</b> {data.status}
                  </Card.Text>
                  <Card.Text>
                    <b>Average runtime:</b> {data.averageRuntime} min.
                  </Card.Text>
                  <Card.Text>
                    <b>Schedule days and time: </b>
                    {data.schedule.days.toString()} <b>at </b>
                    {data.schedule.time}
                  </Card.Text>
                </>
              )}
            </Card>
          </Card.Body>
          <Card.Body id="Showlinks">
            <Button
              style={{ margin: 5 }}
              as={Link}
              to={"/newReview/" + data.id}
            >
              Write A Review
            </Button>
            <Button style={{ margin: 5 }} onClick={saveFavorite}>
              Favorites
            </Button>
            <Button style={{ margin: 5 }} onClick={copyLink}>
              Share
            </Button>
            <Card.Text>
              Available on:
              <Button style={{ margin: 5 }} variant="outline-secondary" href="">
                Netflix{" "}
              </Button>
              <Button style={{ margin: 5 }} variant="outline-secondary" href="">
                DisneyPlus{" "}
              </Button>
            </Card.Text>
          </Card.Body>
        </div>
      )}
    </Card>
  );
};

export default CompiledInfo;
