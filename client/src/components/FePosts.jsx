import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./shared/Header";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Weather from "./shared/Weather";
import Covid from "./shared/Covid";
import Loader from "./shared/Loader";
import Footer from "./shared/Footer";
import moment from "moment";
const axios = require("axios");

const FePosts = () => {
  const [posts, setPosts] = useState(null);
  const [postsError, setPostsError] = useState(null);

  const { type } = useParams();
  useEffect(() => {
    document.title = `${type[0].toUpperCase() + type.slice(1)} | Diamond FM`;

    axios.get(`/posts/type/${type}`).then((response) => {
      if (response.data.status) {
        setPosts(response.data.posts.reverse());
      } else {
        setPostsError(response.data.message);
      }
    });
  }, [type]);

  return (
    <div>
      <Header />

      <div className="bg-primary my-3 text-white bg-gradient">
        <div className="container py-4">
          <h4>
            {type === "airProgramme"
              ? "PROGRAMMES PLAY BACK"
              : type === "sport"
              ? "SPORTS"
              : type.toUpperCase()}
          </h4>
          <p className="mb-0">{`HOME / ${
            type === "airProgramme"
              ? "PROGRAMMES PLAY BACK"
              : type.toUpperCase()
          }${type === "sport" ? "S" : ""}`}</p>
        </div>
      </div>

      {postsError && (
        <Alert variant="warning" className="mx-2">
          {postsError.toUpperCase()}
        </Alert>
      )}
      <Container>
        <Row className="my-5">
          <Col xs={12} xl={8}>
            {posts !== null ? (
              <div>
                {posts.map((post) => {
                  return (
                    <section
                      key={post._id}
                      className="my-4 shadow rounded py-2"
                      style={{ minWidth: "90%" }}
                    >
                      <div className="m-4">
                        <h4 className="mb-2">{post.title}</h4>

                        <p className="text-secondary ">
                          {moment(new Date(post.createdAt)).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )}{" "}
                          | {post.comments.length} comments
                        </p>
                      </div>

                      <div className="w-100 position-relative">
                        <Image
                          src={post.featuredImage}
                          rounded
                          style={{ width: "100%", height: "450px" }}
                        />
                        {post.type === "airProgramme" && (
                          <Badge
                            bg="info position-absolute translate-middle py-2"
                            style={{ top: "32px", left: "29px" }}
                          >
                            <i className="bi h1 text-white bi-mic rounded"></i>
                          </Badge>
                        )}
                      </div>

                      <div className="mx-4 my-3">
                        <p className="text-secondary">
                          {post.featuredDesc.slice(0, 55) + "..."}
                        </p>
                        <a
                          href={"/posts/" + post._id}
                          className="btn btn-info text-white mb-2"
                        >
                          {post.type === "airProgramme"
                            ? "LISTEN NOW"
                            : "CONTINUE READING"}
                        </a>
                      </div>
                    </section>
                  );
                })}
              </div>
            ) : !postsError ? (
              <Loader />
            ) : null}
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

export default FePosts;
