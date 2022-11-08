import React from 'react'
import "./BlogPosts.css"
import Menu from "../Menu/Menu"

const BlogPosts = () => {
    return (
        <div className="single">
        <div className="content">
            <img src='https://reportagedb.blob.core.windows.net/reportage-assests-diabetes/pexels-artem-podrez-6823763.jpg' alt="" />
            <div className="user">
                <div className="user-img">
                    <img src="../images/users/user2.png" alt="" />
                </div>
                <div className="info">
                    <span>Oct14 ·</span>
                    <p>Elina ·</p>
                </div>                
            </div>
            <p className='ppp'>
                <h2 className='pph2'>What is Diabetes?</h2>
                <p className='ppp'>
                    When your blood glucose, commonly known as blood sugar, is too high, you develop diabetes. Your primary energy source is blood glucose, which is obtained from the food you eat. The pancreas produces the hormone insulin, which facilitates the entry of food-derived glucose into your cells for energy production. Your body occasionally produces insufficient or no insulin, or it uses insulin poorly. After that, glucose remains in your circulation and does not enter your cells. This calls Diabetes!
                </p>
            </p>

            <div className="diabetes-section-2">
                <div className='section-2-img'>
                    <img src='https://reportagedb.blob.core.windows.net/reportage-assests-diabetes/pexels-polina-tankilevitch-5469290.jpg' alt="" />
                </div>
                <div className='section-2-para'>
                <h2 className='pph2'>How to Manage Diabetes?</h2>
                    <p className='ppp'>
                    Over time, health issues might result from having too much glucose in the blood. Despite the fact that there is no treatment for diabetes, you can manage it and maintain your health.
                    </p>
                    <h2 className='pph2'>Reduce your weight</h2>
                    <p className='ppp'>
                    Overweight lowers the risk of developing diabetes. Based on your current body weight, choose a weight loss target. Discuss attainable short-term objectives and expectations with your doctor, such as reducing 1 to 2 pounds per week.
                    </p>
                    <h2 className='pph2'>Eat healthy plant-based foods</h2>
                    <p className='ppp'>
                    Plants supply your food with vitamins, minerals, and carbs. Sugars, starches, and fiber are all types of carbohydrates. These are the sources of energy for your body. Roughage and bulk are other terms for dietary fiber, which is the portion of plant foods that your body cannot digest or absorb.
                    </p>
                </div>  
            </div>

            <div className="diabetes-section-3">
                <div className='section-2-para'>
                <h2 className='pph2'>How to Manage Diabetes?</h2>
                <p className='ppp'>
                Foods high in fiber encourage weight loss and reduce the incidence of diabetes. Consume a range of wholesome, high-fiber foods, such as: fruits from trees, such as tomatoes, peppers, and other berries.
                </p>
                </div>  
                <div className='section-3-img'>
                    <img src='https://reportagedb.blob.core.windows.net/reportage-assests-diabetes/pexels-jane-doan-1092730.jpg' alt="" />
                </div>
                <p className='ppp'>
                Avoid foods that are "bad carbohydrates" — high in sugar with little fiber or nutrients: white bread and pastries, pasta from white flour, fruit juices, and processed foods with sugar or high-fructose corn syrup.
                </p>
                <h2 className='pph2'>Be more active and energetic</h2>
                <div className='section-3-img'>
                    <img src='https://reportagedb.blob.core.windows.net/reportage-assests-diabetes/pexels-andrea-piacquadio-903171.jpg' alt="" />
                </div>
                <p className='ppp'>
                Regular exercise has a variety of advantages. Exercise benefits include:
                </p>
                <ul>
                    <li >
                    Reduce the weight
                    </li>
                    <li>
                    Reduce your sugar levels
                    </li>
                </ul>
                <p className='ppp'>
                Increasing your sensitivity to insulin will help you maintain a normal range for your blood sugar. Most persons set the following objectives to encourage weight loss and keep a healthy weight:
                </p>
            </div>

            <div className="diabetes-section-4">
                <div className='section-4-flex'>
                    <div className='section-4-img'>
                    <img src='https://reportagedb.blob.core.windows.net/reportage-assests-diabetes/pexels-dó-castle-2158963.jpg' alt="" />
                    </div>
                    <div>
                    <h2 className='pph2'>Aerobic exercise</h2>
                    <p className='ppp'>
                    Aim for at least 150 minutes of moderate to strenuous aerobic activity each week, which should include at least 30 minutes of brisk walking, swimming, bicycling, or running.                    
                    </p>
                    </div>
                </div>

                <div className='section-4-flex'>
                    <div className='section-4-img'>
                    <img src='https://reportagedb.blob.core.windows.net/reportage-assests-diabetes/pexels-elina-fairytale-3823207.jpg' alt="" />
                    </div>
                    <div>
                    <h2 className='pph2'>Resistance exercise</h2>
                    <p className='ppp'>
                    Your strength, balance, and capacity to lead an active life are all improved by resistance training, which you should do at least 2 to 3 times per week. Yoga, calisthenics, and weightlifting are all forms of resistance training.                    </p>                    
                    </div>
                </div>
                
                <div className='section-4-flex'>
                    <div className='section-4-img'>
                    <img src='https://reportagedb.blob.core.windows.net/reportage-assests-diabetes/pexels-ekaterina-bolovtsova-4049941.jpg' alt="" />
                    </div>
                    <div>
                    <h2 className='pph2'>Limited inactivity</h2>
                    <p className='ppp'>
                    Long periods of inactivity, such working at a computer, can be broken up to assist manage blood sugar levels. Every 30 minutes, spend a few minutes standing up, moving around, or engaging in some light exercise.                    </p>
                    </div>
                </div>

            </div>

        </div>
        <Menu></Menu>
    </div>
    )
}

export default BlogPosts
