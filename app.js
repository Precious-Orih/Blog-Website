import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import {dirname} from "path"
import { fileURLToPath } from "url";
import { title } from "process";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url))
let allPosts = [
  { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.' },
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render('index', {allPosts});
});
app.get("/post", (req, res) => {
    res.render('post')
})
app.get("/about", (req, res) => {
    res.render('about.ejs');
});
app.get("/contact", (req, res) => {
    res.render('contact');
});
app.get('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = allPosts.find(post => post.id === id);
  res.render('edit', { post });
});
app.get("/sign-in", (req, res) => {
    res.render('sign-in');
});

app.post("/submit", (req, res) => {
    const { title, content } = req.body;
    const newPost = { id: allPosts.length + 1, title, content };
    allPosts.push(newPost);
    res.redirect('/');
    console.log(req.body)
});
app.post('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const postIndex = allPosts.findIndex(post => post.id === id);
  allPosts[postIndex] = { id, title, content };
  res.redirect('/');
});
app.post('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    allPosts = allPosts.filter(post => post.id !== id);
    res.redirect('/');
    
});

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
