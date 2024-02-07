import React ,{useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
// import LcData from '../rsponse.json'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loder from './Loder';


const NewsComp = (props)=>{
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  const updatenews = async ()=>{
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=20`
    // let url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=${props.language}&country=${props.country}&apikey=${props.apikey}&page=${page}`;
    try {
      const response = await fetch(url);
      props.setProgress(40);
      const data = await response.json(); 
      props.setProgress(70);
      console.log(data);
      setArticles(data.articles)
      setTotalResults(data.totalResults)
    } catch (e) {
      console.log("error");
    }
    props.setProgress(100);

  }

  useEffect(() => {
    updatenews()
}, [])

  const fetchMoreData = async () => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=20`
      // let url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=${props.language}&country=${props.country}&apikey=${props.apikey}&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setArticles(articles.concat(data.articles))
      setTotalResults(data.totalResults)
      setPage(page+1)
    } catch (e) {
      console.log("error");
    }
  };

  // handlePrevClick = async () => {
  //   console.log("Previous");
  //   await this.setState({
  //     page:page -1,
  //   })
  //   console.log(page);
  //   this.updatenews();
  // }
  // handleNextClick = async () => {
  //   console.log("Next");
  //   if (page + 1 > Math.ceil(totalResults / 20)) {

  //   }
  //   else {
  //     await this.setState({
  //       page:page + 1,
  //     })
  //     console.log(page);
  //     this.updatenews();
  //   }
  // }

    return (
      <>
        <h1 className='text-black text-xl font-medium px-4 py-2'>Latest News</h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loder/>}
        >
        <div className='flex flex-col gap-6 px-4 py-2'>
          {articles.map((e) => {
            return <NewsItem title={e.title} desc={e.description} imgurl={e.urlToImage} key={e.url} />
          })}
        </div>

        </InfiniteScroll>
        {/* <div className='flex justify-between'>
          <button className='btn-primary pl-1' disabled={page<=1} onClick={handlePrevClick}>
                <span className="material-symbols-outlined">chevron_left</span>Previous
              </button>
            <button className='btn-primary pr-1' disabled={page + 1 > Math.ceil( totalResults/20)} onClick={handleNextClick}>Next
                <span className="material-symbols-outlined">chevron_right</span>
            </button>
        </div> */}
      </>
    )
  }

NewsComp.defaultProps = {
  country : 'in',
  category:'general'
}
NewsComp.propTypes = {
  country : PropTypes.string,
  category: PropTypes.string,
}

export default NewsComp
