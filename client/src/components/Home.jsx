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
                    href="/posts/programmes"
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

        <div
          style={{
            backgroundImage: "url('/media/aboutLeft.png')",
            backgroundPosition: "cover",
            backgroundSize: "auto",
          }}
          className="d-flex py-5 flex-column position-relative align-items-center justify-content-center"
        >
          <Container className="py-4">
            <Row>
              <Col sm={12} md={6} xl={6}>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  animateOut="fadeOutLeft"
                  duration={3}
                >
                  <Image
                    src="/media/aboutCenter.png"
                    style={{ maxWidth: "100%" }}
                    className="d-none d-md-block mb-4"
                  />
                </ScrollAnimation>
              </Col>

              <Col sm={12} md={6} xl={6}>
                <ScrollAnimation
                  animateIn="fadeInRight"
                  animateOut="fadeOutRight"
                  duration={3}
                >
                  <h2 className="fw-bolder fs-1" id="#about">
                    ABOUT US
                  </h2>

                  <p>
                    Leading media services provider in Nigeria. We offer
                    exclusive topical news, stories and programmes. we engage
                    our audience in active dialogue and add value to their daily
                    lives and decision making.
                  </p>
                  <p>
                    Diamond 88.7 FM is the shinning station of all time. With
                    dynamically designed contents that suits all weather,
                    purpose and utmost satisfaction of listener, Diamond FM is
                    the choice of every advertiser principally because of our
                    clear distinct signals through out the length and breadth of
                    our coverage area.With our slogan "the shinning station", we
                    outshine all other stations.
                  </p>

                  <p>
                    Our contents, powered by career broadcasters; tested and
                    rated, have "alite" effect on any listener.We also stock the
                    best and latest broadcast technologies of global standard.
                    We pay no lip service to quality. We are committed to giving
                    our clients the best in radio broadcast services.Our vision
                    is to continue to earn our audience's trust while sharing
                    the right business attitude with them. We promise never to
                    relent in our creative contents in line with professional
                    and ethical standards.
                  </p>
                </ScrollAnimation>
              </Col>
            </Row>
          </Container>
        </div>

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
                          height="220"
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

        <Container className="my-5">
          <ScrollAnimation
            animateIn="fadeInLeft"
            duration={3}
            animateOut="fadeOutLeft"
          >
            <h1 className="fw-bolder my-5">PRESENTERS</h1>
          </ScrollAnimation>
          <Row>
            <Col
              xs={12}
              md={4}
              xl={3}
              className="bg-white rounded py-4 px-2 m-0  d-flex flex-column justify-content-center "
            >
              <Image
                src="/media/tobiloba_adebisi.png"
                className="mx-auto"
                roundedCircle
                width="171"
                height="170"
              />
              <p className="fw-bold mt-2 mx-auto h4">Tobiloba Adebisi</p>
              <p className=" mx-auto text-secondary">Lambebe</p>
              <div className="d-flex flex-nowrap align-items-center justify-content-around">
                <a href="#meta" target="_blank" rel="noreferrer">
                  <i className="bi bi-facebook h4 text-info mx-2"></i>
                </a>
                <a href="#insta" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram h4 mx-2 text-info"></i>
                </a>

                <a
                  href="#twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded p-2"
                >
                  <i className="bi bi-twitter text-info h4 mx-2 "></i>
                </a>
              </div>
            </Col>

            <Col
              xs={12}
              md={4}
              xl={3}
              className="bg-white rounded py-4 px-2 m-0  d-flex flex-column justify-content-center"
            >
              <Image
                src="/media/seyi_oloyede.png"
                roundedCircle
                className="mx-auto"
                width="171"
                height="170"
              />
              <p className="fw-bold mt-2 mx-auto h4">Seyi Oloyede</p>
              <p className="mx-auto text-secondary">Akobi</p>
              <div className="d-flex flex-nowrap align-items-center justify-content-around">
                <a href="#meta" target="_blank" rel="noreferrer">
                  <i className="bi bi-facebook h4 text-info mx-2"></i>
                </a>
                <a href="#insta" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram h4 mx-2 text-info"></i>
                </a>

                <a
                  href="#twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded p-2"
                >
                  <i className="bi bi-twitter text-info h4 mx-2 "></i>
                </a>
              </div>
            </Col>

            <Col
              xs={12}
              md={4}
              xl={3}
              className="bg-white rounded py-4 px-2 m-0  d-flex flex-column justify-content-center"
            >
              <Image
                src="/media/ibukun_bankole.png"
                roundedCircle
                className="mx-auto"
                width="171"
                height="170"
              />
              <p className="fw-bold mt-2 mx-auto h4">Ibukun Bankole</p>
              <p className=" mx-auto text-secondary">Queen Lawi</p>
              <div className="d-flex flex-nowrap align-items-center justify-content-around">
                <a href="#meta" target="_blank" rel="noreferrer">
                  <i className="bi bi-facebook h4 text-info mx-2"></i>
                </a>
                <a href="#insta" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram h4 mx-2 text-info"></i>
                </a>

                <a
                  href="#twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded p-2"
                >
                  <i className="bi bi-twitter text-info h4 mx-2 "></i>
                </a>
              </div>
            </Col>
            <Col
              xs={12}
              md={4}
              xl={3}
              className="bg-white rounded py-4 px-2 m-0  d-flex flex-column justify-content-center"
            >
              <Image
                src="/media/richard_ekpo.png"
                roundedCircle
                className="mx-auto"
                width="171"
                height="170"
              />
              <p className="fw-bold mt-2 mx-auto h4">Richard Ekpo</p>
              <p className="mx-auto text-secondary">Ryhno 007</p>
              <div className="d-flex flex-nowrap align-items-center justify-content-around">
                <a href="#meta" target="_blank" rel="noreferrer">
                  <i className="bi bi-facebook h4 text-info mx-2"></i>
                </a>
                <a href="#insta" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram h4 mx-2 text-info"></i>
                </a>

                <a
                  href="#twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded p-2"
                >
                  <i className="bi bi-twitter text-info h4 mx-2 "></i>
                </a>
              </div>
            </Col>
            <Col
              xs={12}
              md={4}
              xl={3}
              className="bg-white rounded py-4 px-2 m-0  d-flex flex-column justify-content-center"
            >
              <Image
                src="/media/tariq_alimi.png"
                roundedCircle
                className="mx-auto"
                width="171"
                height="170"
              />
              <p className="fw-bold mt-2 mx-auto h4">Tariq Alimi</p>
              <div className="d-flex flex-nowrap align-items-center justify-content-around">
                <a href="#meta" target="_blank" rel="noreferrer">
                  <i className="bi bi-facebook h4 text-info mx-2"></i>
                </a>
                <a href="#insta" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram h4 mx-2 text-info"></i>
                </a>

                <a
                  href="#twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded p-2"
                >
                  <i className="bi bi-twitter text-info h4 mx-2 "></i>
                </a>
              </div>
            </Col>
            <Col
              xs={12}
              md={4}
              xl={3}
              className="bg-white rounded py-4 px-2 m-0  d-flex flex-column justify-content-center"
            >
              <Image
                src="/media/tope_animashaun.png"
                roundedCircle
                className="mx-auto"
                width="171"
                height="170"
              />
              <p className="fw-bold mt-2 mx-auto h4">Tope Animashaun</p>
              <div className="d-flex flex-nowrap align-items-center justify-content-around">
                <a href="#meta" target="_blank" rel="noreferrer">
                  <i className="bi bi-facebook h4 text-info mx-2"></i>
                </a>
                <a href="#insta" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram h4 mx-2 text-info"></i>
                </a>

                <a
                  href="#twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded p-2"
                >
                  <i className="bi bi-twitter text-info h4 mx-2 "></i>
                </a>
              </div>
            </Col>
            <Col
              xs={12}
              md={4}
              xl={3}
              className="bg-white rounded py-4 px-2 m-0  d-flex flex-column justify-content-center"
            >
              <Image
                src="/media/tajudeen_akolawole.png"
                roundedCircle
                className="mx-auto"
                width="171"
                height="170"
              />
              <p className="fw-bold mt-2 mx-auto h4">Tajudeen Akolawole</p>
              <p className=" mx-auto text-secondary">Ishola</p>
              <div className="d-flex flex-nowrap align-items-center justify-content-around">
                <a href="#meta" target="_blank" rel="noreferrer">
                  <i className="bi bi-facebook h4 text-info mx-2"></i>
                </a>
                <a href="#insta" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram h4 mx-2 text-info"></i>
                </a>

                <a
                  href="#twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded p-2"
                >
                  <i className="bi bi-twitter text-info h4 mx-2 "></i>
                </a>
              </div>
            </Col>
            <Col
              xs={12}
              md={4}
              xl={3}
              className="bg-white rounded py-4 px-2 m-0  d-flex flex-column justify-content-center"
            >
              <Image
                src="/media/akogun_yunus.png"
                roundedCircle
                className="mx-auto"
                width="171"
                height="170"
              />
              <p className="fw-bold mt-2 mx-auto h4">Akogun Abiodun</p>
              <p className="mx-auto text-secondary">Mr Gbewonrin</p>
              <div className="d-flex flex-nowrap align-items-center justify-content-around">
                <a href="#meta" target="_blank" rel="noreferrer">
                  <i className="bi bi-facebook h4 text-info mx-2"></i>
                </a>
                <a href="#insta" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram h4 mx-2 text-info"></i>
                </a>

                <a
                  href="#twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded p-2"
                >
                  <i className="bi bi-twitter text-info h4 mx-2 "></i>
                </a>
              </div>
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
