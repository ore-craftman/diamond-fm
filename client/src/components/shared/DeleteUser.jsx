import { useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
const axios = require("axios");

const DeleteUser = ({ userId }) => {
  const history = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteHandler = async () => {
    const deleted = await axios.delete(`/users/delete/${userId}`);
    if (deleted.data.status) {
      document.cookie.split(";").forEach((cookie) => {
        let cookieString = cookie.split("=");
        if (cookieString[0] === "uid") {
          document.cookie = `uid=;expires==Thu, 01 Jan 1970 00:00:00 GMT;path=/;`;
          history.push("/df-login");
        }
      });
    } else {
      console.log(deleted.data);
    }
    handleClose();
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, are you're trying to delete user?
          <div className="d-flex flex-nowrap my-2">
            <button className="btn btn-secondary me-2" onClick={handleClose}>
              Not at all
            </button>
            <button className="btn btn-danger" onClick={deleteHandler}>
              Yes, Delete user
            </button>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>

      <button className="btn btn-danger" onClick={handleShow}>
        Delete Account
      </button>
    </div>
  );
};

export default DeleteUser;
