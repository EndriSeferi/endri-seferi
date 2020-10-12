import React,{useState} from 'react';
import {Link} from 'react-router-dom'

export default function Home(props) {
  var [text,setText]=useState(<Link to='/aboutme' className='about'>about me</Link>)

    return (
        <div className="Portfolio">
        <div className="information">
        <h1>endri seferi</h1>
        <h3>{'<'}computer engineer student{'/>'}</h3>
        </div>
        <div className="links">
          <a href="https://www.instagram.com/astroendri/"><i class="fa fa-instagram" onMouseOver={()=>{
            setText('Instagram')
          }} onMouseLeave={()=>{
            setText(<Link to='./aboutme' className='about'>about me</Link>)
          }}></i></a>
          <a href="https://www.linkedin.com/in/endri-seferi-7b0401134/"><i class="fa fa-linkedin" onMouseOver={()=>{
            setText('LinkedIn')
          }} onMouseLeave={()=>{
            setText(<Link to='./aboutme' className='about'>about me</Link>)
          }}></i></a>
          <a href="https://github.com/EndriSeferi"><i class="fa fa-github-square" onMouseOver={()=>{
            setText('Github')
          }} onMouseLeave={()=>{
            setText(<Link to='./aboutme' className='about'>about me</Link>)
          }}></i></a>
          <a href="resume"><i class="fa fa-file pdf" onMouseOver={()=>{
            setText('Resume')
          }} onMouseLeave={()=>{
            setText(<Link to='./aboutme' className='about'>about me</Link>)
          }}></i></a>
          <a href="projects"><i class="fa fa-th" onMouseOver={()=>{
            setText('Projects')
          }} onMouseLeave={()=>{
            setText(<Link to='./aboutme' className='about'>about me</Link>)
          }}></i></a>
        </div>
        <span className="changing-text">{text}</span>
       </div>
    )
}
