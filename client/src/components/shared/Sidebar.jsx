import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";

const Sidebar = ({ data, cancelIcon, closeMenu }) => {
  const history = useHistory();
  const logoutHandler = (e) => {
    e.preventDefault();
    document.cookie.split(";").forEach((cookie) => {
      let cookieString = cookie.split("=");
      if (cookieString[0] === "uid") {
        document.cookie = `uid=;expires==Thu, 01 Jan 1970 00:00:00 GMT;path=/;`;
        history.push("/df-login");
      }
    });
  };

  return (
    <aside
      className="position-fixed shadow top-0 start-0 bg-white overflow-hidden"
      style={{ width: "230px", height: "100vh", zIndex: "10" }}
      id="sidebar"
    >
      <div className="d-flex m-4 align-items-center">
        <Image src="/media/icon.png" className="me-2" />
        <h5 className="fw-bolder">DiamondFM</h5>
        {cancelIcon && (
          <i
            className="bi bi-x-lg ms-2 fw-bolder h4"
            style={{ cursor: "pointer" }}
            onClick={() => {
              closeMenu();
            }}
          ></i>
        )}
      </div>

      <nav className="ms-5" style={{ marginTop: "60%" }}>
        <div className="d-flex my-2 align-items-center">
          <i className="bi bi-house me-2 fw-bolder h4"></i>
          <a href="/df-dashboard" className="fw-bold text-decoration-none">
            Dash
          </a>
        </div>

        <div className="d-flex my-2 align-items-center">
          <i className="bi bi-file-text me-2 fw-bolder h4"></i>
          <a
            href="/df-dashboard/posts"
            className="fw-bold text-decoration-none"
          >
            Posts
          </a>
        </div>

        <div className="d-flex my-2 align-items-center">
          <i className="bi bi-mic me-2 fw-bolder h4"></i>
          <a
            href="/df-dashboard/programme"
            className="fw-bold text-decoration-none"
          >
            Air Programme
          </a>
        </div>

        <div className="d-flex my-2 align-items-center">
          <i className="bi bi-chat-left-text me-2 fw-bolder h4"></i>
          <a
            href="/df-dashboard/comments"
            className="fw-bold text-decoration-none"
          >
            Comments
          </a>
        </div>

        {data.role === "admin" && (
          <div className="d-flex my-2 align-items-center">
            <i className="bi bi-people me-2 fw-bolder h4"></i>
            <a
              href="/df-dashboard/users"
              className="fw-bold text-decoration-none"
            >
              Users
            </a>
          </div>
        )}
      </nav>

      <section className="ms-5" style={{ marginTop: "30%" }}>
        <div className="d-flex my-2 align-items-center">
          <i className="bi bi-box-arrow-left me-2 fw-bolder h4"></i>
          <a
            href="/"
            className="fw-bold text-decoration-none"
            onClick={logoutHandler}
          >
            Logout
          </a>
        </div>

        <a href="/df-dashboard/create-post" className="btn btn-info text-white">
          NEW POST
        </a>
      </section>
    </aside>
  );
};

export default Sidebar;
