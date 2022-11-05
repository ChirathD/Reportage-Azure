import React, { useState, useEffect } from "react"
import { popular } from "../dummyData"
import "./Content_02.css"
import Card from "./Card_content_02"

const Content2 = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("https://reportage-back-end-46efhgatka-nn.a.run.app/get_section_2_article")
      .then((res) => res.json())
      .then((jsonRes) => setItems(jsonRes));
  }, []);


  return (
    <>
      <section className='hero2'>
        <div className='container2'>
          {items.map((item) => {
            if(item.rank<10){
              return (
                <>
                  <Card key={item.rank} item={item} />
                </>
                ) 
            }
            })}
        </div>
      </section>
      
    </>
  )
}

export default Content2
