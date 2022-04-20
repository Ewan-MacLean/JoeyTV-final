import React from "react";
// import Form from "react-bootstrap/Form";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
import FormCheck from "react-bootstrap/FormCheck";
import "./CheckBox.css";

export const CheckBox = ({ columns, searchcolumns, setSearchColumns }) => {
  return (
    <Row md={1} style={{ width: "1010px" }}>
      <Col>
        <Card>
          <Form>
            <p className="contcheck">Search Properties</p>
            {columns &&
              columns.map((column) => (
                <Form.Check.Label className="contcheck" key={column}>
                  <Form.Check.Input
                    className="boxes"
                    type="checkbox"
                    checked={searchcolumns.includes(column)}
                    onChange={(e) => {
                      const checked = searchcolumns.includes(column);
                      setSearchColumns((prev) =>
                        checked
                          ? prev.filter((x) => x !== column)
                          : [...prev, column]
                      );
                    }}
                  />
                  {column}
                  <span className="checkmark"></span>
                </Form.Check.Label>
              ))}
          </Form>
        </Card>
      </Col>
    </Row>
  );
};
