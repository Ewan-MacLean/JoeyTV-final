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
        <Slider />
      </Row>
      <Row>
        <CheckBox
          columns={columns}
          searchcolumns={searchcolumns}
          setSearchColumns={setSearchColumns}
        />
      </Row>
      <Row>
        {showData
          .sort((a, b) => (a.rating.average < b.rating.average ? 1 : -1)) //TBD Fix the null cases
          .map((x) => (
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
      </Row>
    </Stack>
  );
};

export default ShowList;
