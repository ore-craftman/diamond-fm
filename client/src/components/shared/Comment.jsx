import Form from "react-bootstrap/form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";
const axios = require("axios");

const Comment = ({ postId, oldComments }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [submitting, setSubmitting] = useState(null);
  const [posted, setPosted] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitting(true);
    let commentData = [
      { name, email, body: message, avatar: null, approved: false },
    ];
    oldComments.forEach((comment) => commentData.push(comment));

    axios
      .post("/posts/add-comment", { id: postId, comments: commentData })
      .then((response) => {
        if (response.data.status) {
          setPosted(true);
        } else {
          console.log(response);
        }
      });

    setSubmitting(false);
  };

  return (
    <div>
      <Container className="mt-5 mb-3">
        <h5>Leave a comment</h5>

        {posted && (
          <Alert variant="warning">Comment added pending approval</Alert>
        )}
        <Form onSubmit={submitHandler}>
          <Row>
            <Col>
              <Form.Group controlId="name">
                <Form.Control
                  className="border-bottom-1 mb-2"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  required={true}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="name">
                <Form.Control
                  className="border-bottom-1 mb-2"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group controlId="message">
              <Form.Control
                style={{ height: "200px" }}
                className=" border-1 rounded-0"
                type="text"
                placeholder="Your Comment"
                value={message}
                required={true}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row>
            <Col>
              <button className="btn btn-info text-white my-2" type="submit">
                {submitting ? (
                  <span>
                    <Spinner
                      as="span"
                      size="sm"
                      animation="border"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="mx-1">posting...</span>
                  </span>
                ) : (
                  <span>Post Comment</span>
                )}
              </button>
            </Col>
            <Col></Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Comment;
