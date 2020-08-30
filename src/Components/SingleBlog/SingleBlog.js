import React, { Component } from "react";
import Axios from "axios";
import c from "./SingleBlog.module.css";

export class SingleBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      singlePost: {},
      titleid: props.match.url,
      avatar: "",
      profileLink: "",
    };
  }
  mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mehulkothari05";
  componentDidMount() {
    Axios.get(this.mediumURL)

      .then((data) => {
        // console.log(data.data)
        const avatar = data.data.feed.image;
        const profileLink = data.data.feed.link;
        const res = data.data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter((item) => item.categories.length > 0);
        for (let i in posts) {
          const title = "/" + posts[i].title;
          if (title === this.state.titleid) {
            let post = posts[i];
            
              this.setState((p) => ({
                singlePost: post,
                avatar: avatar,
                profileLink: profileLink,
              }));
            
          }
        }
        
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    console.log(this.state.titleid, this.state);
    return (
      <div className={`container ${c.center}`}>
        <h2>{this.state.singlePost.title}</h2>
        <div className={c.avatar}>
          <a
            href={this.state.profileLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={this.state.avatar} alt="profile" width="75" height="75" />
          </a>

          <a
            href={this.state.profileLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <p>{this.state.singlePost.author}</p>
          </a>
          <p>{this.state.singlePost.pubDate}</p>
        </div>
  
      <div className={c.content}  dangerouslySetInnerHTML={{ __html:this.state.singlePost.content}}>
          </div>
      </div>
    );
  }
}

export default SingleBlog;
