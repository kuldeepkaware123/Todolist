const bodyParser = require("body-parser");
const { log } = require("console");
const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
const tasks = ["Eat", "Workout", "Study"];

app.get("/", function (req, res) {
    // res.sendFile(__dirname+"/index.html")
    res.render('list', { listtasks: tasks });

});
app.post("/", function (req, res) {
    const task = req.body.task;
    tasks.push(task);
    // console.log(tasks);
    res.redirect("/");

})
app.listen(3000, function () {
    console.log("server is on");
})