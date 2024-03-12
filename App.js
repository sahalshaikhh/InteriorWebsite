// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const Owner = require('./models/owner');
const Project = require('./models/projects');
const fetch = require('node-fetch');



// Create an Express application
const app = express();
const port = process.env.PORT || 3000;

// Set up middleware for parsing JSON and handling URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Middleware to enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Set EJS as the view engine
app.set('view engine', 'ejs');


// Set up static file serving from the "public" directory
app.use(express.static('public'));

// Connect to MongoDB using Mongoose (replace 'your-database-url' with your actual MongoDB URL)
mongoose.connect('mongodb://localhost:27017/serenix-interiors', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.get('/', function (req, res) {
    res.render("index")
});

app.get("/about", async function (req, res) {
    try {
        // Fetch owners from the database
        const owners = await Owner.find();
        const projects = await Project.find();
        // Render the about.ejs template and pass the owners data
        res.render("about", { owners, projects });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error please wait');
    }
})

app.get("/gallery", async function (req, res) {
    try {



        const apiResponse = await fetch(`https://apihosting-production.up.railway.app/api/products`);

        const data = await apiResponse.json();

        // console.log(data);


        res.render("gallery", { data });



    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' }); // Send JSON error response
    }
});

app.get('/contact', function (req, res) {
    res.render("contact")
});

app.get("/ApiData", async function (req, res) {
    const page = req.query.page || 1;
    console.log(page);
    const apiResponse = await fetch(`https://apihosting-production.up.railway.app/api/products?page=${page}`);
    const data = await apiResponse.json();
    res.json(data);
})





// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
