// req = request
// res = respond
// next = i mean... comeone

const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

// app.get("/", logger, (req, res) => {
//   res.render("index", { text: "World" });
//   // res.download('index.js')
//   // res.status(500).json({ message: "Error" })
//   // res.status(500).send("hi")
//   // res.send(`Hi`)
// });

app.use(express.static("public"));

app.use(logger);
const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(PORT, () => console.log(`It's alive on http://localhost:${PORT}`));

// app.use( express.json() )

// // GET method route
// app.get('/', (req, res) => {
//     res.send('GET request to the homepage')
//   })

//   // POST method route
//   app.post('/', (req, res) => {
//     res.send('POST request to the homepage')
//   })

// // GET request to /tshirt page
// app.get('/tshirt', (req, res) => {
//     res.status(200).send({
//         tshirt: '👕',
//         size: 'large'
//     })
// });

// // POST request to/shirt page with tshirt id
// app.post('/tshirt/:id', (req, res) => {

//     const { id } = req.params;
//     const { logo } = req.body;

//     if (!logo) {
//         res.status(418).send({ message: 'We need a logo!' })
//     }

//     res.send({
//         tshirt: `👕 With your ${logo} and ID of ${id}`,
//     })

// });
