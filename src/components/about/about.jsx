import React from 'react'
import "./about.scss"

export default function about() {
    return (
        <div className="about" id="about">
            <div className="title">
                <h1>About me</h1>
            </div>
            
            <div className="container">
                <div className="card">
                    <div className="top">
                        <img src = "assets/upenn.png" alt=""/>


                    </div>
                    <div className = "center">
                        <h3>Education</h3>
                    </div>
                    <div className = "bottom">
                    <ul>
                            <li><b>University of Pennsylvania</b></li>
                            <li>Wharton School: BS in Economics, Concentration in Finance</li>
                            <li>School of Engineering and Applied Science: BSE in Networked and Social Systems Engineering</li>
                            <li>GPA: 3.94/4.00</li>
                            <li>Relevant coursework: Financial Derivatives, Fixed Income Securities, Venture Capital and Entrepreneurial Mangaement,
                                Linear Algebra, Scalable and Cloud Computing, Probability, Data Structures and Algorithms 
                            </li>
                            <li>Clubs: Quantitative and Global Macroeconomics Investment Team, Penn Blockchain Trading Committee</li>
                        </ul>

                    </div>
                </div>
                <div className="card feature">
                    <div className="top">
                        <img src = "assets/headshot-modified.png" alt=""/>


                    </div>
                    <div className = "center">
                        <h3>The Basics</h3>
                    </div>
                    <div className = "bottom">
                        My name is William Fan and I'm a student studying Finance and Networked and Social Systems Engineering between the Wharton School and
                        the School of Engineering and Applied Science at the University of Pennsylvania.
                        Broadly, my primary interests are in finance, statistics, computer science, and their unique intersection. Outside of my academics,
                        I enjoy playing the piano and am currently learning the electric guitar. In high school, I was also nationally ranked in cross country
                        and track and while I'm no longer an active runner, I do still enjoy the occassional hobby jog. In my free time, I like to play pool
                        and while I'm not that good, I like to think I'm improving.

                    </div>
                </div>
                <div className="card">
                    <div className="top">
                        <img src = "assets/award.png" alt=""/>


                    </div>
                    <div className = "center">
                        <h3>Selected Awards</h3>
                    </div>
                    <div className = "bottom">
                        <ul>
                            <li>Published in International Joint Conferences on Artificial Intelligence (IJCAI-PRICAI 2020: 5.47 IF, 12.6% acceptance rate)</li>
                            <li>AIME Qualifier with Distinction</li>
                            <li>International Mathematical Modeling Challenge Qualifier</li>
                            <li>Modeling the Future Challenge National Semifinalist</li>
                            <li>National Merit Scholarship Finalist and Presidential Scholar Semifinalist</li>
                            <li>Footlocker Cross Country Nationals All-South Team and South Regional Bronze Medalist (out of 16 states/US territories)</li>
                            <li>North Carolina All-State Violin</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}
