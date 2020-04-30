import * as $ from 'jquery';
import '@/styles/styles.css';
import './styles/scss.scss';
import './babel';
import json from '@/assets/json';
import csv from './assets/research-and-development-survey-2019-csv.csv';
import Post from "@models/Post";
import logo from '@/assets/logo-on-white-bg.png';


const post = new Post('Title goes here', logo);

$('pre').addClass('code').html(post.toString());

console.log('json: ', json);
console.log('csv: ', csv);
