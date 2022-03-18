import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'


export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            sent: false,
            text: ``
          }
    }
    handleSubmit(e) {
      e.preventDefault();
    
      axios({
        method: "POST",
        url:"http://localhost:3002/send",
        data:  this.state
      }).then((response)=>{
        if (response.data.status === 'success') {
          this.setState({sent: true,
                  text: `Message Sent Successfully`});
          // console.log("Message Sent.");
          this.resetForm();
        } else if(response.data.status === 'fail') {
          this.setState({text: `Message failed to Send!`}
                    );
          //console.log("Message failed to send.")
          this.resetForm();
        }
      })
    }
    resetForm(){
        this.setState({name: '', email: '', subject: '', message: ''})
        setTimeout(()=>{
          this.setState({
            sent: false,
            text: ''
          })
        },8000);
       clearTimeout();
      }
    render() {
        return (
            <div className="contact">
               <div className="contact_wrapper">
                {/* <div className="contact_form">
                    <span className="contact_title">Leave a Message!</span>
                    <form method="POST" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="contact_form_name_email">
                             <input 
                                value={this.state.name}
                                onChange={this.onNameChange.bind(this)} 
                                name="name" 
                                type="text" 
                                id="contact_name" 
                                placeholder="Your name :"
                              /> 
                             <input 
                                value={this.state.email} 
                                onChange={this.onEmailChange.bind(this)} 
                                name="email" 
                                type="email" 
                                id="contact_email" 
                                placeholder="Email :"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="contact_form_subject">
                             <input 
                                value={this.state.subject} 
                                onChange={this.onSubjectChange.bind(this)}
                                name="subject" 
                                type="text" 
                                id="contact_subject" 
                                placeholder="Subject :"
                             />    
                        </div> 
                        <div className="contact_form_message">
                            <textarea 
                              value={this.state.message} 
                              onChange={this.onMessageChange.bind(this)} 
                              name="message" 
                              type="text" 
                              id="contact_message" 
                              placeholder="Your message :" 
                              rows="5"
                            /> 
                        </div>
                        <button class="btn" type="submit">Send Message</button>
                        <div className="message">
                         <span style={{color: this.state.sent ? "green" : "red"}}>{this.state.text}</span>
                        </div>
                    </form>
                </div> */}
                <div className="contact_info">
                   <div className="contact_text">
                       <span className="contact_title">Contact Info</span>
                           <p>Feel free to contact me for career prospects, business services,
                and other professional inquiries!</p>
                   </div>
                    <div className="contact_list">
                        <ul>
                            <li>
                                <div className="contact_list_item">
                                    <div className="contact_list_item_left">
                                         <FontAwesomeIcon  className="contact_icon" icon={faMapMarkerAlt} />
                                    </div>
                                    <div className="contact_list_item_right">
                                         <span className="right_item_text_1">
                                              Location
                                         </span>
                                         <span className="right_item_text_2">
                                                Dhaka, Bangladesh
                                         </span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="contact_list_item">
                                    <div className="contact_list_item_left">
                                         <FontAwesomeIcon  className="contact_icon" icon={faEnvelope} />
                                    </div>
                                    <div className="contact_list_item_right">
                                         <span className="right_item_text_1">
                                              Email Me At
                                         </span>
                                         <span className="right_item_text_2">
                                                <a  href="mailto:afsana2013nipa@gmail.com" >afsana2013nipa@gamil.com</a>
                                         </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
               </div>
            </div>
        )
    }
      onNameChange(event) {
        this.setState({name: event.target.value})
      }
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
      onSubjectChange(event) {
        this.setState({subject: event.target.value})
      }
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
}
