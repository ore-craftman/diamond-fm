import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const axios = require("axios");

const ResetPassword = () => {
  useEffect(() => {
    document.title = "Reset Password | Diamond FM";
  });

  const { userId } = useParams();

  const [password, setPassword] = useState("");
  const [passwordUpdated, setPasswordUpdated] = useState(null);

  const passResetHandler = (e) => {
    e.preventDefault();
    if (password.length >= 8) {
      const credentials = { userId, password };

      axios
        .post("/users/reset-password", credentials)
        .then((response) => {
          if (response.data.status) {
            setPasswordUpdated("updated");
          } else {
            setPasswordUpdated("!updated");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <Container>
        <Row className="mt-5">
          {passwordUpdated === "updated" ? (
            <Alert variant="success">
              Password updated successfully{" "}
              <Alert.Link href="/df-dashboard">dashboard</Alert.Link>
            </Alert>
          ) : passwordUpdated === "!updated" ? (
            <Alert variant="danger">Error Updating password</Alert>
          ) : null}

          <Col></Col>
          <Col>
            <h5>New Password</h5>
            <Form onSubmit={passResetHandler}>
              <Row className="mb-3">
                {/* <Alert variant="danger">Error</Alert>
                <Alert variant="success">Success...</Alert> */}
                <div>
                  <Form.Group controlId="email">
                    <Form.Label>Create New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="New Password"
                      required={true}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  {password !== "" && password.length < 8 && (
                    <Form.Text className="text-danger mb-3">
                      Password should be at least 8 characters
                    </Form.Text>
                  )}
                  <Button variant="info" type="submit" className="my-3 w-100">
                    create
                  </Button>
                </div>
              </Row>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResetPassword;
