import React, { useState, useEffect } from "react"
import { hero } from "../dummyData"
import "./Content_01.css"
import Card from "./Card_content_01"

const Content1 = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("https://reportage-back-end-46efhgatka-nn.a.run.app/get_section_1_article")
      .then((res) => res.json())
      .then((jsonRes) => setItems(jsonRes));
  }, []);


  return (
    <>
      <section className='hero'>
        <div className='container'>
          {items.map((item) => {
            return (
              <>
                <Card key={item.rank} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Content1
