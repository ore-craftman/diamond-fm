import { useEffect, useState, Suspense, lazy } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Sidebar from "./shared/Sidebar";
import PendingPosts from "./shared/PendingPosts";
const axios = require("axios");

const Loader = lazy(() => import("./shared/Loader"));
const Posts = lazy(() => import("./shared/Posts"));
const NewPost = lazy(() => import("./shared/NewPost"));
const AirProgrammes = lazy(() => import("./shared/AirProgrammes"));
const Comments = lazy(() => import("./shared/Comments"));
const ForDash = lazy(() => import("./shared/ForDash"));
const Profile = lazy(() => import("./shared/Profile"));
const Users = lazy(() => import("./shared/Users"));

const Dashboard = () => {
  let userId = "";
  const history = useHistory();
  const [userData, setUserData] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const desktopView = useMediaQuery({ query: "(min-width: 1300px)" });

  const [posts, setPosts] = useState(null);
  const [postsError, setPostsError] = useState(null);
  useEffect(() => {
    axios
      .get("/posts")
      .then((response) => {
        if (response.data.status) {
          setPosts(
            response.data.posts.filter((post) => post.comments.length > 0)
          );
        } else {
          setPostsError("Opps.. no comments on all posts");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const closeMenu = () => {
    setShowMenu(false);
  };

  document.cookie.split(";").forEach((cookie) => {
    const cookieString = cookie.split("=");
    if (cookieString[0] === "uid") {
      userId = cookieString[1];
    } else {
      history.push("/df-login");
    }
  });

  useEffect(() => {
    document.title = "Dashboard | DiamondFM";
    axios
      .get(`/users/${userId}`)
      .then((response) => {
        if (response.data.status) {
          setUserData(response.data.user);
        } else {
          history.push("/df-login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId, history]);

  const popover = userData && (
    <Popover id="popover-basic" className="shadow bg-white border-0 rounded">
      <Popover.Body>
        {userData.notifications.length > 0 ? (
          <div>
            {userData.notifications.map((notification, index) => {
              return (
                <div key={index}>
                  <p className="fw-bold mb-1">{notification.type}</p>
                  <p>{notification.body}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <p>You have no notification</p>
        )}
      </Popover.Body>
    </Popover>
  );

  const clearNotificationAfterView = () => {
    let dataObj = {
      id: userData._id,
      notifications: [],
    };

    axios
      .post("/users/notify", dataObj)
      .then((response) => {
        axios
          .get(`/users/${userId}`)
          .then((response) => {
            if (response.data.status) {
              setUserData(response.data.user);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {userData ? (
        <div>
          {showMenu && (
            <Sidebar data={userData} cancelIcon={true} closeMenu={closeMenu} />
          )}
          <section className="d-none d-xl-block">
            <Sidebar data={userData} />
          </section>

          <main
            sm={10}
            style={{ paddingLeft: desktopView ? "250px" : "0px" }}
            className="mx-2"
          >
            <Container fluid="lg">
              <header className="d-flex flex-nowrap align-items-center py-2 py-lg-3 justify-content-between">
                <div className="d-xl-none me-2">
                  <i
                    className="bi bi-list fw-bolder h3"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setShowMenu(true);
                    }}
                  ></i>
                </div>

                <div
                  className="bg-white px-4 py-1 shadow rounded d-flex flex-nowrap align-items-center"
                  style={{ width: "100%" }}
                >
                  <input
                    type="text"
                    style={{ outline: "none" }}
                    className="w-100 ps-2 border-info border-start-4 border-top-0 border-bottom-0 border-end-0"
                    placeholder="Search"
                  />
                  <i className="bi bi-search fw-bolder h4 pe-2 d-none d-md-block"></i>
                </div>

                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={popover}
                  onExited={clearNotificationAfterView}
                >
                  <div
                    style={{ cursor: "pointer" }}
                    className="py-1 px-2 px-md-3 py-md-2 shadow bg-white rounded mx-1 mx-md-4 position-relative"
                  >
                    {userData.notifications.length > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle p-1 p-md-2 bg-danger border border-0 rounded-circle"></span>
                    )}
                    <i className="bi bi-bell-fill fw-bolder fs-6 fs-md-0 h-md-4"></i>
                  </div>
                </OverlayTrigger>

                <div className="ms-2">
                  <a href="/df-dashboard/profile">
                    <Image
                      src={
                        userData.avatar !== "null"
                          ? userData.avatar
                          : "/media/defaultAvatar.png"
                      }
                      roundedCircle
                      style={{ height: "45px", width: "45px" }}
                    />
                  </a>
                </div>
              </header>
            </Container>

            <Container fluid="lg">
              <Row>
                <Col lg={8}>
                  <Router>
                    <Suspense fallback={<Loader />}>
                      <Switch>
                        <Route path="/df-dashboard" exact component={ForDash} />
                        <Route path="/df-dashboard/posts" component={Posts} />
                        <Route
                          path="/df-dashboard/profile"
                          component={Profile}
                        />
                        <Route
                          path="/df-dashboard/programme"
                          component={AirProgrammes}
                        />
                        <Route
                          path="/df-dashboard/create-post"
                          component={NewPost}
                        />
                        <Route
                          path="/df-dashboard/comments"
                          component={Comments}
                        />
                        <Route path="/df-dashboard/users" component={Users} />
                      </Switch>
                    </Suspense>
                  </Router>
                </Col>
                <Col>
                  <section
                    style={{ minHeight: "80px" }}
                    className="bg-white px-3 py-4 ms-md-2 my-3 rounded-3 shadow"
                  >
                    <h4 className="mb-3">Recent Comments</h4>
                    {posts ? (
                      <section>
                        {posts.map((singlePost, postIndex) =>
                          singlePost.comments.map((comment, index) => {
                            return (
                              <section key={postIndex}>
                                <p>
                                  <span style={{ color: "#FB9195" }}>
                                    {comment.name}
                                  </span>{" "}
                                  <span className="text-secondary">
                                    Commented
                                  </span>{" "}
                                  {comment.body}
                                </p>
                              </section>
                            );
                          })
                        )}
                      </section>
                    ) : postsError ? (
                      { postsError }
                    ) : (
                      "Loading..."
                    )}
                  </section>

                  <section
                    style={{ minHeight: "80px" }}
                    className="bg-white px-3 py-4 ms-md-2 my-4 rounded shadow"
                  >
                    <h4 className="mb-3">
                      Pending {userData.role === "admin" ? "Posts" : "Approval"}
                    </h4>
                    <PendingPosts userData={userData} />
                  </section>
                </Col>
              </Row>
            </Container>
          </main>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Dashboard;
