import React from 'react'
import "./research.scss"
import {KeyboardArrowRight} from "@material-ui/icons"
import { useState } from "react";

export default function Research() {
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/whartonlogoclear.png",
            title: "Finance Research Assistant @ Wharton",
            desc:
              "In collaboration with Prof. Chaojun Wang (Nov 2021 - Present)",
            b1:
              "Developed a mathematical model of OTC markets that explains how price discrimination in OTC exchanges lowers overall market welfare",
            b2:
              "Writing proofs of theoretical models using nonlinear programming methods, convex optimization, and other statistical techniques",
            b3:
              "Programming scripts in Python and Mathematica to empirically solve problems too difficult to solve analytically",
            b4:
              "Working papers still in progress",
            b5:
            "Research Area: Over-the-counter (OTC) markets, trading games and outcomes",
          },
        {
          id: "2",
          icon: "./assets/mitlogo.png",
          title: "Research Engineer @ MIT",
          desc:
            "In collaboration with Prof. Peter Fisher (May - Oct 2021)",
          b1:
            "Implemented statistical models that accurately determined the location of entities, particularly stealth aircraft, using only reflected radio waves",
          b2:
            "Wrote algorithms in Python and MATLAB for noise reduction and clutter suppression in raw data",
          b3:
            "Programmed a matched filter and normalized least-mean square (NLMS) algorithm",
          b4:
            "Built hardware components for passive coherent location setup",
          b5:
            "Research Areas: Software Defined Radio, Passive Coherent Location",
        },
        {
            id: "3",
            icon: "./assets/dukelogoclear.png",
            title: "Computer Science/Economics Research Intern @ Duke",
            desc:
              "In collaboration with Prof. Kamesh Munagala and Prof. Brandon Fain (May 2019 - Jan 2021)",
            b1:
              "Developed the first known effective algorithm to solve a well-known economics problem ",
            b2:
              "Significant contributor to proofs of Theorems 2, 4 and Lemmas 1, 2, 3 in Concentration of Distortion paper",
            b3:
              "Programmed models in Python to simulate and empirically evaluate the effectiveness of our algorithms",
            b4:
              "Coauthored publication in 2020 International Joint Conferences on Artificial Intelligence (IJCAI-PRICAI 2020: 5.47 IF, 12.6% acceptance rate)",
            b5:
              "Research Areas: Algorithmic Game Theory, Computational Social Choice, Resource Allocation",
          },
      ];

      const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };
    
    return (
        <div className="research" id = "research">
            <h1>Research</h1>
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
                            </div>
                        </div>
                        <div className="right">
                            <ul>
                                <li>{d.b5}</li>
                                <li>{d.b1}</li>
                                <li>{d.b2}</li>
                                <li>{d.b3}</li>
                                <li>{d.b4}</li>
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