import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
export class News extends Component {
  static defaultProps={
   country: 'in',
   pageSize : 18
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

    constructor(){
      super();
      console.log("Hello I am Contructor");
      this.state = {
        articles: [],
        loading: false,
        page: 1
      }
    }
    async componentDidMount(){
      let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a8c9c64b69a842e9ab3e4261397c9cb6&page=1&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults})
    }
    handlePrevClick=async() =>{
      console.log("prev");
      let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a8c9c64b69a842e9ab3e4261397c9cb6&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        page:this.state.page-1,
        articles: parsedData.articles,
        
      })
  
    }
    handleNextClick= async () =>{
      console.log("prev");
      if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

      }
      else{
      let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a8c9c64b69a842e9ab3e4261397c9cb6&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        page:this.state.page+1,
        articles: parsedData.articles,
        
      })
      }
    }
    
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: '35px 0px' , marginTop: '90px' }}>NewsPanda - Top Headlines</h1>
      
        <div className="row">
          {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
            <Newsitem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} author={element.author} date={element.publishedAt} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name}></Newsitem>
            </div>
            
          })}
        
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        <spinner/>

        </div>
    )
  }
}

export default News
