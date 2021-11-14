import { useState, useEffect } from "react";
import Image from "react-bootstrap/esm/Image";
import Alert from "react-bootstrap/esm/Alert";
import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/esm/Button";
import Loader from "./Loader";
import UpdatePost from "./UpdatePost";
const axios = require("axios");

const AirProgrammes = ({ postLimit }) => {
  const [posts, setPosts] = useState(null);
  const [postsError, setPostsError] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [showDelDialog, setShowDelDialog] = useState(false);
  const [delPostId, setDelPostId] = useState("");
  const handleClose = () => setShowDelDialog(false);
  const handleShow = () => setShowDelDialog(true);
  const [displayUpdatePost, setDisplayUpdatePost] = useState(null);

  const renderUpdatePost = (post) => {
    setDisplayUpdatePost(post);
  };

  const deletePostHandler = (id) => {
    setDeleting(true);
    axios
      .delete(`/posts/${id}`)
      .then((response) => {
        axios.get("/posts").then((response) => {
          if (!response.data) {
            setPostsError("Error getting posts");
          } else if (!response.data.status) {
            setPostsError("No post created yet... Add new");
          } else {
            setDeleting(false);
            if (postLimit) {
              setPosts(
                response.data.posts
                  .reverse()
                  .filter((post) => post.type === "airProgramme")
                  .slice(0, postLimit)
              );
            } else {
              setPosts(
                response.data.posts
                  .reverse()
                  .filter((post) => post.type === "airProgramme")
              );
            }
          }
        });
      })
      .catch((err) => console.log(err));
    handleClose();
  };

  useEffect(() => {
    axios.get("/posts").then((response) => {
      if (!response.data) {
        setPostsError("Error getting posts");
      } else if (!response.data.status) {
        setPostsError("No post created yet... Add new");
      } else {
        if (postLimit) {
          setPosts(
            response.data.posts
              .reverse()
              .filter((post) => post.type === "airProgramme")
              .slice(0, postLimit)
          );
        } else {
          setPosts(
            response.data.posts
              .reverse()
              .filter((post) => post.type === "airProgramme")
          );
        }
      }
    });
  }, [postLimit]);

  return (
    <div>
      <Modal show={showDelDialog} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Programme</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, Do you want to delete programme?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Not at all
          </Button>
          <Button variant="danger" onClick={() => deletePostHandler(delPostId)}>
            Yes, delete post
          </Button>
        </Modal.Footer>
      </Modal>

      {posts && !displayUpdatePost ? (
        <section
          style={{ minHeight: "80px" }}
          className="bg-white px-3 py-4 me-md-2 my-3 rounded-3 shadow"
        >
          <h4>Recent Programme</h4>
          {deleting && <Loader />}
          <table className="table">
            <thead>
              <tr>
                <th className="d-none d-md-table-cell">No</th>
                <th>Programme Title</th>
                <th className="d-none d-md-table-cell">Time</th>
                <th className="d-none d-md-table-cell">Date</th>
                <th className="d-none d-md-table-cell">
                  <i className="bi bi-chat-left-text me-2 fw-bolder h4"></i>
                </th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => {
                return (
                  <tr className="my-5" key={post._id}>
                    <td className="d-none d-md-table-cell">
                      <span
                        className="px-3 py-1 rounded text-white"
                        style={{ backgroundColor: "#003A70" }}
                      >
                        {index + 1}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Image
                          src={post.featuredImage}
                          rounded
                          width="80px"
                          height="70px"
                          className="d-none d-md-block"
                        />

                        <section className="ms-2">
                          <p className="fw-bold mb-0">
                            {post.title.slice(0, 20) + "..."}
                          </p>
                          <p className="mb-0">
                            {post.featuredDesc.slice(0, 40) + "..."}
                          </p>
                        </section>
                      </div>
                    </td>

                    <td className="d-none d-md-table-cell">
                      <p>
                        {new Date(post.programmeDate).toLocaleTimeString(
                          "en-US"
                        )}
                      </p>
                    </td>
                    <td className="d-none d-md-table-cell">
                      <p>{post.programmeDate.split("T")[0]}</p>
                    </td>
                    <td className="d-none d-md-table-cell">
                      <p>{post.comments.length}</p>
                    </td>
                    <td>
                      <div className="d-flex flex-nowrap align-items-center justify-content-center">
                        <i
                          className="bi bi-pencil-square fw-bolder h5"
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            renderUpdatePost(post);
                          }}
                        ></i>

                        <span
                          style={{
                            backgroundColor: "#FB9195",
                            cursor: "pointer",
                          }}
                          className="rounded ms-1 p-1"
                        >
                          <i
                            className="bi bi-trash fw-bolder text-white h5"
                            onClick={() => {
                              setDelPostId(post._id);
                              handleShow();
                            }}
                          ></i>
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      ) : postsError ? (
        <Alert variant="warning">{postsError}</Alert>
      ) : displayUpdatePost ? (
        <UpdatePost post={displayUpdatePost} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AirProgrammes;
