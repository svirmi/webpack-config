import './styles/styles.css';
import json from './assets/json';
import csv from './assets/research-and-development-survey-2019-csv.csv';
import logo from './assets/logo-on-white-bg.png';
import Post from "@models/Post";

const post = new Post('Title goes here', logo);

console.log('Post to String: ', post.toString());

console.log('json: ', json);
console.log('csv: ', csv);
