import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./shared/Header";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Weather from "./shared/Weather";
import Badge from "react-bootstrap/Badge";
import Covid from "./shared/Covid";
import Loader from "./shared/Loader";
import Footer from "./shared/Footer";
import Comment from "./shared/Comment";

const axios = require("axios");

const SinglePost = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState(null);
  const [singlePost, setSinglePost] = useState(null);
  const [creatorId, setCreatorId] = useState(null);
  const [creator, setCreator] = useState(null);
  const [programmes, setProgrammes] = useState(null);
  const [postsError, setPostsError] = useState(null);
  const [approvedComments, setApprovedComments] = useState(null);

  useEffect(() => {
    document.title = "Post | DiamondFM";

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

    axios.get("/posts/single/" + id).then((response) => {
      if (response.data.status) {
        setSinglePost(response.data.post);
        setCreatorId(response.data.post.createdBy);
        setApprovedComments(
          response.data.post.comments.filter(
            (comment) => comment.approved === true
          )
        );
      } else {
        setPostsError(response.data.message);
      }
    });
  }, [id]);

  useEffect(() => {
    axios.get("/users/" + creatorId).then((response) => {
      if (response.data.status) {
        setCreator(response.data.user);
      } else {
        console.log(response.data);
      }
    });
  }, [creatorId]);

  return (
    <div>
      <Header programmes={programmes} />

      {postsError && (
        <Alert variant="warning" className="mx-2">
          {postsError}
        </Alert>
      )}

      <Container>
        <Row className="my-5">
          <Col xs={12} xl={8}>
            {singlePost !== null ? (
              <div>
                <section
                  className="my-4 shadow-sm rounded-4"
                  style={{ minWidth: "90%" }}
                >
                  <div className="w-100 position-relative">
                    <Image
                      src={singlePost.featuredImage}
                      rounded
                      style={{ width: "100%" }}
                    />
                    {singlePost.type === "airProgramme" && (
                      <Badge
                        bg="info position-absolute translate-middle py-2"
                        style={{ top: "32px", left: "29px" }}
                      >
                        <i className="bi h1 text-white bi-mic rounded"></i>
                      </Badge>
                    )}
                  </div>

                  <div className="m-4">
                    <p>
                      {singlePost.createdAt.split("T")[0]} |{" "}
                      {singlePost.comments.length} comments
                    </p>

                    {creator && (
                      <div className="m-2">
                        <p className="fw-bolder">Created by</p>

                        <Image
                          src={
                            creator.avatar !== "null"
                              ? creator.avatar
                              : "/media/defaultAvatar.png"
                          }
                          width="70"
                          height="70"
                          roundedCircle
                        />
                        <p>{creator.firstname}</p>
                      </div>
                    )}

                    <h4 className="mb-2">{singlePost.title}</h4>

                    <div
                      className="text-secondary fs-5 my-4"
                      dangerouslySetInnerHTML={{ __html: singlePost.body }}
                    ></div>

                    {singlePost.type === "airProgramme" && (
                      <a
                        href={singlePost.audio}
                        className="btn btn-info text-white mb-4"
                      >
                        Play Now
                      </a>
                    )}
                  </div>
                </section>

                <div>
                  {approvedComments && approvedComments.length > 0 && (
                    <div>
                      {approvedComments.map((comment) => {
                        return (
                          <div
                            key={comment._id}
                            className="d-flex align-items-center"
                          >
                            <Image
                              src={
                                comment.avatar
                                  ? comment.avatar
                                  : "/media/defaultAvatar.png"
                              }
                              width="70"
                              height="70"
                              roundedCircle
                              className="me-3"
                            />
                            <div>
                              <h5 className="my-2">{comment.name}</h5>
                              <p>{comment.body}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <Comment
                    postId={singlePost._id}
                    oldComments={singlePost.comments}
                  />
                </div>
              </div>
            ) : (
              <Loader />
            )}
          </Col>
          <Col xs={12} xl={4}>
            <Weather />
            <a href="tel:+2349136556952">
              <Image src="/media/ads.png" className="w-100 my-4" />
            </a>
            <Covid />
          </Col>
        </Row>
      </Container>

      <Footer posts={posts} />
    </div>
  );
};

export default SinglePost;
