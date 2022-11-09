import React from "react"
import { Link } from "react-router-dom"

const Card = ({ item: { rank, cover_img_link, category, title, author_name, date } }) => {
  const section_1_color_pallet = {
    "featured": "crimson",
    "Sports" : "#0b9931",
    "fashion": "#460b99",
    "technology" : "#c78823",
    "Health" : "#c78823"
  };

  return (
    <>
      <div className='box'>
        <div className='img'>
          <img src={cover_img_link} alt='' />
        </div>
        <div className='text'>
          <span className='category' style={{backgroundColor: section_1_color_pallet[category]}}>{category}</span>
          {/*<h1 className='titleBg'>{title}</h1>*/}
          <Link to={`/main-post/${rank}`}>
            <h1 className='titleBg'>{title}</h1>
          </Link>
          <div className='author flex'>
            <span>by {author_name}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
