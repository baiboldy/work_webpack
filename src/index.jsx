import * as $ from 'jquery';
import Post from '@models/Post';
import './babel'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'
import React from 'react'
import {render} from 'react-dom'
// import json from './assets/json.json'
// import xml from './assets/file.xml'

const post = new Post('Webpack post title')

$('pre').addClass('mark').html(Post.toString())

const App = () => (

    <div class="container">
        <h1>Webpack Course</h1>

        <hr></hr>
        <pre></pre>

        <hr></hr>
        <div class="box">
            <h2>Less</h2>
        </div>
        <div class="card">
            <h2>Scss</h2>
        </div>
    </div>
)

render(<App/>, document.getElementById('app'))


// console.log('xml', xml)
// console.log('Json', json)