import React from 'react';
import "./DoctorCard.css";
import {FaCalendarCheck, FaCheckSquare,  FaThumbsUp} from "react-icons/fa"

const DoctorCard = ({name,specailist,exp,location,clinic,fee,rate,stories,imageSrc}) => {
  return (<>
     
    <div className="d-card">
    <div style={{position: "absolute",
  top: "113px",

  left: "137px",
  color:"purple",
  fontSize: "30px"}}><FaCheckSquare /></div> 
      <div className='d-card-image'>
    
    <img src={imageSrc} alt={name} className="card-image" />
  
    </div>
   
    <div className="d-card-content">

      <h2 className="d-card-name">{name}</h2>
      <p  className="d-card-title">{specailist}</p>
      <p className="d-card-description">{exp}</p>
      <p className='d-location'>{location}  <li >{clinic}</li>  </p> 
      <p>{fee}</p>
      <div className='d-card-content-footer'>
        <button className='btn'> <FaThumbsUp/> {rate}</button>
        <span className='story'>{stories}</span>
       </div>
    </div>
    <div className='d-card-side'>
      <div className='available'>
       <FaCalendarCheck/>
       <p>Availabe today</p>
       </div>
       <button className='bookbtn'>
          Book Appointment
          <small style={{width:"100px"}}> No Booking fee</small>
    
        
       </button>
    </div>
  </div>

  </> );
};

export default DoctorCard;
