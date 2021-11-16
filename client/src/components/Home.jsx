import Header from "./shared/Header";
import { useState, useEffect } from "react";
import Loader from "./shared/Loader";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ScrollAnimation from "react-animate-on-scroll";
import Contact from "./shared/Contact";
import Footer from "./shared/Footer";
import Covid from "./shared/Covid";
import Weather from "./shared/Weather";
const axios = require("axios");

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [programmes, setProgrammes] = useState(null);
  const [postsError, setPostsError] = useState(null);

  useEffect(() => {
    document.title = "Home | DiamondFM";

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
  }, []);

  return (
    <div>
      <div>
        <Header programmes={programmes} />

        {postsError && (
          <Alert variant="warning" className="mx-2">
            {postsError}
          </Alert>
        )}

        <Container>
          <ScrollAnimation animateIn="slideInDown" animateOut="slideOutUp">
            <Row
              style={{
                backgroundImage: "url('/media/hero.png')",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                height: "40vh",
              }}
              className="rounded align-items-center px-2 px-md-3 px-lg-4 mb-5"
            >
              <Col sm={12} md={8} lg={6}>
                <section>
                  <p className="text-end mb-0 text-white">88.7 ILORIN</p>
                  <h2 className="fw-bolder fs-1 text-white">Diamond FM</h2>
                  <p className="fs-5 mb-0 text-white">
                    Get quick updates on relevant happenings around you when you
                    listen to Diamond FM
                  </p>

                  <a
                    href="/posts/post/airProgramme"
                    className="btn my-2 btn-info text-white"
                  >
                    SEE PROGRAMMES
                  </a>
                </section>
              </Col>
              <Col className="d-none d-md-flex"></Col>
            </Row>
          </ScrollAnimation>
        </Container>

        <Container className="my-5">
          <h1 className="fw-bolder">DIAMOND FM TRENDS</h1>

          {posts ? (
            <Row>
              {posts.slice(0, 8).map((post) => {
                return (
                  <Col className="" xs={12} md={4} xl={3}>
                    <a href={"/posts/" + post._id}>
                      <div className="position-relative">
                        <Image
                          src={post.featuredImage}
                          rounded
                          height="250"
                          className="mx-auto my-2 shadow"
                          style={{ width: "100%" }}
                        />

                        <button
                          className="btn btn-primary disabled position-absolute"
                          style={{ top: "15px", left: "5px" }}
                        >
                          {post.type}
                        </button>
                        <h5
                          className="position-absolute text-white p-3 bg-dark rounded w-100 bg-gradient"
                          style={{ bottom: "0px", opacity: "0.8" }}
                        >
                          {post.title}
                        </h5>
                      </div>
                    </a>
                  </Col>
                );
              })}
            </Row>
          ) : (
            <Loader />
          )}
        </Container>

        <Container>
          <Row className="my-5">
            <Col xs={12} xl={8}>
              <h1 className="fw-bolder">PREVIOUS PROGRAMMES</h1>

              {programmes ? (
                programmes.map((programme, index) => {
                  return (
                    <section
                      key={index}
                      className="d-flex flex-nowrap justify-content-between align-items-center shadow bg-white w-100 p-3 my-4 rounded"
                    >
                      <div className="d-flex align-items-center flex-nowrap">
                        {/* <h3 className="fw-bolder me-2">03 OCT</h3> */}
                        <div className="d-flex align-items-center flex-nowrap">
                          <Image
                            src="/media/aboutCenter.png"
                            width="120"
                            height="110"
                            rounded
                          />
                          <div className="ms-2">
                            <p className="mb-1 fw-bolder fs-5">
                              {programme.title}
                            </p>
                            <p className="mb-1">
                              {programme.featuredDesc.slice(0, 20) + "..."}
                            </p>
                          </div>
                        </div>
                      </div>
                      <a
                        href={"/posts/" + programme._id}
                        className="btn btn-info text-white"
                      >
                        <i className="bi bi-play-fill"></i>
                        Listen Now
                      </a>
                    </section>
                  );
                })
              ) : (
                <Loader />
              )}
            </Col>
            <Col xs={12} xl={4}>
              <Weather />
              <Covid />
            </Col>
          </Row>
        </Container>

        <div
          style={{
            backgroundImage: "url('/media/calltoAct.png')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            height: "40vh",
          }}
          className="d-flex my-5 align-items-center"
        >
          <Container
            className="my-5 h-100 d-flex align-items-center justify-content-center flex-column w-100"
            style={{
              backgroundImage: "url('/media/appMockup.png')",
              backgroundPosition: "top left",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Row className="align-items-center px-2 px-md-3 px-lg-4">
              <Col
                className="d-none d-md-flex"
                // style={{ backgroundImage: "url('/media/appMockup.png')" }}
              >
                {/* <Image src="/media/appMockup.png" style={{ width: "100" }} /> */}
              </Col>

              <Col sm={12} md={6}>
                <section>
                  <p className="mb-0 text-white">Get the App</p>
                  <h2 className="fw-bolder fs-1 text-white">Diamond FM</h2>
                  <p className="fs-5 mb-0 text-white">
                    Get quick updates on relevant happenings around you when you
                    listen to Diamond FM
                  </p>

                  <div className="d-flex align-items-center flex-nowrap">
                    <a
                      href="#app_store"
                      className="btn my-2 btn-info text-white"
                    >
                      <i className="bi h4 text-white bi-apple"></i>
                      App Store
                    </a>
                    <a
                      href="#play_store"
                      className="btn my-2 mx-2 btn-info text-white"
                    >
                      <i className="bi h4 text-white bi-play-fill"></i>
                      Play Store
                    </a>
                  </div>
                </section>
              </Col>
            </Row>
          </Container>
        </div>

        <Contact onlyContact={true} />

        <Footer posts={posts} />
      </div>
    </div>
  );
};

export default Home;
