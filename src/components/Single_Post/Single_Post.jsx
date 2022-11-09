import React, { useState, useEffect, useParams } from 'react'
import { useLocation } from "react-router-dom";
import { single_post } from "../dummyData"
import "./Single_Post_Style.css"
import Menu from '../Menu/Menu'

import ReactGA from 'react-ga';
ReactGA.initialize('UA-4269364300-01');
ReactGA.pageview(window.location.pathname + window.location.search);


const Single_Post = () => {
useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);


const location = useLocation();
const { post_id } = location.state;
console.log(post_id);
//##############################
    const [items, setItems] = useState(single_post)

    useEffect(() => {
    fetch(`https://reportage-back-end-46efhgatka-nn.a.run.app/get_section_1_single_article?post_id=${post_id}`)
        .then((res) => res.json())
        .then((jsonRes) => setItems(jsonRes));
    }, []);

    //console.log(items[0].description[0].para1)
//##############################

  return (
    <div className="single">
        <div className="content">
            <img src={items[0].cover_img_link} alt="" />
            <div className="user">
                <div className="user-img">
                    <img src="../images/users/user2.png" alt="" />
                </div>
                <div className="info">
                    <span>Oct14 ·</span>
                    <p>{items[0].author_name} ·</p>
                </div>                
            </div>

            <h1>Lorem ipsum dolor sit amet consectetur adipiscing elit</h1>
            <p>
            <p>{items[0].description[0].para1}</p>
            <br/>
            <p>{items[0].description[1].para2}</p>
            <br/>
            <p>{items[0].description[2].para3}</p>
            </p>
        </div>
        <Menu></Menu>
    </div>
  )
}

export default Single_Post