// import logo from "./logo.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const axios = require("axios");

function Signup() {
  useEffect(() => {
    document.title = "Sign Up | Diamond FM";
  });

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [renderConfPassMatchHint, setRenderConfPassMatchHint] = useState(false);

  const [userError, setUserError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (password === passwordMatch) {
      setRenderConfPassMatchHint(false);
    }
  }, [password, passwordMatch]);

  const signupHandler = (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (password.length < 8 || password !== passwordMatch) {
      setSubmitting(false);
    } else {
      let data = {
        firstname,
        lastname,
        email,
        role,
        password,
      };

      // iF user enters avatar convert to base 64
      const reader = new FileReader();
      reader.addEventListener("load", async () => {
        data.avatar = reader.result;

        const userInstance = await axios.post("/users", data);
        if (!userInstance.data.status) {
          setUserError(userInstance.data.message);
        } else {
          let date = new Date();
          date.setTime(date.getTime() + 15 * 24 * 60 * 60 * 1000);
          let expires = date.toUTCString();
          document.cookie = `uid=${userInstance.data.user._id};expires=${expires};path=/;`;
          history.push("/df-dashboard");
        }
        setSubmitting(false);
      });

      if (avatar) {
        reader.readAsDataURL(avatar);
      } else {
        axios
          .post("/users", data)
          .then((response) => {
            if (response.status && response.data.status) {
              let date = new Date();
              date.setTime(date.getTime() + 15 * 24 * 60 * 60 * 1000);
              let expires = date.toUTCString();
              document.cookie = `uid=${response.data.user._id};expires=${expires};path=/;`;
              history.push("/df-dashboard");
            } else {
              setUserError(response.data.message);
              setSubmitting(false);
            }
          })
          .catch((err) => {
            console.log(err);
            setSubmitting(false);
          });
      }
    }
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
                  <h4 className="fw-bold mb-4">SIGN UP</h4>
                  {userError ? (
                    <Alert variant="danger">
                      {userError}{" "}
                      <Alert.Link href="/df-login">Login Instead</Alert.Link>
                    </Alert>
                  ) : null}

                  <Form onSubmit={signupHandler}>
                    <Row className="mb-3">
                      <Col>
                        <Form.Group controlId="firstname">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="John"
                            value={firstname}
                            required={true}
                            onChange={(e) => setFirstname(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="lastname">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Doe"
                            value={lastname}
                            required={true}
                            onChange={(e) => setLastname(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col>
                        <Form.Group controlId="email">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="johndoe@gmail.com"
                            value={email}
                            required={true}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="role">
                          <Form.Label>Role</Form.Label>
                          <Form.Select
                            onChange={(e) => setRole(e.target.value)}
                            required={true}
                          >
                            <option value="">Select</option>
                            <option value="editor">Editor</option>
                            <option value="admin">Admin</option>
                          </Form.Select>
                          {role === "" && (
                            <Form.Text className="text-danger">
                              Select a role! Editor or Admin
                            </Form.Text>
                          )}
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col>
                        <Form.Group controlId="password">
                          <Form.Label>Create Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="*******"
                            value={password}
                            required={true}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Form.Group>
                        {password !== "" && password.length < 8 && (
                          <Form.Text className="text-danger">
                            Password should be at least 8 characters
                          </Form.Text>
                        )}
                      </Col>
                      <Col>
                        <Form.Group controlId="matchPassword">
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="*******"
                            value={passwordMatch}
                            required={true}
                            onChange={(e) => {
                              setPasswordMatch(e.target.value);
                              setRenderConfPassMatchHint(true);
                            }}
                          />
                        </Form.Group>

                        {renderConfPassMatchHint && (
                          <Form.Text className="text-danger">
                            Should match your password
                          </Form.Text>
                        )}
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col>
                        <Form.Group controlId="avatar">
                          <Form.Label>Profile picture</Form.Label>
                          <Form.Control
                            type="file"
                            accept=".png, .jpg, jpeg"
                            name="avatar"
                            onChange={(e) => setAvatar(e.target.files[0])}
                          />
                        </Form.Group>
                      </Col>
                      <Col></Col>
                    </Row>

                    <Row>
                      <Col>
                        <Button
                          variant="info"
                          type="submit"
                          className="text-white"
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
                              <span className="mx-1">Creating...</span>
                            </span>
                          ) : (
                            <span>Create Account</span>
                          )}
                        </Button>
                      </Col>
                      <Col>
                        <p>
                          Own an account already?{" "}
                          <a href="/df-login">Sign In</a>{" "}
                        </p>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </section>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Signup;
