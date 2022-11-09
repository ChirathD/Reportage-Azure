import React from 'react'
// import './Tags.css'
// import './Tags.scss'

const Tags = () => {
    const tags = ["Science", "Life Style", "Sports", "Ukrain", "Russia", "War", "Health"]
    return (
    
        <div class="tags-container">
        <p class="tags"> <span>Tags</span> </p>
        <div class="flex-tags">
        <a class="tag" href="#">CSS</a>
        <a class="tag" href="#">JavaScript</a>
        <a class="tag" href="#">Trend</a>
        <a class="tag active" href="#">Russia</a>
        <a class="tag active" href="#">Ukrain</a>
        <a class="tag active" href="#">World War II</a>
        </div>
        </div>


    )
}

export default Tags
