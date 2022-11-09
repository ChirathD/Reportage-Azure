import React from 'react'
import './Tags.css'

const Tags = () => {
    const tags = ["Science", "Life Style", "Sports", "Ukrain", "Russia", "War", "Health"]
    return (
        <div>
            <div className='tag-container'>
                <h1>Tags</h1>
                {tags.map((tag) => {
                    return (
                        <>
                        <a>
                            {tag}
                        </a>
                        {/* <Card key={item.rank} item={item} /> */}
                        </>
                        ) 
                })}
            </div>
        </div>
    )
}

export default Tags
