import React, { Component } from 'react'
import loading from 'D:/MERN/React/news-monkey/src/Spinner-1s-100px.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={loading} alt="loading" />
            </div>
        )
    }
}
