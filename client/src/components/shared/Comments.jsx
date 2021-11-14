import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Loader from "./Loader";
const axios = require("axios");

const Comments = () => {
  const [posts, setPosts] = useState(null);
  const [postsError, setPostsError] = useState(null);
  const [approvedComment, setApprovedComment] = useState(null);
  const [deleted, setDeleted] = useState(null);

  useEffect(() => {
    axios
      .get("/posts")
      .then((response) => {
        if (response.data.status) {
          setPosts(
            response.data.posts.filter((post) => post.comments.length > 0)
          );
        } else {
          setPostsError("Opps.. no comments on all posts");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const approveComment = (concernedPost, commentId, commentBody) => {
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
      suggestion,
      comments,
    } = concernedPost;

    let oldComment = comments.filter((comment) => comment._id !== commentId);
    let commentToUpdate = comments.filter(
      (comment) => (comment._id = commentId)
    )[0];
    commentToUpdate.approved = true;

    let postData = {
      id: concernedPost._id,
      title,
      body,
      type,
      featuredImage,
      featuredDesc,
      createdBy,
      audio,
      programmeDate,
      pending,
      suggestion,
      comments: [...oldComment, commentToUpdate],
    };

    axios.post("/posts/update", postData).then((response) => {
      if (response.data.status) {
        setApprovedComment(commentBody.slice(0, 15) + "...");
      } else {
        console.log(response.data);
      }
    });
  };

  const deleteComment = (concernedPost, commentId) => {
    setPosts(posts.filter((post) => post !== concernedPost));
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
      suggestion,
      comments,
    } = concernedPost;

    let oldComment = comments.filter((comment) => comment._id !== commentId);

    let postData = {
      id: concernedPost._id,
      title,
      body,
      type,
      featuredImage,
      featuredDesc,
      createdBy,
      audio,
      programmeDate,
      pending,
      suggestion,
      comments: [...oldComment],
    };

    axios.post("/posts/update", postData).then((response) => {
      if (response.data.status) {
        setDeleted(true);
      } else {
        console.log(response.data);
      }
    });
  };

  return (
    <div>
      {postsError && <Alert variant="warning">{postsError}</Alert>}
      {approvedComment || deleted ? (
        <Alert variant="success" className="mt-5">
          {approvedComment
            ? approvedComment + " APPROVED"
            : deleted
            ? "Comment deleted"
            : null}
        </Alert>
      ) : null}
      {posts ? (
        <table className="table my-5">
          <thead>
            <tr>
              <th className="d-none d-md-table-cell">No</th>
              <th>Comments</th>
              <th className="d-none d-md-table-cell">Name</th>
              <th className="d-none d-md-table-cell">Email</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((singlePost, postIndex) =>
              singlePost.comments.map((comment, index) => {
                return (
                  <tr className="my-5" key={postIndex}>
                    <td className="d-none d-md-table-cell">
                      <span className="px-3 py-1 bg-info rounded text-white">
                        {postIndex + 1}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-person-circle fw-bolder text-secondary h3"></i>
                        <section className="ms-2">
                          <p className="mb-0">
                            {comment.body.slice(0, 60) + "..."}
                          </p>
                        </section>
                      </div>
                    </td>

                    <td className="d-none d-md-table-cell">
                      <p>{comment.name}</p>
                    </td>
                    <td className="d-none d-md-table-cell">
                      <p>{comment.email}</p>
                    </td>
                    <td>
                      <div className="d-flex flex-nowrap align-items-center justify-content-center">
                        <i
                          className="bi bi-check2-square fw-bolder h5"
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            approveComment(
                              singlePost,
                              comment._id,
                              comment.body
                            );
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
                              deleteComment(singlePost, comment._id);
                            }}
                          ></i>
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Comments;
