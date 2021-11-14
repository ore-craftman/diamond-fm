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
const axios = require("axios");

const FePosts = () => {
  const [posts, setPosts] = useState(null);
  const [programmes, setProgrammes] = useState(null);
  const [postsError, setPostsError] = useState(null);

  const { type } = useParams();
  useEffect(() => {
    document.title = `${type[0].toUpperCase() + type.slice(1)} | Diamond FM`;

    axios.get("/posts/").then((response) => {
      if (response.data.status) {
        setPosts(
          response.data.posts.reverse().filter((post) => post.type === type)
        );
        setProgrammes(
          response.data.posts.filter((post) => post.type === "airProgramme")
        );
      } else {
        setPostsError(response.data.message);
      }
    });
  }, [type]);

  // console.log(posts);
  // console.log(type);

  return (
    <div>
      <Header programmes={programmes} />

      {postsError && (
        <Alert variant="warning" className="mx-2">
          {postsError}
        </Alert>
      )}

      <div className="bg-primary my-3 text-white bg-gradient">
        <div className="container py-4">
          <h4>{type.toUpperCase()}</h4>
          <p className="mb-0">{`HOME/${type.toUpperCase()}`}</p>
        </div>
      </div>

      <Container>
        <Row className="my-5">
          <Col xs={12} xl={8}>
            {posts !== null ? (
              <div>
                {posts.map((post) => {
                  return (
                    <section
                      key={post._id}
                      className="my-4 shadow rounded-4"
                      style={{ minWidth: "90%" }}
                    >
                      <div className="w-100 position-relative">
                        <Image
                          src={post.featuredImage}
                          rounded
                          style={{ width: "100%" }}
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

                      <div className="m-4">
                        <p>
                          {post.createdAt.split("T")[0]} |{" "}
                          {post.comments.length} comments
                        </p>
                        <h4 className="mb-2">
                          {post.title.slice(0, 25) + "..."}
                        </h4>

                        <p className="text-secondary">
                          {post.featuredDesc.slice(0, 45) + "..."}
                        </p>
                        <a
                          href={"/posts/" + post._id}
                          className="btn btn-info text-white mb-4"
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

export default FePosts;
