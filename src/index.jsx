// import $ from 'jquery'
import Post from '@models/Post'
// import json from './assets/json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import WebpackLogo from '@/assets/webpack-logo.png'
import React from 'react'
import {render} from 'react-dom'

import '@/babel.js'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'

const post = new Post('Wbpack Post title', WebpackLogo)
// $('pre').addClass('code').html(post.toString())

const App = () => (
    <div className={"container"}>
        <h1>Webpack course</h1>
        <hr/>
        <div className={"logo"}></div>
        <hr/>
        <pre/>
        <hr/>
        <div className={"box"}>
            <h2>Less style</h2>
        </div>
        <hr/>
        <div className={"card"}>
            <h2>Scss style</h2>
        </div>
    </div>
)

render(<App/>, document.getElementById('app'))
// console.log('json file: ', json);
// console.log('xml file: ', xml);
// console.log('csv file: ', csv);