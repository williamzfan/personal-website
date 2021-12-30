import React from 'react'
import "./portfolio.scss"
import { useState } from "react";

export default function Portfolio() {
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/pennbook.png",
            title: "PennBook",
            desc:
              "A Facebook recreation implemented as a final project for NETS212: Scalable and Cloud Computing @ Penn (Dec 2021)",
            b1:
              "Created a platform for users to create and share posts, chat, browse news etc.",
            b2:
              "Programmed a recommendation algorithm based on user likes, interests, and friends using " +
              "Resilient Distributed Datasets (RDDs) in Apache Spark",
            b3:
              "Implemented a news search engine that returned queries based on keyword and rank from recommendation algorithm",
            b4:
              "Javascript, Java, EJS, CSS, Apache Spark, AWS DynamoDB",
          },
          {
            id: "2",
            icon: "./assets/snakefinal.gif",
            title: "Snake",
            desc:
              "Snake created as final project for CIS120: Programming Languages and Techniques @ Penn (Dec 2020)",
            b1:
              "Implemented snake game and GUI using Java Swing that allowed for interactive user experience",
            b2:
              "Used file I/O to read and store various users, highscores, and states of games",
            b3:
              "Tested functions and edge cases using unit testing (JUnit 5) to locate and fix bugs and ensure the game ran as intended",
            b4:
              "Java, Swing, JUnit",
          },
          {
            id: "3",
            icon: "./assets/apollovid.gif",
            title: "Apollo 11 Lunar Orbit Simulation",
            desc:
              "Apollo 11 simulation created as final project for PHYS412: Computational Physics @ NCSSM (May 2019)",
            b1:
              "Simulated the entire trajectory including orbit around earth, slingshot into figure 8 orbit, orbit around moon and drop/pickoff" +
              " of capsule, return trajectory, and landing",
            b2:
              "Animated the trajectory of the spacecraft and capsules",
            b3:
              "Calculated the gravitational forces, velocity, acceleration, and other kinematic components neccessary to model trajectory",
            b4:
              "VPython",
          },
      ];

      const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 0)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };
    
    return (
        <div className="portfolio" id = "portfolio">
            <h1>Portfolio</h1>
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                            <div className="imgContainer">
                                <img src={d.icon} alt="" />
                            </div>
                            <h2>{d.title}</h2>
                            <p>{d.desc}</p>
                            <p><i>{d.b4}</i></p>
                            </div>
                        </div>
                        <div className="right">
                            <ul>
                                <li>{d.b1}</li>
                                <li>{d.b2}</li>
                                <li>{d.b3}</li>
                            </ul>

                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            <img src="assets/caret.png" className="arrow left" alt="" onClick={()=>handleClick("left")}></img>
            <img src="assets/caret.png" className="arrow right" alt="" onClick={()=>handleClick()}></img>
        </div>
    )
}
