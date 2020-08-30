import React from "react";
import c from "./ShowBlog.module.css";
import ToText from "../../utils/ToText";
import moment from "moment";
import { Link, withRouter } from "react-router-dom";

function ShowBlog(props, p) {
 
  return (
    <div className={`col-md-4 col-sm-6 col-xs-12 ${c.grid}`}>
      <div className={c.cardsmall}>
        <div
          className={c.cardpost__image}
          style={{ backgroundImage: `url(${props.thumbnail})` }}
        >

          <div className={c.authorimg}>
            <a
              href={props.profileurl}
              rel="noopener noreferrer"
              target="_blank"
              style={{ backgroundImage: `url(${props.avtar})` }}
            >
              Written By Mehul
            </a>
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title">
            
            <Link
              to={props.title}
              className={c.textfiordblue}

            >
              {props.title}
            </Link>
          </h5>

          <p className={c.cardText}>{`${ToText(
            props.description.substring(0, 1000)
          )}...`}</p>
          <br />

          <span className="text-dark">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user"

              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
              ></path>
            </svg>
            {props.author}
          </span>

          <br />
          <span className="text-muted">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="calendar-alt"

              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
              ></path>
            </svg>
            {moment(props.pubDate).format("MMM DD, YYYY hh:mm")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ShowBlog);
