import * as $ from 'jquery';
import Post from '@models/Post';
import './styles/styles.css'
// import json from './assets/json.json'
// import xml from './assets/file.xml'

const post = new Post('Webpack post title')

$('pre').html(Post.toString())


// console.log('xml', xml)
// console.log('Json', json)