import React from 'react'
import {AiFillGithub} from "react-icons/ai"
import {MdEmojiObjects} from "react-icons/md"
import {MdOutlineFiberNew} from "react-icons/md"

export default function Project(props){
    return (
        <div className='project'>
            {props.new ? <MdOutlineFiberNew className='new'/> : <></>}
            <div className='img-container'>
                <img src={props.img} alt="project-image" />
            </div>
            <h3 className='title'>{props.title}{props.inProgress ? <h3 className='inProgress'> - IN PROGRESS</h3> : <></>}</h3>
            <p>{props.desc}</p>
            <div className='tech'>
                {props.tech.map((Val, i) => {
                    return <Val key={i} className="element icon trans"/>
                })}
            </div>
            <div className='buttons'>
                <a className='btn trans' href={props.project} target="_blank"><AiFillGithub/>Github</a>
                {props.demo!="Token" ? <a className='btn trans' href={props.demo} target="_blank"><MdEmojiObjects/>Live Demo</a> : <></>}
            </div>
        </div>
    )
}