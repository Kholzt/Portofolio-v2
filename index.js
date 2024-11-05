const express = require("express");
const path = require("path");
const db = require("./utils/firebase");
const app = express();
require("dotenv").config()


// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'assets')));


app.get("/projects",async (req, res) => {
    const querySnapshot = await db.collection("projects").orderBy("date", "desc").get();
    const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    res.json(data);
});
// Serve index.html when accessing the root URL
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});



app.listen(5000, function () {
    console.log("Server running on port 5000");
});
