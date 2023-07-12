import React from "react";
import style from './About.module.css'

export default function About(){
    return(
        <div className={style.containerAbout}>
            <h1>Rick and Morty Project</h1>
            <div className={style.logoAbout}></div>
            <p> Rick and Morty is an exciting project based on the popular animated series. It utilizes React, Redux, and a custom server to provide an interactive experience. Through the server, it fetches updated data about the characters from the series, enabling users to explore detailed information about them. With a combination of technologies and a touch of CSS imagination, this project offers a visually appealing interface and an immersive experience for Rick and Morty fans. The creator of the website is Candelaria Gonzalez.</p>
        </div>
    )
}