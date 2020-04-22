import './styles/styles.css';
import json from './assets/json.json';
import logo from './assets/logo-on-white-bg.png';
import Post from "./Post";

const post = new Post('Title goes here', logo);

console.log('Post to String: ', post.toString());

console.log('json: ', json);
