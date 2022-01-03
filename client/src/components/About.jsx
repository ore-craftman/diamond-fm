import { useState, useEffect } from "react";

import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Header from "./shared/Header";
import MetaTags from "react-meta-tags";
import Footer from "./shared/Footer";

const axios = require("axios");

const About = () => {
  const [posts, setPosts] = useState(null);
  const [postsError, setPostsError] = useState(null);

  useEffect(() => {
    document.title = "About Us | DiamondFM";

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
      <MetaTags>
        <title>Abput Us | DiamondFM</title>
        <meta property="og:title" content="DiamondFM" />
        <meta property="og:image" content="/logo192.png" />
        <meta
          name="description"
          content="We offer exclusive news stories, music and programmes that focus on entertainment, topical issues, community development and corporate social responsibility."
        />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </MetaTags>
      <Header />

      {postsError && (
        <Alert variant="warning" className="mx-2">
          {postsError}
        </Alert>
      )}

      <Container className="py-4">
        <Row className="align-items-center">
          <Col sm={12} md={6}>
            <h2 className="fw-bolder fs-1" id="#about">
              ABOUT US
            </h2>

            <p>
              Diamond FM is an urban radio station in Ilorin, Kwara State,
              Nigeria. Our radio waves cover North Central and South Western
              Nigerian.
            </p>
            <p>
              We offer exclusive news stories, music and programmes that focus
              on entertainment, topical issues, community development and
              corporate social responsibility.
            </p>
            <p>
              We engage our audience in conversations that add value to their
              lives and contribute to nation-building. Our vision is to continue
              earning the trust of our audience through quality reportage,
              standard content production, entertaining and informative
              programmes and the right business attitude that encourages growth
              and community development.
            </p>

            <p>
              We are relentless in our resolve to maintain professional and
              ethical standards.
            </p>
          </Col>
          <Col sm={12} md={6}>
            <Image
              src="/media/aboutCenter.png"
              style={{ maxWidth: "100%" }}
              className="d-none d-md-block rounded mb-4"
            />
          </Col>
        </Row>
      </Container>

      <Footer posts={posts} />
    </div>
  );
};

export default About;
