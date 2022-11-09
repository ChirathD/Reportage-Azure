import React from 'react'
import "./Tag2.css"

const Tag2 = () => {
    const tags = ["Science", "Life Style", "Sports", "Ukrain", "Russia", "War", "Health","Science", "Life Style", "Sports", "Ukrain", "Russia", "War", "Health"]
    return (
        <div class="tags-container">
            <p class="tagss"> <span>Tags</span> </p>
            <div class="flex-tags">
                {tags.map((tag) => {
                return (
                    <>
                    <a class="tag" href={'/cat/' + tag}>{tag}</a>
                    </>
                    ) 
                })}
                {/* <a class="tag" href="#">CSS</a>
                <a class="tag" href="#">JavaScript</a>
                <a class="tag" href="#">Trend</a>
                <a class="tag active" href="#">Russia</a>
                <a class="tag active" href="#">Ukrain</a>
                <a class="tag active" href="#">World War II</a> */}
            </div>
        </div>
    )
}

export default Tag2
