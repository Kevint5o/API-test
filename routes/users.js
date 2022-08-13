const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(users);
  res.render("users/list", { list: users });
  // res.json(users);
});

router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "Name" });
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ name: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }
  console.log(req.body.firstName);
  res.send("Hi");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    // res.json(req.user);
    res.send(`Get User with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Get User with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Remove User with ID ${req.params.id}`);
  });

let users = [
  { name: "john" },
  { name: "helga" },
  { name: "olga" },
  { name: "jonathan" },
  { name: "dean" },
  { name: "johan" },
  { name: "jannes" },
  { name: "henk" },
  { name: "jannes" },
  { name: "pietje" },
  { name: "kevin" },
  { name: "nick" },
  { name: "noortje" },
  { name: "bryan" },
  { name: "emma" },
  { name: "justin" },
];

router.param("id", (req, res, next, id) => {
  if (users.length > id) {
    req.user = users[id];
  } else {
    res.send("Error");
  }
  next();
});

module.exports = router;
