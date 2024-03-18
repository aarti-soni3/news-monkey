import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export default class News extends Component {
  static defaultProptypes = {
    pageSize: 10,
    country: 'in',
    category: 'health'
  }

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  }

  capitalisedFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    }
    document.title = `${this.capitalisedFirstLetter(this.props.category)} - NewsMonkey`
  }

  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=4bbd78db70c84e35907ee04d9231c05e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  }

  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize))) {
      this.setState({ page: this.state.page + 1 });
      this.updateNews();
    }
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=4bbd78db70c84e35907ee04d9231c05e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };


  render() {
    return (
      <>
        <h2 className='text-center' style={{ margin: '35px 0px' }}>NewsMonkey - Top {this.capitalisedFirstLetter(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}>

          <div className='container my-3'>
            <div className='row'>
              {this.state.articles.map((element,index) => {
                return <div className='col-md-4' key={index} /* key={element.url} */> {/* changed due to same key issue*/ }
                  <NewsItem title={element.title /* && (element.title.length >= 40 ? element.title.slice(0, 40) : element.title) */}
                    description={element.description && (element.description.length >= 60 ? element.description.slice(0, 60) : element.description)}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    dateTime={element.publishedAt}
                    source={element.source.name} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  }
}
