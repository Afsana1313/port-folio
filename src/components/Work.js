import React, { Component } from 'react'

export default class Work extends Component {
    render() {
        return (
            <div className="work">
              
               <div className="work_wrapper">
               <span className="work_title">My Work</span> 
                 <div className="work_wrapper_inner">
                 <div className="demo_item" >
                    <div className="demo_box"  style={{backgroundColor:"#ffb3ba"}}>
                       <a href="number_game/index.html" target="_blank"><i className="fas fa-gamepad work_icon"></i></a>
                    </div>
                    <div className="demo_box none_mobile">
                       
                    </div>    
                  </div> 
                  <div className="demo_item">
                     <div className="demo_box none_mobile">
                       
                       </div>
                       <div className="demo_box" style={{backgroundColor:"#bae1ff"}}>
                       <a href="ali_baba/index.html" target="_blank"> <i className="fas fa-utensils work_icon"></i></a>
                       </div>     
                  </div> 
                  <div className="demo_item">
                     <div className="demo_box" style={{backgroundColor:"#ffdfba"}}>
                         <span className="work_icon" style={{fontSize: 30}} >Comming Soon</span>
                       </div>
                       <div className="demo_box none_mobile">
                          
                       </div>     
                  </div> 
                  </div> 
               </div>                
            </div>
        )
    }
}
