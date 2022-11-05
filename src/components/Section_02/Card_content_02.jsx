import React from "react"
import { Link } from "react-router-dom"

const Card = ({ item: { post_id,description_preview, cover_img_link, category, title, author_name, time } }) => {
  
  return (
    
    <>
      <div className='box'>
        <div className='img'>
          <img src={cover_img_link} alt='' />
        </div>

        <Link className="para-link" to={`/${category}`}>
          <div className="text">
            <h4 >{category}</h4>
          </div>
        </Link>

        <Link className="para-link" to={`/post/${post_id}`} state={{post_id: post_id}}>
          <div className="para">
            <div>
              <h3>{title}</h3>
            </div>
            <p>
              {description_preview}
            </p>
            <div className="date-time-read">
              <span>Oct14 ·</span>
              <p>5 mins read ·</p>
            </div>
          </div>
        </Link>
        
      </div>
    </>
  )
}

export default Card
