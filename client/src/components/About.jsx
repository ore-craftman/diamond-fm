import { useState, useEffect } from "react";

import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

const axios = require("axios");

const About = () => {
  const [posts, setPosts] = useState(null);
  const [programmes, setProgrammes] = useState(null);
  const [postsError, setPostsError] = useState(null);

  useEffect(() => {
    document.title = "About Us | DiamondFM";

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
      <Header programmes={programmes} />

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
              Nigerian. We offer exclusive news stories, music and programmes
              that focus on entertainment, topical issues, community development
              and corporate social responsibility. We engage our audience in
              conversations that add value to their lives and contribute to
              nation-building. Our vision is to continue earning the trust of
              our audience through quality reportage, standard content
              production, entertaining and informative programmes and the right
              business attitude that encourages growth and community
              development. We are relentless in our resolve to maintain
              professional and ethical standards.
            </p>
            {/* <p>
              Diamond FM is a leading media service provider in Nigeria. We
              offer exclusive topical news stories and programmes. We engage our
              audience in dialogues that add value to their lives and contribute
              to nation-building. Our vision is to continue earning the trust of
              our audience through quality reportage, standard content
              production, entertaining and informative programmes and the right
              business attitude that encourages growth and community
              development. We are relentless in our resolve to maintain
              professional and ethical standards.
            </p> */}

            {/* <p>
              <b>Our workforce</b> is a combination of experienced and young
              people who have the right attitude and are committed to ethical
              and professional standards of the company. Their aspirations and
              goals align with the company’s vision and values. They are our
              most cherished asset and we trust their competencies
            </p> */}
          </Col>
          <Col sm={12} md={6}>
            <Image
              src="/media/aboutCenter.png"
              style={{ maxWidth: "100%" }}
              className="d-none d-md-block mb-4"
            />
          </Col>
        </Row>
      </Container>

      {/* <Container>
        <p>
          Diamond FM operates on a corporate governance built on democratic
          principles of reciprocal honour, mutual respect, and collective
          responsibility. Our daily operation is based on cooperation among
          various units to deliver quality service delivery to our audience and
          clients. At the top of the organization's structure are the BOARD OF
          DIRECTORS made up of the chairman, the supervisory director, the
          general manager and two non-executive directors. Here is an organogram
          of the company below:
        </p>

        <ul className="list-unstyled ms-md-4 fw-bold my-2">
          <li>Board of Directors</li>
          <li>Supervisory Director</li>
          <li>General Manager</li>
        </ul>

        <h5 className="text-center my-3">ROLE AND STATUS</h5>
        <h6 className="my-2 fw-bold">Board of Directors</h6>
        <p>
          The board of directors are responsible for designing the short and
          long term goals and objectives of the company, formulation of
          policies, administrative oversight and implementation of mechanisms to
          monitor company’s progress, recruitment of suitable and qualified
          candidates for various positions. They review, understand and discuss
          the company’s plans and objectives from time to time.
        </p>

        <h6 className="my-2 fw-bold">Chairman</h6>
        <p>
          The chairman is the head of the board and chairs board meetings.
          Coordinates the strategic planning of board activities, monitors
          financial planning and reports, interacts with board members of issues
          related to organizational priorities.
        </p>

        <h6 className="my-2 fw-bold">Supervisory Director</h6>
        <p>The SP’s roles include but not limited to the following:</p>
        <ul className=" my-2">
          <li>
            Supervises all heads of departments in operation and administrative
            units.
          </li>
          <li>Ensures the commercial success of the company.</li>
          <li>Manages external communications of the company.</li>
          <li>
            Collaborates with the chairman and the BoD to meet company’s goals
            and ensure the smooth running of daily operations.
          </li>
        </ul>

        <h6 className="my-2 fw-bold">General Manager</h6>
        <p>
          The General Manager’s roles include but not limited to the following:
        </p>
        <ul className=" my-2">
          <li>
            Development of a conducive work environment that encourages
            innovation, strategic and forward-thinking, and personal
            development.
          </li>
          <li>Overseeing daily operations.</li>
          <li>
            Management of staff and company resources to ensure excellent
            results.
          </li>
          <li>
            Development and implementation of business and growth strategies.
          </li>
          <li>
            Performance evaluation, budget management and improvement of staff
            welfare.
          </li>
          <li>Coordination of recruitment process.</li>
        </ul>
      </Container> */}

      <Footer posts={posts} />
    </div>
  );
};

export default About;
