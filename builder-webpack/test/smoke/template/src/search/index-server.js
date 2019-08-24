'use strict'

// import React from 'react'
// import ReactDOM from 'react-dom'
// import './search.less'
// import logo from './images/logo.png'
const React = require('react')
// const ReactDOM = require('react-dom')
require('./search.less')
const logo = require('./images/logo.png')


class Search extends React.Component {

    constructor() {
        super(...arguments)

        this.state = {
            Text: null
        }
    }

    loadComponent() {
        import('./text.js').then((Text) => {
            this.setState({
                Text: Text.default
            })
        })
    }

    render() {
        const { Text } = this.state
        return <div class="search-text">
            {
                Text ? <Text /> : null
            }
            漂亮 <img src={ logo } onClick={ this.loadComponent.bind(this) } />
        </div>
    }
}

module.exports = <Search />
