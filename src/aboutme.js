import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
function Aboutme(props) {
    return (
       <div className='aboutme'>
           <Link to='/' className="nav-home">{'< '}Home</Link>
           <div className='bio'>
               <h2>endri seferi</h2>
               <div className='endri'> 
                    <img src='../me.jpg'/>
                   <p>A hardworking student and a really commited programmer from Albania who loves coding,sports and art.I was born in Tirana and since i was little i developed interest in the coding world so I've been studying ever since I was 12.I've been playing basketball for two years in my high school and practiced in art by drawing and painting.My strongest properties are commited,funny and energized.</p>
               </div>
            </div>
       </div>
    )
}
export default Aboutme;