import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const axios = require("axios");

const UpdatePost = ({ post }) => {
  let currentUserId = "";
  document.cookie.split(";").forEach((cookie) => {
    const cookieString = cookie.split("=");
    if (cookieString[0] === "uid") {
      currentUserId = cookieString[1];
    }
  });

  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    axios.get(`/users/${currentUserId}`).then((response) => {
      setCurrentUser(() => response.data.user);
    });
  }, [currentUserId]);

  const [creator] = useState(post.createdBy);
  // const [oldPostData, setOldPostData] = useState(post);
  const [postBody, setPostBody] = useState(post.body);
  const [submitting, setSubmitting] = useState(false);
  const [postTitle, setPostTitle] = useState(post.title);
  const [postType, setPostType] = useState(post.type);
  const [featuredImg, setFeaturedImg] = useState(post.featuredImage);
  const [audioLink, setAudioLink] = useState(post.audio);
  const [featuredDesc, setFeaturedDesc] = useState(post.featuredDesc);
  const [programmeDate, setProgrammeDate] = useState(
    new Date(post.programmeDate)
  );

  const [updatePostError, setUpdatePostError] = useState(null);
  const [updatedPost, setUpdatedPost] = useState(false);

  const sumitHandler = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Reader to convert Image file to base64
    const reader = new FileReader();

    let postData = {
      id: post._id,
      title: postTitle,
      type: postType,
      body: postBody,
      audio: audioLink !== "" ? audioLink : null,
      createdBy: creator,
      featuredDesc,
      programmeDate: programmeDate !== "" ? programmeDate : null,
      pending: currentUser.canPublish,
    };
    // console.log(postData);

    // convert image to base 64 if updated and add it to postData
    if (typeof featuredImg !== "string") {
      reader.addEventListener("load", () => {
        postData.featuredImage = reader.result;
        axios
          .post("/posts/update", postData)
          .then((response) => {
            if (response.data && response.data.status) {
              setUpdatedPost(true);
            } else {
              setUpdatePostError("Oops.. error updating post");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
      reader.readAsDataURL(featuredImg);
      setSubmitting(false);
    } else {
      postData.featuredImage = featuredImg;
      axios
        .post("/posts/update", postData)
        .then((response) => {
          if (response.data && response.data.status) {
            setUpdatedPost(true);
          } else {
            setUpdatePostError("Oops.. error updating post");
          }
        })
        .catch((err) => {
          console.log(err);
        });

      setSubmitting(false);
    }
  };

  // Notify admins of post if created by !userCanPublish
  useEffect(() => {
    if (currentUser) {
      if (currentUser && !currentUser.canPublish && updatedPost) {
        //   const postId = oldPostData.id;
        axios
          .get("/users/")
          .then((response) => {
            const adminUsers = response.data.users.filter(
              (user) => user.role === "admin"
            );
            adminUsers.forEach((admin) => {
              let dataObj = {
                id: admin._id,
                notifications: [
                  ...admin.notifications,
                  {
                    type: "Pending post updated",
                    body: featuredDesc.slice(0, 25),
                  },
                ],
              };
              axios
                .post("/users/notify", dataObj)
                .then((response) => console.log(response.data))
                .catch((err) => console.log(err));
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [currentUser, featuredDesc, updatedPost]);

  return (
    <div className="bg-white px-1 py-4 me-md-2 my-4">
      {post.suggestion && (
        <Alert variant="warning">
          <Alert.Heading>Changes suggested by admin</Alert.Heading>
          {post.suggestion}
        </Alert>
      )}
      {updatedPost && !updatePostError && (
        <Alert variant="success" className="my-2">
          Post updated successfully
        </Alert>
      )}

      {updatePostError && !updatedPost && (
        <Alert variant="danger" className="my-2">
          {updatePostError}
        </Alert>
      )}
      {!updatedPost && (
        <div>
          <h4 className="mb-4">Update Post</h4>

          <Form onSubmit={sumitHandler}>
            <Row>
              <Col xs={8}>
                <Form.Group controlId="postTitle">
                  <Form.Control
                    type="text"
                    placeholder="Add Title"
                    required={true}
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="postType">
                  <Form.Select
                    onChange={(e) => setPostType(e.target.value)}
                    required={true}
                    value={postType}
                  >
                    <option value="">Select Post Type</option>
                    <option value="news">News</option>
                    <option value="Blog">Blog</option>
                    <option value="sport">Sport</option>
                    <option value="airProgramme">Air Programme</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            {postType === "airProgramme" && (
              <Row className="mt-4">
                <Col>
                  <Form.Group controlId="programmeDate" className="mb-3">
                    <Form.Label>Select Programme Date</Form.Label>
                    <DatePicker
                      selected={programmeDate}
                      onChange={(date) => setProgrammeDate(date)}
                      showTimeSelect
                      value={programmeDate}
                      timeIntervals={10}
                      dateFormat="Pp"
                      className="form-control"
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group controlId="audioLink" className="mb-3">
                    <Form.Label>Audio Link</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="https://streams.radiomast.io/..."
                      required={true}
                      onChange={(e) => setAudioLink(e.target.value)}
                      value={audioLink}
                    />
                  </Form.Group>
                </Col>
              </Row>
            )}

            <Row className="my-3">
              <Col>
                <Form.Group controlId="featuredImage" className="mb-3">
                  <Form.Label>Featured Desc</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Post description"
                    required={true}
                    value={featuredDesc}
                    onChange={(e) => setFeaturedDesc(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="featuredImage" className="mb-3">
                  <Form.Label>Featured Image</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setFeaturedImg(e.target.files[0])}
                  />
                </Form.Group>
                {featuredImg.length < 1 && (
                  <Alert variant="danger" className="m-1">
                    Choose featured Image
                  </Alert>
                )}
              </Col>
            </Row>

            <Row className="my-4">
              <ReactQuill
                theme="snow"
                placeholder="Post Content... start writting"
                onChange={setPostBody}
                value={postBody}
              />

              {postBody.length <= 11 && (
                <Alert variant="danger" className="mx-2 mt-5">
                  Add text to post
                </Alert>
              )}
            </Row>

            <Button variant="info" type="submit" className="text-white mt-5">
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
                <span>Update Post</span>
              )}
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default UpdatePost;
