import React, { Component } from 'react'
import '../App.css';
import {
    Link
  } from "react-router-dom";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faBars } from '@fortawesome/free-solid-svg-icons';
export default class Header extends Component {
    
    constructor(props){
        super(props);
        this.state = {click: false};
        this.handleClick = this.handleClick.bind(this);
     }
     handleClick(){
         this.setState(prevState => ({
             click: !prevState.click
           }));
     }
    render() {
        return (
            <div className="header">                      
                <div className="header-wrapper">
                    <div className="logo"><span>Afsana</span></div>
                
                    <div className="menu" onClick={this.handleClick}>
                        <FontAwesomeIcon  className="icon" icon={faBars} />
                       <div className="modal" style={{transform: this.state.click ?  "translateX(0)" : "translateX(-100%)"}}>
                            <div className="modal-wrapper">
                                <nav>
                                <ul>   
                                    <li>
                                        <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                        <Link to="/work">My Work</Link>
                                        </li>
                                        <li>
                                        <Link to="/contact">Contact</Link>
                                        </li>
                                        {/* <li>
                                        <Link to="/intro">Who am I?</Link>
                                        </li> */}
                                </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
