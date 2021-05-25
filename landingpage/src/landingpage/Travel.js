import React, { useState } from 'react'
import sea from "./sea.mp4"

import "./Travel.css"

export default function Travel() {
    const [isActive, setIsActive] = useState(false);
    console.log(isActive)
    return (
        <div>

            <section className={`travel ${isActive ? "active": ""}`}>
                <header>
                    <h2 className="logo">Travel</h2>
                    <div className="icon">
                        <i
                        className={isActive ? "fas fa-times" : "fas fa-bars"}
                        onClick={() =>setIsActive(!isActive)}></i>
                    </div>
                </header>


                <video src={sea} type="video/mp4"
                controls autoPlay={true} muted loop></video>

                <div className="overlay">
                    <div className="text">
                        <h2>Adventure awaits....!!</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas debitis veniam quia molestias, impedit non iste vitae excepturi amet atque beatae libero sit tempore adipisci animi expedita? Dignissimos, porro voluptas.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nihil aspernatur velit ratione accusamus provident libero dolorem id minus vel magni reiciendis quidem, pariatur nesciunt harum ea laudantium quisquam saepe.
                        </p>

                        <a href="#">Explore</a>
                    </div>

                    <ul className="social">
                        <li>
                            <i className="fab fa-facebook"></i>
                        </li>
                        <li>
                        <i className="fab fa-instagram"></i>
                        </li>
                        <li>
                        <i className="fab fa-twitter"></i>
                        </li>
                    </ul>
                </div>
            </section>
            
        </div>
    )
}
