import React from 'react'
import './SocialMedia.css'

function SocialMedia() {
    return (
        <>
            <ul className="social">
                <li>
                    <a  href="https://github.com/mehulk05">
                    <i className="fa fa-github"></i>
                    </a>
                </li>

                <li>
                    <a  href="https://medium.com/@mehulkothari05">
                    <i className="fa fa-medium"></i>
                    </a>
                </li>

                <li>
                    <a  href="https://www.instagram.com/mehul_kothari05/">
                    <i className="fa fa-instagram"></i>
                    </a>
                </li>

                <li>
                    <a  href="https://www.linkedin.com/in/mehul-kothari-765868126/">
                    <i className="fa fa-linkedin"></i>
                    </a>
                </li>
               
            </ul>
        </>
    )
}

export default SocialMedia
