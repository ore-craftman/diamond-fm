import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useState } from "react";

const Footer = ({ posts }) => {
  const [year] = useState(new Date().toISOString());
  return (
    <div className="mt-5">
      {posts && (
        <div
          className="py-5"
          style={{
            backgroundImage: "url('/media/calltoAct.png')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            minHeight: "40vh",
          }}
        >
          <Container>
            <h1 className="fw-bolder text-center text-white">DIAMOND FM</h1>
            <p className="text-center text-white">Instagram @diamond887fm</p>

            <Row>
              {posts.slice(0, 4).map((post) => {
                return (
                  <Col className="" xs={12} md={4} xl={3}>
                    <a href={"/posts/" + post._id}>
                      <div>
                        <Image
                          src={post.featuredImage}
                          rounded
                          height="250"
                          className="mx-auto my-2"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </a>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      )}

      <div style={{ backgroundColor: "#CCDFEC" }}>
        <Container>
          <Row>
            <Col>
              <p className="mb-0 py-3">
                &copy; {year.split("T")[0].split("-")[0]} DiamondFM
              </p>
            </Col>
            <Col>
              <p className="py-3">
                <a href="/privacy-policy">Privacy Policy</a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
