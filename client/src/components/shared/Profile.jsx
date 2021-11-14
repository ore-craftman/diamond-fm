import { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Loader from "./Loader";
import DeleteUser from "./DeleteUser";
const axios = require("axios");

const Profile = ({ id, currentUserData }) => {
  let userId = "";
  const [userData, setUserData] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [role, setRole] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [canPublish, setCanPublish] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [userUpdated, setUserUpdated] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");
  const [renderConfPassMatchHint, setRenderConfPassMatchHint] = useState(null);
  const [changing, setChanging] = useState(false);
  const [passwordUpdated, setPasswordUpdated] = useState(false);
  useEffect(() => {
    if (password === passwordMatch) {
      setRenderConfPassMatchHint(false);
    }
  }, [password, passwordMatch]);

  if (!id) {
    document.cookie.split(";").forEach((cookie) => {
      const cookieString = cookie.split("=");
      if (cookieString[0] === "uid") {
        userId = cookieString[1];
      }
    });
  } else {
    userId = id;
  }

  const changePassHandler = (e) => {
    e.preventDefault();
    setChanging(true);

    if (password.length < 8 || password !== passwordMatch) {
      setChanging(false);
    } else {
      axios
        .post("/users/reset-password/", { userId, password })
        .then((response) => {
          if (response.data.status) {
            setPasswordUpdated(true);
            setChanging(false);
          } else {
            console.log(response);
          }
        });
    }
  };

  useEffect(() => {
    axios
      .get(`/users/${userId}`)
      .then((response) => {
        if (response.data.status) {
          setUserData(response.data.user);
          setFirstname(response.data.user.firstname);
          setLastname(response.data.user.lastname);
          setEmail(response.data.user.email);
          setRole(response.data.user.role);
          setAvatar(response.data.user.avatar);
          setCanPublish(response.data.user.canPublish);
        } else {
          console.log(response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId, userUpdated, currentUserData]);

  const updateUser = (newDataObj) => {
    axios.post("/users/account/update", newDataObj).then((response) => {
      if (response.data.status) {
        setUserUpdated(true);
      } else {
        console.log(response);
      }
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    let newData = {
      id: userData._id,
      firstname,
      lastname,
      email,
      role,
      avatar,
      canPublish,
    };

    // iF user enters avatar convert to base 64
    const reader = new FileReader();

    if (typeof avatar !== "string") {
      reader.addEventListener("load", async () => {
        newData.avatar = reader.result;

        // TODO: call updateUser() with new data
        await updateUser(newData);
        setSubmitting(false);
      });

      reader.readAsDataURL(avatar);
    } else {
      // TODO: call updateUser() with new data
      await updateUser(newData);
      setSubmitting(false);
    }
  };
  return (
    <div>
      {userData ? (
        <div>
          <section
            style={{ minHeight: "80px" }}
            className="bg-white px-4 py-5 me-md-2 my-3 rounded-3 shadow"
          >
            {userUpdated && <Alert variant="success">Account Updated</Alert>}

            <h4>Profile</h4>

            <div className="d-flex flex-nowrap align-items-center mt-4">
              <Image
                height="180"
                width="171"
                className="me-3"
                src={
                  userData.avatar !== "null"
                    ? userData.avatar
                    : "/media/userProfile.svg"
                }
                rounded
              />

              <section>
                <h5 className="text-secondary">{userData.role}</h5>
                <h3>{userData.firstname + " " + userData.lastname}</h3>
                <p className="text-secondary mb-2">{userData.email}</p>

                {/* TODO: delete account to component with user prop  */}
                {/* <button className="btn btn-danger">Delete Account</button> */}
                <DeleteUser userId={userData._id} />
              </section>
            </div>

            <Form className="mt-5" onSubmit={submitHandler}>
              <h4>Update Details</h4>

              <Row className="my-3">
                <Col>
                  <Form.Group controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Firstname"
                      value={firstname}
                      required={true}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Lastname"
                      value={lastname}
                      required={true}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email address"
                      value={email}
                      required={true}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="role">
                    <Form.Label>Role</Form.Label>
                    <Form.Select
                      onChange={(e) => setRole(e.target.value)}
                      value={role}
                      required={true}
                    >
                      <option value="">Select</option>
                      <option value="editor">Editor</option>
                      <option value="admin">Admin</option>
                    </Form.Select>
                    {role === "" && (
                      <Form.Text className="text-danger">
                        Select a role! Editor or Admin
                      </Form.Text>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="avatar">
                    <Form.Label>Profile picture</Form.Label>
                    <Form.Control
                      type="file"
                      accept=".png, .jpg, jpeg"
                      name="avatar"
                      onChange={(e) => setAvatar(e.target.files[0])}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="role">
                    <Form.Label>Can Publish</Form.Label>
                    <Form.Select
                      onChange={(e) => setCanPublish(e.target.value)}
                      value={canPublish}
                      required={true}
                      disabled={
                        currentUserData && currentUserData.role === "admin"
                          ? false
                          : role && role === "admin"
                          ? false
                          : true
                      }
                    >
                      <option value="">Select</option>
                      <option value={true}>Yes</option>
                      <option value={false}>No</option>
                    </Form.Select>
                    {canPublish === "" && (
                      <Form.Text className="text-danger">
                        Select a role! Editor or Admin
                      </Form.Text>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Button
                    variant="success"
                    type="submit"
                    className="text-white"
                  >
                    {submitting ? (
                      <span>
                        <Spinner
                          as="span"
                          size="sm"
                          animation="border"
                          role="status"
                          aria-hidden="true"
                        />
                        <span className="mx-1">Updating...</span>
                      </span>
                    ) : (
                      <span>Update Account</span>
                    )}
                  </Button>
                </Col>
                <Col></Col>
              </Row>
            </Form>
          </section>

          <section
            style={{ minHeight: "80px" }}
            className="bg-white px-4 py-5 me-md-2 my-5 rounded-3 shadow"
          >
            {passwordUpdated && (
              <Alert variant="success" className="my-4">
                Password Updated
              </Alert>
            )}
            <h4>Update Password</h4>

            <Form onSubmit={changePassHandler}>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="password">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="*******"
                      value={password}
                      required={true}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  {password !== "" && password.length < 8 && (
                    <Form.Text className="text-danger">
                      Password should be at least 8 characters
                    </Form.Text>
                  )}
                </Col>
                <Col>
                  <Form.Group controlId="matchPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="*******"
                      value={passwordMatch}
                      required={true}
                      onChange={(e) => {
                        setPasswordMatch(e.target.value);
                        setRenderConfPassMatchHint(true);
                      }}
                    />
                  </Form.Group>

                  {renderConfPassMatchHint && (
                    <Form.Text className="text-danger">
                      Should match your password
                    </Form.Text>
                  )}
                </Col>
              </Row>

              <Row>
                <Col>
                  <Button
                    variant="success"
                    type="submit"
                    className="text-white"
                  >
                    {changing ? (
                      <span>
                        <Spinner
                          as="span"
                          size="sm"
                          animation="border"
                          role="status"
                          aria-hidden="true"
                        />
                        <span className="mx-1">Changing...</span>
                      </span>
                    ) : (
                      <span>Change Password</span>
                    )}
                  </Button>
                </Col>
                <Col></Col>
              </Row>
            </Form>
          </section>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Profile;
