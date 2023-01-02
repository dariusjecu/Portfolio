import React from 'react'
import {AiFillGithub} from "react-icons/ai"
import {MdEmojiObjects} from "react-icons/md"

export default function Project(props){
    return (
        <div className='project'>
            <div className='img-container'>
                <img src={props.img} alt="project-image" />
            </div>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <div className='buttons'>
                <a className='btn trans' href={props.project} target="_blank"><AiFillGithub/>Github</a>
                {props.demo!="Token" ? <a className='btn trans' href={props.demo} target="_blank"><MdEmojiObjects/>Live Demo</a> : <></>}
            </div>
        </div>
    )
}