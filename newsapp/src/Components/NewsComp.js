import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import LcData from '../rsponse.json'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loder from './Loder';


export class NewsComp extends Component {
  constructor() {
    super();
    this.state = {
      // articles: LcData.articles,
      articles: [],
      loading: true,
      page: 1,
      totalResults:0,
    }
  }
  async updatenews(){
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=20`
    // let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=${this.props.language}&country=${this.props.country}&apikey=${this.props.apikey}&page=${this.state.page}`;
    try {
      const response = await fetch(url);
      this.props.setProgress(40);
      const data = await response.json(); 
      this.props.setProgress(70);
      console.log(data);
      this.setState({
        articles: data.articles,
        loading: false,
        totalResults : data.totalResults,
      });
    } catch (e) {
      console.log("error");
    }
    this.props.setProgress(100);

  }

  async componentDidMount() {
    this.updatenews()
  }
  fetchMoreData = async () => {
    // await this.setState({page:this.state.page + 1})
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=20`
      // let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=${this.props.language}&country=${this.props.country}&apikey=${this.props.apikey}&page=${this.state.page}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      this.setState({
        articles: this.state.articles.concat(data.articles),
        loading: false,
        totalResults : data.totalResults,
        page: this.state.page + 1
      });
    } catch (e) {
      console.log("error");
    }
  };

  // handlePrevClick = async () => {
  //   console.log("Previous");
  //   await this.setState({
  //     page:this.state.page -1,
  //   })
  //   console.log(this.state.page);
  //   this.updatenews();
  // }
  // handleNextClick = async () => {
  //   console.log("Next");
  //   if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

  //   }
  //   else {
  //     await this.setState({
  //       page:this.state.page + 1,
  //     })
  //     console.log(this.state.page);
  //     this.updatenews();
  //   }
  // }

  render() {
    return (
      <>
        <h1 className='text-black text-xl font-medium px-4 py-2'>Latest News</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loder/>}
        >
        <div className='flex flex-col gap-6 px-4 py-2'>
          {this.state.articles.map((e) => {
            return <NewsItem title={e.title} desc={e.description} imgurl={e.urlToImage} key={e.url} />
          })}
        </div>

        </InfiniteScroll>
        {/* <div className='flex justify-between'>
          <button className='btn-primary pl-1' disabled={this.state.page<=1} onClick={this.handlePrevClick}>
                <span className="material-symbols-outlined">chevron_left</span>Previous
              </button>
            <button className='btn-primary pr-1' disabled={this.state.page + 1 > Math.ceil( this.state.totalResults/20)} onClick={this.handleNextClick}>Next
                <span className="material-symbols-outlined">chevron_right</span>
            </button>
        </div> */}
      </>
    )
  }
}

export default NewsComp
