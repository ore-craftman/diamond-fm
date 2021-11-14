import { useState, useEffect } from "react";
import Loader from "./Loader";
import Image from "react-bootstrap/Image";
import DeleteUser from "./DeleteUser";
import Profile from "./Profile";
const axios = require("axios");

const Users = () => {
  let currentUserId = "";
  const [currentUserData, setCurrentUserData] = useState(null);
  document.cookie.split(";").forEach((cookie) => {
    const cookieString = cookie.split("=");
    if (cookieString[0] === "uid") {
      currentUserId = cookieString[1];
    }
  });
  useEffect(() => {
    axios
      .get(`/users/${currentUserId}`)
      .then((response) => {
        if (response.data.status) {
          setCurrentUserData(response.data.user);
        } else {
          console.log(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentUserId]);

  const [users, setUsers] = useState(null);
  const [profileId, setProfileId] = useState(null);

  useEffect(() => {
    axios.get("/users").then((response) => {
      if (response.data.status) {
        setUsers(response.data.users);
      } else {
        console.log(response);
      }
    });
  }, []);

  return (
    <div className="mt-2">
      {users && !profileId ? (
        <div className="d-flex ">
          {users.map((singleUser, index) => {
            return (
              <section
                key={index}
                className="bg-white px-4 py-5 me-md-2 me-lg-4 my-3 rounded-3 shadow flex-grow-1 d-flex flex-column justify-content-center align-items-center"
              >
                <Image
                  height="150"
                  width="150"
                  className="me-3"
                  src={
                    singleUser.avatar !== "null"
                      ? singleUser.avatar
                      : "/media/userProfile.svg"
                  }
                  roundedCircle
                />
                <h4 className="mt-4 mb-0">
                  {singleUser.firstname + " " + singleUser.lastname}
                </h4>
                <p className="text-secondary">{singleUser.role}</p>

                <div className="d-flex">
                  <button
                    className="btn btn-outline-secondary me-md-3"
                    onClick={() => setProfileId(singleUser._id)}
                  >
                    Edit
                  </button>
                  <DeleteUser userId={singleUser._id} />
                </div>
              </section>
            );
          })}
        </div>
      ) : profileId ? (
        <Profile id={profileId} currentUserData={currentUserData} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Users;
