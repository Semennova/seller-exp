import React from 'react'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom';
import { SingleNewsPage } from './SingleNewsPage/SingleNewsPage';


export const MainPage = ({stories}) => {
    return (
        <div>
            <h1>Hacker news 🔥🔥🔥</h1>
            {stories.map((s, index) => (
                <div key={index}>
                 <span><NavLink to='/singleNewsPage'><b>Title: </b></NavLink>{s.title} <b>raiting: </b>{s.score}</span>
                   <div>Story by <i>{s.by}</i>, {new Date(s.time).toLocaleString()}</div> 
                   <div><a href={s.url} target='_blank'>Click for detales</a></div>
                </div>
            ))}
            <div>
                <Route path='/singleNewsPage' render={()=> <SingleNewsPage />}/>          
            </div>
        </div>
    )
}
