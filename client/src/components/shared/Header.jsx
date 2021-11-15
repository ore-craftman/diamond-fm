import { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Spinner from "react-bootstrap/Spinner";
import Nav from "react-bootstrap/Nav";

const Header = ({ programmes }) => {
  let day = new Date().toISOString();
  let currentDay = day.split("T");

  let currentDayDay = currentDay[0];
  const [currentProgramme, setCurrentProgramme] = useState(null);
  const [dayProgrammes, setDayProgrammes] = useState(null);
  useEffect(() => {
    if (programmes) {
      setDayProgrammes(
        programmes.filter(
          (programme) =>
            programme.programmeDate.split("T")[0] === currentDay[0] &&
            programme.programmeDate.split("T")[1] < currentDay[1]
        )
      );
    }
  }, [programmes, currentDayDay]);

  //   await dailyProgrammes before loading player

  useEffect(() => {
    if (dayProgrammes) {
      if (dayProgrammes.length > 0) {
        setCurrentProgramme(dayProgrammes[0]);
      } else {
        setCurrentProgramme(programmes[0]);
      }
    }
  }, [dayProgrammes, programmes]);

  const [playIcon, setPlayIcon] = useState(true);
  const [audioPlayer, setAudioPlayer] = useState(null);
  const playProgramme = (audioAsset) => {
    let asset = new Audio(audioAsset);
    setAudioPlayer(asset);
    setPlayIcon(false);
  };

  useEffect(() => {
    if (audioPlayer) {
      if (!playIcon) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
    }
  }, [audioPlayer, playIcon]);

  const stopProgramme = () => {
    setPlayIcon(true);
  };

  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <header className="w-100 my-3">
            <div className="d-flex align-items-center w-100">
              <Navbar.Brand href="#home" className="d-none d-lg-block">
                <Image src="/media/logoo.jpeg" rounded width="50" height="50" />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="me-3"
              />

              <section className="grow-1 w-100 bg-white shadow rounded">
                <div>
                  <section className="d-flex flex-nowrap justify-content-between align-items-center">
                    {currentProgramme ? (
                      <div className="d-flex align-items-center">
                        <div className="position-relative">
                          <span
                            className="rounded-circle p-2 position-absolute top-50 start-50 translate-middle"
                            style={{ backgroundColor: "#F9474E" }}
                          >
                            {playIcon && (
                              <i
                                className="bi bi-play-fill text-white"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  playProgramme(currentProgramme.audio)
                                }
                              ></i>
                            )}
                            {!playIcon && (
                              <i
                                className="bi bi-pause-fill text-white"
                                style={{ cursor: "pointer" }}
                                onClick={stopProgramme}
                              ></i>
                            )}
                          </span>

                          <Image
                            src={currentProgramme.featuredImage}
                            rounded
                            width="50"
                            height="40"
                          />
                        </div>
                        <a
                          href={"/posts/" + currentProgramme._id}
                          target="_blank"
                          rel="noreferrer"
                          className="text-secondary text-decoration-none"
                        >
                          <div className="ms-2 me-1 me-md-3 ">
                            <p className="mb-0" style={{ fontSize: "12px" }}>
                              Live on air
                            </p>
                            <p
                              className="mb-1 fw-bolder"
                              style={{ fontSize: "14px" }}
                            >
                              {currentProgramme.title.slice(0, 12) + "..."}
                            </p>
                          </div>
                        </a>

                        <div
                          style={{ color: "#F9474E" }}
                          className="d-flex flex-nowrap me-3"
                        >
                          <a
                            href="/posts/post/airProgramme"
                            style={{ color: "#F9474E" }}
                            className="mb-0 text-decoration-none"
                          >
                            Next
                          </a>
                          <i className="bi bi-arrow-right ms-1"></i>
                        </div>
                      </div>
                    ) : (
                      <Spinner animation="border" className="my-3 ms-3" />
                    )}

                    <div className="d-none d-md-flex align-items-center flex-nowrap ms-auto">
                      <a
                        href="https://www.facebook.com/diamond887fm/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bi bi-facebook h4 text-secondary mx-2"></i>
                      </a>
                      <a
                        href="https://instagram.com/diamond887fm/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bi bi-instagram h4 mx-2 text-secondary"></i>
                      </a>

                      <a
                        href="https://twitter.com/diamond887fm"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded p-2"
                        style={{ backgroundColor: "#F9474E" }}
                      >
                        <i className="bi bi-twitter h4 mx-2 text-white"></i>
                      </a>
                    </div>
                  </section>
                </div>
              </section>
            </div>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="ms-auto mt-4 justify-content-between"
                style={{ width: "89%", maxWidth: "100%" }}
              >
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/about">ABOUT US</Nav.Link>
                <Nav.Link href="/posts/post/airProgramme">PROGRAMME</Nav.Link>
                <Nav.Link href="/posts/post/news">NEWS</Nav.Link>
                <Nav.Link href="/posts/post/blog">BLOG</Nav.Link>
                <Nav.Link href="/posts/post/sport">SPORT</Nav.Link>
                <Nav.Link href="/privacy-policy">PRIVACY POLICY</Nav.Link>
                <Nav.Link href="/presenters">PRESENTERS</Nav.Link>
                <Nav.Link href="/contact">CONTACT US</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </header>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
