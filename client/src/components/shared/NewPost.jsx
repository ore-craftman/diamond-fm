import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const axios = require("axios");

const NewPost = () => {
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

  const [submitting, setSubmitting] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postType, setPostType] = useState("");
  const [featuredImg, setFeaturedImg] = useState("");
  const [postBody, setPostBody] = useState("");
  const [audioLink, setAudioLink] = useState("");
  const [programmeDate, setProgrammeDate] = useState(new Date());
  const [postBodyEmpty, setPostBodyEmpty] = useState(false);
  const [featuredImgEmpty, setFeaturedImgEmpty] = useState(false);
  const [createdPost, setCreatedPost] = useState(null);
  const [createPostError, setCreatePostError] = useState(null);
  const [featuredDesc, setFeaturedDesc] = useState("");

  const sumitHandler = (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (postBody === "" || featuredImg === "") {
      setSubmitting(false);
      setPostBodyEmpty(true);
      setFeaturedImgEmpty(true);
    } else {
      const reader = new FileReader();

      // Create new post
      let postData = {
        title: postTitle,
        type: postType,
        body: postBody,
        audio: audioLink !== "" ? audioLink : null,
        createdBy: currentUser._id,
        featuredDesc,
        programmeDate: programmeDate !== "" ? programmeDate : null,
        pending: currentUser.canPublish ? false : true,
      };

      reader.addEventListener("load", () => {
        postData.featuredImage = reader.result;
        axios
          .post("/posts/create", postData)
          .then((response) => {
            if (response.data && response.data.status) {
              setCreatedPost(response.data.post);
            } else {
              setCreatePostError(
                response.data.message
                  ? response.data.message
                  : "Oops.. network error"
              );
              setSubmitting(false);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
      reader.readAsDataURL(featuredImg);
    }
  };

  // Notify admins of post if created by editor
  if (currentUser) {
    if (!currentUser.canPublish && createdPost) {
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
                  type: "Pending post",
                  body: createdPost.featuredDesc.slice(0, 25),
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

  return (
    <div className="bg-white px-1 py-4 me-md-2 my-4">
      {createdPost && currentUser.canPublish && (
        <Alert variant="success" className="my-2">
          Post Published{" "}
          <Alert.Link href={`/posts/${createdPost._id}`}>
            Click here to view
          </Alert.Link>
        </Alert>
      )}
      {createdPost && !currentUser.canPublish && (
        <Alert variant="warning" className="my-2">
          Post pending review, you'll be notified when approved by admin
        </Alert>
      )}

      {!createdPost && createPostError && (
        <Alert variant="danger" className="my-2">
          {createPostError}
        </Alert>
      )}
      {!createdPost && (
        <div>
          <h4>New Post</h4>
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
                    <option value="blog">Blog</option>
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
                {featuredImgEmpty && (
                  <Alert variant="danger" className="m-1">
                    Choose featured Image
                  </Alert>
                )}
              </Col>
            </Row>

            <Row className="my-4 p">
              <ReactQuill
                theme="snow"
                placeholder="Post Content... start writting"
                onChange={setPostBody}
              />

              {postBodyEmpty && (
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
                <span>Create New Post</span>
              )}
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default NewPost;
