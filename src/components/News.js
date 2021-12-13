import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
  // articles = [
  //   {
  //     source: {
  //       id: null,
  //       name: "Yahoo Entertainment",
  //     },
  //     author: "Charles Robinson",
  //     title:
  //       "Sources: Dolphins top candidate to land Deshaun Watson via trade - Yahoo Sports",
  //     description:
  //       "The Texans are seeking three first-round draft picks and two second-round selections, a team that dropped out of trade discussions with Houston told Yahoo...",
  //     url: "https://sports.yahoo.com/sources-dolphins-top-candidate-to-land-deshaun-watson-via-trade-190822043.html",
  //     urlToImage:
  //       "https://s.yimg.com/ny/api/res/1.2/27sRC_p06KNXmGkLl8JMpQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2021-08/972d6250-fc71-11eb-b6f6-c058079b2bf2",
  //     publishedAt: "2021-08-28T19:08:22Z",
  //     content:
  //       "The Miami Dolphins have emerged as the front-runner in trade talks for Houston Texans star Deshaun Watson, sources told Yahoo Sports. \r\nThe Texans are seeking three first-round draft picks and two se… [+1448 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "NBCSports.com",
  //     },
  //     author: null,
  //     title:
  //       "Eagles’ trade for Gardner Minshew a move with no downside - NBC Sports Chicago",
  //     description:
  //       "Here are five thoughts about the Eagles' trade to acquire QB Gardner Minshew. By Dave Zangaro",
  //     url: "https://www.nbcsports.com/philadelphia/eagles/eagles-trade-gardner-minshew-move-no-downside",
  //     urlToImage:
  //       "https://www.nbcsports.com/sites/rsnunited/files/styles/metatags_opengraph/public/slide/image/minshew_g_USATSI_14927734.png",
  //     publishedAt: "2021-08-28T18:18:20Z",
  //     content:
  //       "Why not?\r\nThat was my first thought when I heard the Eagles traded a late-round pick in 2022 to acquire Gardner Minshew from Jacksonville on Saturday morning.\r\nThe Eagles traded away a conditional si… [+3554 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "CBS Sports",
  //     },
  //     author: "",
  //     title:
  //       "Nebraska vs Illinois: Live stream, watch online, TV channel, kickoff time, football game odds, prediction - CBS Sports",
  //     description:
  //       "The 2021 season opens with an interesting Big Ten showdown between the Cornhuskers and Illini",
  //     url: "https://www.cbssports.com/college-football/news/nebraska-vs-illinois-live-stream-watch-online-tv-channel-kickoff-time-football-game-odds-prediction/",
  //     urlToImage:
  //       "https://sportshub.cbsistatic.com/i/r/2021/08/25/3577af7c-6c39-463c-b3e7-d18674af3cc9/thumbnail/1200x675/0907530b34c60aa9b20f4314284672b0/nebraska.jpg",
  //     publishedAt: "2021-08-28T16:53:00Z",
  //     content:
  //       "The 2021 college football season is finally here and it starts with a bang Saturday. Week 0 starts with an interesting game in the Big Ten when Illinois plays host to Nebraska at the Illini's Memoria… [+4070 chars]",
  //   },
  // ];

  static propTypes = {
    country: propTypes.string,
    pagesize: propTypes.number,
    category: propTypes.string,
  };

  capitalise111 = (string1) => {
    return string1.charAt(0).toUpperCase() + string1.slice(1);
  };

  //constructor will the first one to run
  constructor(props) {
    super(props);
    console.log("it's constructor and yes i am working");
    this.state = {
      //this.state is used to create a state
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0, //making totalResult by default zero for Infinite scroll
    };

    document.title = `${this.capitalise111(this.props.category)}-MonsterNews`;
    //category is a props
  }

  // In classs based componenets to make a function we do not need to use const
  // to use await we must have to make or use astn to make a function

  async Updatepage() {
    //setting the progress
    this.props.changeProgress(5);
    
    console.log("prev is clicked");
    
    console.log("it's didmount dude");
    this.props.changeProgress(15);
    
    
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=33ef3379510d4921938098af719ce12e&page=${this.state.page}&pagesize=${this.props.size}`;
    
    
    this.setState({ loading: true });
    this.props.changeProgress(25);
    
    let data = await fetch(url);
    
    this.props.changeProgress(35);
    console.log(this.state.page);
    let parsedata = await data.json();
    
    this.props.changeProgress(55);
    console.log(parsedata);
    
    this.props.changeProgress(75);
    this.setState({
      totalResults:parsedata.totalResults,
      articles: parsedata.articles,
      loading: false,
    });
    this.props.changeProgress(100);;
  }

  async componentDidMount() {
    //   // //componentDidCatch() is life cycle method. || An asyn function wait for a problem to resolve
    //   // console.log("it's didmount dude");
    //   // // it will run after render

    //   // {this.setState({loading:true})}
    //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=33ef3379510d4921938098af719ce12e&page=1&pagesize=${this.props.size}`;

    //   // let data = await fetch(url);
    //   // // fetch() method take all the data that present on that particular url and stored it to data variable

    //   // let parsedata = await data.json();
    //   // //json()= JSON format is used for serializing and transmitting structured data over network connection
    //   // console.log(parsedata);

    //   // this.setState({
    //   //   articles: parsedata.articles,
    //   //   totalResults: parsedata.totalResults,
    //   //   loading:false
    //   // });

    this.Updatepage();
  }
  // handleOnnext = async () => {
  //   // console.log("next is clicked");
  //   // console.log("it's didmount dude");

  //   // {this.setState({loading:true})}
  // //   if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.size))) {
  // //     //math.ciel() is a function which return ceiling value

  // // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=33ef3379510d4921938098af719ce12e&page=${this.state.page + 1}&pagesize=${this.props.size}`;

  // //     let data = await fetch(url);

  // //     let parsedata = await data.json();

  // //     console.log(parsedata);

  // //     this.setState({
  // //       page: this.state.page + 1,
  // //       articles: parsedata.articles,
  // //       loading:false
  // //     });

  // this.setState({page:this.state.page+1});
  // this.Updatepage();
  //   }

  // handleOnprev = async () => {
  //   // console.log("prev is clicked");

  //   // console.log("it's didmount dude");

  //   // {this.setState({loading:true})}

  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=33ef3379510d4921938098af719ce12e&page=${this.state.page - 1}&pagesize=${this.props.size}`;

  //   // let data = await fetch(url);

  //   // console.log(this.state.page);
  //   // let parsedata = await data.json();

  //   // console.log(parsedata);

  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parsedata.articles,
  //   //   loading:false
  //   // });

  //   this.setState({page:this.state.page-1});
  //   this.Updatepage();
  // };

  static defaultProps = {
    country: "us",
    pagesize: 6,
    category: "general",
  };
  static propTypes = {
    country: propTypes.string,
    pagesize: propTypes.number,
    category: propTypes.string,
  };

  fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    this.setState({ page: this.state.page + 1 });
    console.log("prev is clicked");

    console.log("it's didmount dude");

    
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=33ef3379510d4921938098af719ce12e&page=${this.state.page}&pagesize=${this.props.size}`;
    
    // this.setState({ loading: true });

    let data = await fetch(url);

    console.log(this.state.page);
    let parsedata = await data.json();

    console.log(parsedata);

    this.setState({
      totalResults: parsedata.totalResults,
      articles: this.state.articles.concat(parsedata.articles), //concatinating articles to add new articles with existing one
      loading: false,
    });
  };
  render() {
    return (
      <>
        <h2 className="text-center my-5">{`MonsterNews-Top Headlines ${this.capitalise111(
          this.props.category
        )}`}</h2>

        {this.state.loading && <Spinner />}
        {/* By doing this spinner only shown when loading is true */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length != this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            {/* Added a div with className container to remove Horizontal scroll bar */}

            <div className="row">
              {/* row is a bootstrp class */}

              {/* \/\/\/\/\/\/\/\/\/\/ ||this.state.articles.map()|| we are iterating articles one by one by elements variable || and then taking values of article by elements.valueWeWantToTake  */}
              {this.state.articles.map((element) => {
                  // in ||map()|| we always define an arrow function like ||map((element=>{}))
                  return (
                    <div className="col-md-4" key={element.url}>
                      {/* col-md-4 is a bootstrp class */}
                      <Newsitems
                        title={element.title ? element.title : ""}
                        description={
                          element.description ? element.description : ""
                        }
                        imageurl={element.urlToImage}
                        url={element.url}
                        author={element.author}
                        publishedAt={element.publishedAt}
                        name={element.source.name}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>

        {/* < className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1}  className="btn btn-dark"  onClick={this.handleOnprev}  >
            &larr;Previous
          </button>
          {/* here we must call function using this because we are working in class based component */}
        {/* <button  disabled={this.state.page + 1 >= Math.ceil(this.state.totalResults/this.state.size)} className="btn btn-dark" onClick={this.handleOnnext}> Next &rarr;</button>
        // </div> */}

        {/* Removed Next and Previous button since we are looking to use Infinite scrolll bar */}
      </>
    );
  }
}

export default News;
