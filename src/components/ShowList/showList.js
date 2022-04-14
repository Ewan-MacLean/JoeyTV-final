import ShowCard from "../ShowCard/showCard";
import { CheckBox } from "../CheckBox/CheckBox";
import { Col, Row } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import Slider from "../Slider/Slider";

const ShowList = function ({
  showData,
  loading,
  columns,
  searchcolumns,
  setSearchColumns,
}) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Stack>
      <Row>
        <Col>
          <Slider />
        </Col>
      </Row>
      <Row>
        <Col>
          {showData.map((x) => (
            <div key={x.id}>
              <ShowCard
                name={x.name}
                id={x.id}
                rating={x.rating.average}
                image={x.image.medium}
                summary={x.summary}
              />
            </div>
          ))}
        </Col>
        <Col>
          <CheckBox
            columns={columns}
            searchcolumns={searchcolumns}
            setSearchColumns={setSearchColumns}
          />
        </Col>
      </Row>
    </Stack>
  );
};

export default ShowList;
