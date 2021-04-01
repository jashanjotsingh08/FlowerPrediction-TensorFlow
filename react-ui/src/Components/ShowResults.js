import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Badge from "react-bootstrap/Badge";

function ShowDetails(props) {
  console.log("props.history: ", props.history);
  console.log("props: ", props);

  const predictedData = props.history.location.predictedData;
  const [showLoading, setShowLoading] = useState(true);
  const predictedFlowerName = props.history.location.predictedFlowerName;

  function goBack() {
    props.history.push("/flowerForm");
  }

  return (
    <div>
      <div className="jumbotron text-center">
        <h2>Prediction Results</h2>
        {/* <h3 className="text-danger">
          Predicted Flower : {predictedFlowerName}
        </h3> */}
      </div>
      <Container>
          <div className="text-center">
        {/* <div className="row">
          <div className="col-md-4 offset-md-4">
            <table className="App-table table table-striped ">
              <thead className="thead-light">
                <tr>
                  <th>Test Results</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="App-td">
                    {predictedData.row.map((value, index) => (
                      <p key={index}>{value}</p>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-center col-md-4 offset-md-4">
          <button className="btn btn-primary btn-block" onClick={goBack}>
            Back
          </button>
        </div> */}
        <Card bg={'light'} style={{width: '100%'}}>
        <Card.Header className="text-center">
            <h1>
             Test Results</h1>
            </Card.Header>
          <Card.Body>
         
            <Card.Title className="">Predicted Flower : {predictedFlowerName}</Card.Title>
            </Card.Body>
          
          <ListGroup className="list-group-flush" bg={'light'}>
          {predictedData.row.map((value, index) => (
                      <ListGroupItem key={index}>{value}</ListGroupItem>
                    ))}
          </ListGroup>
          <Card.Body>
          <div className="text-center mt-2">
          <button className="btn btn-primary btn-block" onClick={goBack}>
            Back
          </button>
        </div>
        </Card.Body>
        </Card>
        </div>
      </Container>
    </div>
  );
}

export default withRouter(ShowDetails);
