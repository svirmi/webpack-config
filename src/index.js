import './styles/styles.css';
import json from './assets/json.json';
import Post from "./Post";

const post = new Post('Title goes here');

console.log('Post to String: ', post.toString());

console.log('json: ', json);
