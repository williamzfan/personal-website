import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import "./intro.scss"
import {KeyboardArrowDown} from "@material-ui/icons"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backSpeed: 60,
        backDelay: 2000,
        strings: ["Hello there!", "I'm William"]
      });
    }, []);


    return (
        <div className="intro" id = "intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/headshot-modified.png" alt=""></img>
                </div>

            </div>
            <div className="right">
                <div className="wrapper">
                    <h2><span ref={textRef}></span></h2>
                </div>
                
            </div>
        </div>
    )
}
