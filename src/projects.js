import React, { Component } from "react";
import Carousel from 'react-elastic-carousel'
import Card from './Card'
import {Link} from 'react-router-dom'

export default class Projects extends Component {
  render() {
    const breakPoints=[
        {width: 1,itemsToShow:1},
        {width: 500,itemsToShow:2},
        {width: 768,itemsToShow:3},
        {width: 1200,itemsToShow:4}
    ]
    return (
      <div className='slider'>
           <Link to='/' className="nav-home">{'< '}Home</Link>
          <h2>my projects</h2>
          <Carousel  breakPoints={breakPoints}>
              <Card name="instabot" image='../instabot_final.jpg' info='A python bot that automaticly follows people and accepts follow requests.' code='https://github.com/EndriSeferi/IG_Bot'/>
              <Card name="ping-pong" image='../pp.jpg' info='My version of the old ping pong board game.' code='https://github.com/EndriSeferi/PingPong_Game'/>
              <Card name="snake game" image='../snake_game.png' info='My version of the old snake game' code='#'/>
              <Card name="sealloc" image='../locate.jpg' info='An app to see the locations of the seals in Albania.The app also allows you to enter a location where you might have seen a seal.' code='#'/>
          </Carousel>
      </div>
    );
  }
}