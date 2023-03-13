const express = require("express");
const app = express();
const cors = require("cors");
const port = 7900;

require("./config/mongoose.config");

// Express middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// CORS middleware
app.use(cors());

// Routes
require("./routes/recipes.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
