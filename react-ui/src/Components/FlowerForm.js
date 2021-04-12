import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { withRouter } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function FlowerForm(props) {
  const [sepal_length, setSepal_length] = useState("");
  const [sepal_width, setSepal_width] = useState("");
  const [petal_length, setPetal_length] = useState("");
  const [petal_width, setPetal_width] = useState("");
  const [learning_rate, setLearning_rate] = useState("");
  const [epochs, setEpochs] = useState("");
  const [predictedData, setPredictedData] = useState({});
  const [showLoading, setShowLoading] = useState(true);
  const [predictedFlowerName, setPredictedFlowerName] = useState("");

  const apiUrl = "http://localhost:3000/run";

  const sendData = (e) => {
    setShowLoading(false);
    e.preventDefault();
    const data = {
      sepal_length: sepal_length,
      sepal_width: sepal_width,
      petal_length: petal_length,
      petal_width: petal_width,
      learning_rate: learning_rate,
      epochs: epochs,
    };
    axios
      .post(apiUrl, data)
      .then((response) => {
        console.log(response.data);
        setPredictedData(response.data);
        var name = "";
        var index = response.data.row.findIndex((v) => Math.round(v) === 1);
        if (index === 0) {
          setPredictedFlowerName("Setosa");
          name = "Setosa";
          console.log("index: " + index);
        } else if (index === 1) {
          setPredictedFlowerName("Virginica");
          name = "Virginica";
          console.log("index: " + index);
        } else if (index === 2) {
          name = "Versicolor";
          setPredictedFlowerName("Versicolor");
          console.log("index: " + index);
        } else {
          console.error("error: index" + index);
        }
        console.log("predictedFlowerName: " + predictedFlowerName);
        console.log("predictedData: " + response.data.row);
        
        props.history.push({
          pathname: "/showResults",

          predictedFlowerName: name,
          predictedData: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {showLoading === true ? (
        <div>
          <Jumbotron className="text-center">
            <h3>Flower Form</h3>
          </Jumbotron>
          <Container>
            <Form onSubmit={sendData} className="col-md-10 offset-md-1">
              <Row>
                <Form.Group as={Col} md="6">
                  <Form.Label>Sepal Length</Form.Label>
                  <Form.Control
                    name="sepal_length"
                    id="sepal_length"
                    placeholder=""
                    type="number"
                    step="0.1"
                    onChange={(e) => setSepal_length(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Sepal Width</Form.Label>
                  <Form.Control
                    name="sepal_width"
                    id="sepal_width"
                    placeholder=""
                    type="number"
                    step="0.1"
                    onChange={(e) => setSepal_width(e.target.value)}
                  required/>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} md="6">
                  <Form.Label>Petal Length</Form.Label>
                  <Form.Control
                    name="petal_length"
                    id="petal_length"
                    placeholder=""
                    type="number"
                    step="0.1"
                    onChange={(e) => setPetal_length(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Petal Width</Form.Label>
                  <Form.Control
                    name="petal_width"
                    id="petal_width"
                    placeholder=""
                    type="number"
                    step="0.1"
                    onChange={(e) => setPetal_width(e.target.value)}
                    required
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} md="6">
                  <Form.Label>Learning Rate</Form.Label>
                  <Form.Control
                    name="learning_rate"
                    id="learning_rate"
                    placeholder="0.07"
                    type="number"
                    step="0.01"
                    onChange={(e) => setLearning_rate(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Epochs</Form.Label>
                  <Form.Control
                    name="epochs"
                    id="epochs"
                    type="number"
                    placeholder="200"
                    step="any"
                    onChange={(e) => setEpochs(e.target.value)}
                    required
                  />
                </Form.Group>
              </Row>
              <Row className="mt-3">
                <Button className="btn btn-block" type="submit">
                  Submit
                </Button>
              </Row>
            </Form>
          </Container>
        </div>
      ) : (
        <div className="text-center">
          <Spinner className="mt-5" animation="border" role="status">
            <span className="sr-only">Waiting for results...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
}
export default withRouter(FlowerForm);
