import React from 'react'
import ReactDom from 'react-dom'
import Main from './components/main.js'

console.log('Hello Webpack!');

ReactDom.render(<Main />, document.getElementById('app'));