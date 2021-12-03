import { useState, useEffect } from "react";

import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

const axios = require("axios");

const Presenters = () => {
  const [posts, setPosts] = useState(null);
  const [postsError, setPostsError] = useState(null);

  useEffect(() => {
    document.title = "Presenters | DiamondFM";

    axios.get("/posts/").then((response) => {
      if (response.data.status) {
        setPosts(response.data.posts);
      } else {
        setPostsError(response.data.message);
      }
    });
  }, []);

  return (
    <div>
      <Header />

      {postsError && (
        <Alert variant="warning" className="mx-2">
          {postsError}
        </Alert>
      )}

      <Container className="my-5">
        <h1 className="fw-bolder my-5">PRESENTERS</h1>

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
            <p className="fw-bold mt-2 mx-auto h4 text-center">
              Tajudeen Akolawole
            </p>
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

      <Footer posts={posts} />
    </div>
  );
};

export default Presenters;
