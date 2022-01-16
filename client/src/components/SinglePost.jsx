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
import moment from "moment";

import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

const axios = require("axios");

const SinglePost = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState(null);
  const [singlePost, setSinglePost] = useState(null);
  const [creatorId, setCreatorId] = useState(null);
  const [creator, setCreator] = useState(null);
  const [postsError, setPostsError] = useState(null);
  const [approvedComments, setApprovedComments] = useState(null);

  useEffect(() => {
    axios.get("/posts/").then((response) => {
      if (response.data.status) {
        setPosts(response.data.posts);
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
    if (creatorId) {
      axios.get("/users/" + creatorId).then((response) => {
        if (response.data.status) {
          setCreator(response.data.user);
        } else {
          console.log(response.data);
        }
      });
    }
  }, [creatorId]);

  const [playing, setPlaying] = useState(false);
  const [audioPlayer, setAudioPlayer] = useState(null);

  const playProgramme = (audioAsset) => {
    let asset = new Audio(audioAsset);
    setAudioPlayer(asset);
    setPlaying(true);
  };

  const stopProgramme = () => {
    setPlaying(false);
  };

  useEffect(() => {
    if (audioPlayer) {
      if (playing) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
    }
  }, [audioPlayer, playing]);

  return (
    <div>
      <Header />

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
                  className="my-4 shadow-sm py-2 rounded-4"
                  style={{ minWidth: "90%" }}
                >
                  <div className="mx-4 my-1">
                    <h4 className="mb-2">{singlePost.title}</h4>

                    <p className="text-secondary mb-1">
                      {moment(new Date(singlePost.createdAt)).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}{" "}
                      | {singlePost.comments.length} comments
                    </p>

                    {creator && (
                      <div className="mb-2">
                        <p className="text-secondary">
                          {`By ${creator.firstname + " " + creator.lastname}`}
                        </p>

                        <p></p>
                      </div>
                    )}
                  </div>

                  <div className="w-100 position-relative">
                    <Image
                      src={singlePost.featuredImage}
                      rounded
                      style={{ width: "100%", height: "450px" }}
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
                    <div>
                      <FacebookShareButton
                        url={`https://diamondfm.net/posts/${id}`}
                        className="me-md-2 my-2"
                      >
                        <FacebookIcon size="30" round={true} />
                      </FacebookShareButton>

                      <WhatsappShareButton
                        url={`https://diamondfm.net/posts/${id}`}
                        className="me-md-2 my-2"
                      >
                        <WhatsappIcon size="30" round="true" />
                      </WhatsappShareButton>

                      <TelegramShareButton
                        url={`https://diamondfm.net/posts/${id}`}
                        className="me-md-2 my-2"
                      >
                        <TelegramIcon size="30" round="true" />
                      </TelegramShareButton>
                    </div>
                    <div
                      className="text-secondary fs-5 my-4"
                      dangerouslySetInnerHTML={{ __html: singlePost.body }}
                    ></div>

                    {singlePost.type === "airProgramme" && (
                      <div className="d-flex flex-nowrap align-items-center">
                        <button
                          onClick={() => playProgramme(singlePost.audio)}
                          className={`btn text-white mb-4 m-2 ${
                            playing ? "btn-primary" : "btn-info"
                          }`}
                        >
                          {playing ? "Playing..." : "Play Now"}
                        </button>

                        {playing && (
                          <button
                            className="btn btn-warning mb-4 m-2"
                            onClick={stopProgramme}
                          >
                            Pause
                          </button>
                        )}
                      </div>
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
