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

  const apiUrl = "http://localhost:3000/run";

  const sendData = (e) => {
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
        console.log(response);
        setPredictedData(response.data);
        setShowLoading(false);
        //props.history.push("/showDetails");
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
                    step="any"
                    onChange={(e) => setSepal_length(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Sepal Width</Form.Label>
                  <Form.Control
                    name="sepal_width"
                    id="sepal_width"
                    placeholder=""
                    type="number"
                    step="any"
                    onChange={(e) => setSepal_width(e.target.value)}
                  />
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
                    step="any"
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
                    step="any"
                    onChange={(e) => setPetal_width(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} md="6">
                  <Form.Label>Learning Rate</Form.Label>
                  <Form.Control
                    name="learning_rate"
                    id="learning_rate"
                    placeholder=""
                    type="number"
                    step="any"
                    onChange={(e) => setLearning_rate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Epochs</Form.Label>
                  <Form.Control
                    name="epochs"
                    id="epochs"
                    type="number"
                    placeholder=""
                    step="any"
                    onChange={(e) => setEpochs(e.target.value)}
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
        <div>
          <Container>
            <div className="jumbotron text-center">
                <h2>Prediction Results</h2>
            
            <h2> The values for species will be:</h2>
            <li>setosa: 1,0,0</li>
            <li>virginica: 0,1,0</li>
            <li>versicolor: 0,0,1 </li>
            </div>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <table className="App-table">
                      <thead>
                        <tr>
                          <th>Test Results</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="App-td">
                            {predictedData.row1.map((value, index) => (
                              <p key={index}>{value}</p>
                            ))}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}
export default withRouter(FlowerForm);