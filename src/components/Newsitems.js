import React, { Component } from "react";
import "../index.css";
// import { findRenderedDOMComponentWithClass } from "react-dom/cjs/react-dom-test-utils.production.min";

export class Newsitems extends Component {
  render() {
    const myStyle={
      color:'green',
      backgroundColor:'#62ff009e'
    }
    let { title, description, imageurl, url ,author,publishedAt,name} = this.props;

    
    // this is how we can fetch title and discription from ||this.props||.
    return (
      <div className="card" >
        {/* this is /\/\/\/\/\/\/\/\ inline style , so we have to make it an object since in react we write JSX  */}
        <img
          src={
            !imageurl
              ? "https://cdn.hipwallpaper.com/i/69/50/rUFRE3.jpg"
              : imageurl
          }
          className="card-img-top"
          alt="..."
        />
        {/* <img src="https://fontmeme.com/temporary/3b3d6e77901609122046855b08a62597.png" className="card-img-top" alt="..." /> */}
        <div className="card-body">

          <div className="cardnoty">

        <span className="badge rounded-pill bg-danger" id="publisher">{name}
        </span>

        </div >

          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {!author?name:author} on  {new Date(publishedAt).toUTCString()}</small></p>
          <a href={url} target="_blank" style={myStyle} rel="noreferrer" className="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default Newsitems;
