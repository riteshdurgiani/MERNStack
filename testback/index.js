const express = require('express');

const app = express();

const port = 3000;
const isAdmin = (req, res, next) => {
    console.log("isAdmin is running");
    next();
}
const admin = (req, res) => { return res.send("Dashboard") }
app.get('/', (req, res) => { return res.send("hello there") });
app.get('/login', (req, res) => { return res.send("hello there") });
app.get('/signup', (req, res) => { return res.send("hello there") });
app.get('/signout', (req, res) => { return res.send("hello there signup rout") });

app.get("/admin1", isAdmin, admin)
app.get('/admin', (req, res) => {

    return res.send("this is admin")
})




app.listen(port, () => console.log('Example app listening on port'));