import { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const axios = require("axios");

const PendingPosts = ({ userData }) => {
  const [posts, setPosts] = useState(null);
  const [postsError, setPostsError] = useState(null);
  const [postSuggestion, setPostSuggestion] = useState("");

  useEffect(() => {
    axios.get("/posts").then((response) => {
      if (!response.data) {
        setPostsError("Error getting posts");
      } else if (!response.data.status) {
        setPostsError("No post created yet... Add new");
      } else {
        setPosts(
          response.data.posts.reverse().filter((post) => post.pending === true)
        );
      }
    });
  }, []);

  const [currentPost, setCurrentPost] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [loading, setLoading] = useState(false);
  const approvePostHandler = () => {
    setLoading(true);
    const {
      title,
      body,
      type,
      featuredImage,
      featuredDesc,
      createdBy,
      audio,
      programmeDate,
    } = currentPost;

    const postData = {
      id: currentPost._id,
      pending: false,
      title,
      body,
      type,
      featuredImage,
      featuredDesc,
      createdBy,
      audio,
      programmeDate,
    };

    axios
      .post("/posts/update", postData)
      .then((response) => {
        if (response.data && response.data.status) {
          // TODO Be sure posts get updated
          setPosts(
            posts.filter((singlePost) => singlePost._id !== currentPost._id)
          );
          handleClose();
        } else {
          console.log("Oops.. error updating post");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    const {
      title,
      body,
      type,
      featuredImage,
      featuredDesc,
      createdBy,
      audio,
      programmeDate,
      pending,
    } = currentPost;

    const postData = {
      id: currentPost._id,
      pending,
      title,
      body,
      type,
      featuredImage,
      featuredDesc,
      createdBy,
      audio,
      programmeDate,
      suggestion: postSuggestion,
    };

    axios
      .post("/posts/update", postData)
      .then((response) => {
        if (response.data && response.data.status) {
          handleClose();

          //TODO Notify creator of suggestion
          axios.get(`/users/${currentPost.createdBy}`).then((response) => {
            let dataObj = {
              id: currentPost.createdBy,
              notifications: [
                ...response.data.user.notifications,
                {
                  type: "Changes suggested",
                  body: featuredDesc.slice(0, 25),
                },
              ],
            };

            axios
              .post("/users/notify", dataObj)
              .then((response) => console.log(response.data))
              .catch((err) => console.log(err));
          });
        } else {
          console.log("Oops.. error updating post");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // TODO: update the post with suggestion and notify creator
  };
  return (
    <div>
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Post Approval</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="my-2">
            <p className="mb-1 fw-bold">Approve and Publish</p>
            <Button variant="success" onClick={approvePostHandler}>
              {loading ? "Loading..." : "Publish Now"}
            </Button>
          </div>

          <div>
            <p className="mb-1 fw-bold">Naah! suggest changes</p>
            <Form onSubmit={submitHandler}>
              <div className="d-flex flex-nowrap">
                <Form.Group controlId="postSuggestion">
                  <Form.Control
                    type="text"
                    placeholder="Type here..."
                    required={true}
                    value={postSuggestion}
                    onChange={(e) => setPostSuggestion(e.target.value)}
                  />
                </Form.Group>

                <Button variant="danger" type="submit" className="ms-2">
                  {loading ? "Loading..." : "Notify Editor"}
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>

      {posts ? (
        <section>
          {posts.map((post, index) => {
            return (
              <section key={index}>
                <div className="d-flex align-items-center justify-content-between my-2">
                  <div className="d-flex flex-nowrap align-items-center">
                    <Image
                      src={post.featuredImage}
                      rounded
                      width="80px"
                      height="70px"
                    />

                    <section className="ms-2">
                      <p className="fw-bold mb-0">{post.title}</p>
                      <p className="mb-0" style={{ fontSize: "15px" }}>
                        {post.featuredDesc.slice(0, 35) + "..."}
                      </p>
                    </section>
                  </div>

                  {userData.role === "admin" && (
                    <i
                      className="bi bi-exclamation-circle h5 text-secondary"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCurrentPost(post);
                        handleShow();
                      }}
                    ></i>
                  )}
                </div>
              </section>
            );
          })}
        </section>
      ) : postsError ? (
        <p>No pending post</p>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default PendingPosts;
