const express = require("express");
const router = express.Router();
const userService = require("../services/user");
const nodemailer = require("nodemailer");

// TODO: Work on update route to enable users update their details

const mailTransporter = nodemailer.createTransport({
  pool: true,
  service: "hotmail",
  host: "smtp-mail.outlook.com", // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_EMAIL_AUTH,
  },
});

// Admin||Editor Sign Up /users/
router.post("/", async (req, res) => {
  const { firstname, lastname, email, password, role } = req.body;
  const avatar = req.body.avatar ? req.body.avatar : "null";
  const canPublish = role === "admin" ? true : false;

  const user = await userService.create(
    firstname,
    lastname,
    email,
    password,
    role,
    avatar,
    canPublish
  );

  if (user[0]) {
    res.json({ status: user[0], user: user[1] });
    const emailConfirmationLink = `http://localhost:4000/users/account/activate/${user[1]._id}`;

    const mailOptions = {
      from: "diamond.fm@outlook.com",
      to: user[1].email,
      subject: "Email Confirmation | Diamond FM",
      html: `<p>Confirm your email address to activate your account, ${emailConfirmationLink}/p>`,
      text: `Confirm your email address to activate your account, ${emailConfirmationLink}`,
    };

    mailTransporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        res.json({ status: user[0], user: user[1] });
      }

      console.log("link Sent", info.response);
      transporter.close();
    });

    // res.json({ status: user[0], user: user[1] });
  } else {
    res.json({ status: user[0], message: user[1] });
  }
});

// Account Activation /users/account/activate/:id
router.get("/account/activate/:id", async (req, res) => {
  const user = await userService.getById(req.params.id);
  if (user[0]) {
    const dataUpdated = await userService.updateData(req.params.id, {
      confirmedEmail: true,
    });

    if (dataUpdated[0]) {
      res.json({ status: true, message: "Email confirmed successfully" });
    } else {
      res.json({ status: false, message: "Error updating confirmedEmail" });
    }
  } else {
    res.json({
      status: false,
      message: "Invalid link, be sure to use the link sent via email",
    });
  }
});

// Update Data /users/notify
router.post("/notify", async (req, res) => {
  const { id, notifications } = req.body;

  const dataUpdated = await userService.updateData(id, {
    notifications,
  });

  if (dataUpdated[0]) {
    res.json({ status: true, message: "Notified" });
  } else {
    res.json({ status: false, message: "Error sending notification" });
  }
});

// Update user data /users/account/update
router.post("/account/update", async (req, res) => {
  const { id, firstname, lastname, email, role, avatar, canPublish } = req.body;

  const dataObj = { id, firstname, lastname, email, role, avatar, canPublish };
  const dataUpdated = await userService.updateData(id, dataObj);

  if (dataUpdated[0]) {
    res.json({ status: true, message: "Account updated" });
  } else {
    res.json({ status: false, message: "Error updating account" });
  }
});

// Admin Login /users/auth
router.post("/auth", async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.authenticate(email, password);
  if (user[0]) {
    res.json({ status: user[0], user: user[1] });
  } else {
    res.json({ status: user[0], message: user[1] });
  }
});

// Fetch All Users /users/
router.get("/", async (req, res) => {
  const users = await userService.getAllUsers();
  if (users[0]) {
    res.json({ status: true, users: users[1] });
  } else {
    res.json({ status: false, message: "No data" });
  }
});

// Fetch a user with id /users/id
router.get("/:id", async (req, res) => {
  const user = await userService.getById(req.params.id);
  if (user[0]) {
    res.json({ status: user[0], user: user[1] });
  } else {
    res.json({ status: user[0], message: user[1] });
  }
});

// Delete a user with id /users/id
router.delete("/delete/:id", async (req, res) => {
  const user = await userService.getById(req.params.id);
  if (user && user[0]) {
    await userService.deleteUser(req.params.id);
    res.json({ status: true, message: `User Deleted` });
  } else {
    res.json({ status: false, message: `User does not exit` });
  }
});

// Forget Password /users/forget-password
router.post("/forget-password", async (req, res) => {
  const { email } = req.body;
  const user = await userService.getByEmail(email);

  if (!user[0]) {
    res.json({ status: false, message: user[1] });
  } else {
    const passwordResetLink = `http://localhost:3000/reset-password/${user[1]._id}`;

    const mailOptions = {
      from: "diamond.fm@outlook.com",
      to: user[1].email,
      subject: "Reset Password | Diamond FM",
      html: `<p>Click the link provided to reset your password, ${passwordResetLink}</p>`,
      text: `Click the link provided to reset your password, ${passwordResetLink}`,
    };

    mailTransporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        res.json({ status: true, message: "Server overload try later" });
        return;
      }

      res.json({
        status: true,
        message: "Password reset link sent, check your email",
      });
      console.log("link Sent", info.response);
    });
  }
});

// Reset password POST /users/reset-password/:id
//TODO GET should render a page where users will enter a new password
router.post("/reset-password/", async (req, res) => {
  const { userId, password } = req.body;
  const passwordUpdated = await userService.updatePassword(userId, password);

  if (!passwordUpdated[0]) {
    res.json({ status: false, message: passwordUpdated[1] });
  } else {
    res.json({ status: true, message: passwordUpdated[1] });
  }
});

// Contact form
router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: "diamond.fm@outlook.com",
    to: "ore.craftman@gmail.com",
    subject: "New contact message | Diamond FM",
    html: `<p>Sent by, ${name} | ${email}. <b>MESSAGE</b> <br/> ${message} </p>`,
    text: `Sent by, ${name} | ${email}. ${message}`,
  };

  mailTransporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    }

    res.json({ status: true });
    console.log("Sent", info.response);
    transporter.close();
  });
});

module.exports = router;
