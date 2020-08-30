import React, { Component } from "react";
import Axios from "axios";
import ShowBlog from "../ShowBlog/ShowBlog";


export class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        ptitle: "",
        name: "",
        avtar: "",
        profileurl: "",
      },
      item: [],
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
         const posts = res.filter(item => item.categories.length > 0);

        const title = data.data.feed.title;
        
        this.setState(
          (pre) => ({
            profile: {
              ...pre.profile,
              ptitle: title,
              profileurl: profileLink,
              avtar: avatar,
            
            },
            item: posts,
          }),
          () => {
            console.log(this.state);
          }
        );
        console.log(data, res);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    return (
      <div className="container">
            <div className="row">
            {this.state.item.map((post, index) => (
          <ShowBlog key={index} {...post} {...this.state.profile} {...index} />
        ))}
            </div>
      
      </div>
    );
  }
}

export default Blog;
