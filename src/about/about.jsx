import React, {useState} from 'react'
import "./about.css"
import Me from "../assets/me_about.png"

export default function About(){

    const [show, setShow] = useState(false)

    function Show(){
        if(show)
        {
            setShow(false)
            document.getElementById("me").classList = "me"
        }
        else{
            setShow(true)
            document.getElementById("me").classList = "me-show"
        }
    }

    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2 className='trans'>About Me</h2>
            <div id='me' className='me'>
                <div className='image-back trans'>
                    <img src={Me} alt="me-about" />
                </div>
                <div>
                    {show ?
                    <div className='show-anim'>
                        <p>I love exploring, learning and creating.</p>
                        <p>I am a lifelong learner, starting at a young age with a passion for dance and continuing with my current two passion: programming and playing guitar.</p>
                        <p>Starting from high school, I had a great curiosity about everything related to technology. Being an passionate gamer at that age, 
                            I was even more curious to learn about programming and how a few lines of code, 
                            numbers and symbols can create a new world in which I was immersed as a teenager.</p> 
                        <p>Gradually, I realized all the power and satisfaction that I have by being able to create a project 
                            or solve a problem that I could only think about before. Everything became more interesting when I arrived at the college and started a web design course that captivated me totally.</p>
                        <p>Unfortunately, it was only an optional course that I took and I didn't give it that much importance at that time because I had other projects on my back. 
                            In the end, after finishing college, I realized that everything I learned was very beneficial to me, but I wouldn't have seen myself doing that every day. </p>
                        <p>So, in the last months, starting with July 2022 until now, I started my frontend developer journey and resumed what I started and liked the most in college.</p>
                        <button className='show' onClick={Show}>{show ? "Show less" : "Show more"}</button>
                    </div> :
                    <div className='dis-anim'>
                        <p>I love exploring, learning and creating.</p>
                        <p>I am a lifelong learner, starting at a young age with a passion for dance and continuing with my current two passion: programming and playing guitar.</p>
                        <button className='show' onClick={Show}>{show ? "Show less" : "Show more"}</button>
                    </div>
                    }
                    <a href="#contact" className='btn trans'>Let's talk</a>
                </div>
            </div>
        </section>
    )
}