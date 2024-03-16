import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, dateTime, source } = this.props;
    var GetGMTDate = (dateTime) => {
      var date = new Date();
      return date.toUTCString();
    }
    return (
      <div className='my-3'>
        <div className="card">
          <span className="position-absolute badge text-bg-secondary bg-primary" style={{ zIndex: '1',marginTop:'-5px',marginLeft:'-5px'}}>{source}</span>
          <img src={!imageUrl ? "https://ichef.bbci.co.uk/news/1024/branded_news/CC7C/production/_132784325_d3775bb0-aee8-4215-b93b-cdbe29199733.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted"> By {!author ? 'Unknown' : author} On {GetGMTDate(dateTime)}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
