import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const Contact = ({ onlyContact }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [posts, setPosts] = useState(null);
  const [programmes, setProgrammes] = useState(null);
  const [postsError, setPostsError] = useState(null);

  useEffect(() => {
    document.title = "Home | DiamondFM";

    axios.get("/posts/").then((response) => {
      if (response.data.status) {
        setPosts(response.data.posts);
        setProgrammes(
          response.data.posts
            .reverse()
            .filter((post) => post.type === "airProgramme")
        );
      } else {
        setPostsError(response.data.message);
      }
    });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const data = { name, email, message };

    axios.post("/users/contact", data).then((response) => {
      if (response.data.status) {
        setSent(true);
      } else {
        console.log(response);
      }
      setSubmitting(false);
    });
  };

  return (
    <div>
      {!onlyContact && <Header programmes={programmes} />}

      {postsError && (
        <Alert variant="warning" className="mx-2">
          {postsError}
        </Alert>
      )}

      {sent && (
        <Alert variant="success" onClose={() => setSent(false)} dismissible>
          Message sent
        </Alert>
      )}

      <Container className="my-5">
        <Row className="align-items-end">
          <Col sm={12} md={6} lg={8}>
            <Image src="/media/contact.png" rounded style={{ width: "100%" }} />

            <div className="d-flex align-items-center mt-4 justify-content-between">
              <div className="border-start px-2">
                <h4>Address</h4>
                <p className="text-secondary">
                  Plot 2, New Yidi Road, Ilorin Kwara State Nigeria
                </p>
              </div>
              <div className="border-start px-2">
                <h4>Social pages</h4>
                <a
                  href="#mail"
                  className="text-secondary d-block text-decoration-none"
                >
                  Mail
                </a>
                <a
                  href="https://www.facebook.com/diamond887fm/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary d-block text-decoration-none"
                >
                  Facebook
                </a>
                <a
                  href="https://instagram.com/diamond887fm/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary d-block text-decoration-none"
                >
                  Instagram
                </a>
              </div>
              <div className="border-start px-2">
                <h4>Dial</h4>
                <a
                  href="tel:+2349136556952"
                  className="text-secondary d-block text-decoration-none"
                >
                  +234 913 655 6952
                </a>
                <a
                  href="tel:+2346952913655"
                  className="text-secondary d-block text-decoration-none"
                >
                  +234 695 291 3655
                </a>
              </div>
            </div>
          </Col>
          <Col className="mt-md-4">
            <h2 className="fw-bolder fs-1">GET IN TOUCH</h2>
            <p className="fs-5 mb-0">
              Have an inquiry or feedback for us? Fill out the form below to
              contact our team
            </p>
            <div>
              <Form onSubmit={submitHandler}>
                <Row className="my-4">
                  <Form.Group controlId="name">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      required={true}
                      value={name}
                      className="bg-white rounded-2 shadow border-0 p-2"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                </Row>
                <Row className="my-4">
                  <Form.Group controlId="email">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      type="email"
                      required={true}
                      value={email}
                      className="bg-white rounded-2 shadow border-0 p-2"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Row>
                <Row className="my-4">
                  <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      type="text"
                      required={true}
                      value={message}
                      style={{ height: "200px" }}
                      className="bg-white rounded-2 shadow border-0 px-2"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Form.Group>
                </Row>

                <button className="btn btn-info text-white my-1" type="submit">
                  {submitting ? (
                    <span>
                      <Spinner
                        as="span"
                        size="sm"
                        animation="border"
                        role="status"
                        aria-hidden="true"
                      />
                      <span className="mx-1">sending...</span>
                    </span>
                  ) : (
                    <span>SEND MESSAGE</span>
                  )}
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      {!onlyContact && <Footer posts={posts} />}
    </div>
  );
};

export default Contact;
