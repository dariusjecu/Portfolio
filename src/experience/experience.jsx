import React from 'react'
import "./experience.css"
import Element from './experience-element'
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {SiJavascript} from "react-icons/si"
import {SiTailwindcss} from "react-icons/si"
import {DiReact} from "react-icons/di"
import {DiNodejsSmall} from "react-icons/di"
import {DiMysql} from "react-icons/di"
import {DiPython} from "react-icons/di"
import {FiFigma} from "react-icons/fi"
import {Dfinity, Motoko} from "./index.jsx"
import {SiTypescript} from "react-icons/si"

export default function Experience(){
    return (
        <section id='experience'>
            <h5>What Skills I have</h5>
            <h2 className='trans'>My Experience</h2>
            <div className='my-experience'>
                <Element image={AiFillHtml5} name={"HTML"}/>
                <Element image={DiCss3} name={"CSS"}/>
                <Element image={SiJavascript} name={"JavaScript"}/>
                <Element image={DiReact} name={"React"}/>
                <Element image={FiFigma} name={"Figma"}/>
                <Element image={DiNodejsSmall} name={"Node JS"}/>
                <Element image={SiTypescript} name={"Typescript"}/>
            </div>
        </section>
    )
}