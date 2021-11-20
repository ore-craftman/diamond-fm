import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const axios = require("axios");

const Login = () => {
  useEffect(() => {
    document.title = "Login | DiamondFM";
  });
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clientError, setClientError] = useState(null);
  const history = useHistory();
  const [forgotPassword, setForgotPassword] = useState(false);
  const hideModal = () => setForgotPassword(false);
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [recoveryDataError, setRecoveryDataError] = useState(null);
  const [recoveryLinkSent, setRecoveryLinkSent] = useState(false);

  const passRecoveryHandler = (e) => {
    e.preventDefault();

    const clientInfo = { email: recoveryEmail };
    axios
      .post("/users/forget-password", clientInfo)
      .then((response) => {
        if (!response.data.status) {
          setRecoveryDataError(response.data.message);
        } else {
          setRecoveryLinkSent(true);
          setRecoveryDataError(null);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const credentials = { email, password };

    axios
      .post("/users/auth", credentials)
      .then((response) => {
        if (!response) {
          setClientError("Error logging In");
          setSubmitting(false);
        } else if (!response.data.status) {
          setClientError(response.data.message);
          setSubmitting(false);
        } else {
          let date = new Date();
          date.setTime(date.getTime() + 15 * 24 * 60 * 60 * 1000);
          let expires = date.toUTCString();
          document.cookie = `uid=${response.data.user._id};expires=${expires};path=/;`;
          history.push("/df-dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
        setClientError("Error logging In");
        setSubmitting(false);
      });
  };

  return (
    <div>
      <div className="container-fluid">
        <Row className="h-100">
          <Col xs={6} style={{ padding: "0" }} className="d-none d-lg-block">
            <Image
              src="/media/authLeft.png"
              fluid
              style={{ width: "100%", height: "99.9vh" }}
            />
          </Col>
          <Col style={{ height: "95vh" }}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <section className="w-100 px-md-5 ps-lg-5">
                <div className="d-flex mb-4 align-items-center">
                  <Image src="/media/icon.png" className="me-2" />
                  <h5 className="fw-bolder">DiamondFM</h5>
                </div>
                <div>
                  <h4 className="fw-bold mb-4">SIGN IN</h4>
                  {clientError && <Alert variant="danger">{clientError}</Alert>}
                  <Form onSubmit={loginHandler}>
                    <Row className="mb-3">
                      <Form.Group controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="johndoe@gmail.com"
                          required={true}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="********"
                          required={true}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>
                    </Row>

                    <Row>
                      <Col>
                        <Button
                          variant="info"
                          type="submit"
                          className="text-white mb-3"
                        >
                          {submitting ? (
                            <span>
                              <Spinner
                                as="span"
                                size="sm"
                                animation="border"
                                role="status"
                                aria-hidden="true"
                              />
                              <span className="mx-1">Loading...</span>
                            </span>
                          ) : (
                            <span>Sign In</span>
                          )}
                        </Button>
                      </Col>
                      <Col></Col>
                    </Row>
                    <Row>
                      <p>
                        Forgot Password?{" "}
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            setForgotPassword(true);
                          }}
                        >
                          Reset Password
                        </a>
                      </p>
                    </Row>
                  </Form>
                </div>
              </section>
            </div>
          </Col>
        </Row>
      </div>

      <Modal size="sm" show={forgotPassword} onHide={hideModal} centered>
        <Modal.Header>
          <Modal.Title>Password Recovery</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h5>Email Address</h5>
          <Form onSubmit={passRecoveryHandler}>
            <Row className="mb-3">
              {recoveryDataError && (
                <Alert variant="danger">{recoveryDataError}</Alert>
              )}

              {recoveryLinkSent ? (
                <Alert variant="success">
                  Recovery link sent, kindly check your email
                </Alert>
              ) : (
                <div>
                  <Form.Group controlId="email">
                    <Form.Label>
                      Provide the email attached with your account
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Your email"
                      required={true}
                      value={recoveryEmail}
                      onChange={(e) => setRecoveryEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    variant="info"
                    type="submit"
                    className="my-3 ms-2 w-75"
                  >
                    Submit
                  </Button>
                </div>
              )}
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
