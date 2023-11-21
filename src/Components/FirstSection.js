import React from 'react'
 import Card from '../Card'
import "./FirstSection.css";
import { NavLink } from 'react-router-dom';
const FirstSection = () => {
  const clinic=[
    { 
      id:"1",
      title:"Dentist",
      imageSrc:"https://media.istockphoto.com/id/1349328691/photo/young-happy-woman-during-dental-procedure-at-dentists-office.jpg?s=612x612&w=0&k=20&c=H0WBvMhyspSX10Xq65AFhF4DoMLzg8wOpqjjupwTWDE=",
      description:"Teething troubles.Schedule a dental checkup",
      link:"/dental",
    },
    { 
      id:"2",
      title:"Gyncologist/Obstetrician",
     imageSrc:"https://thumbs.dreamstime.com/b/gynecologist-doctor-pregnant-woman-hospital-pregnancy-gynecology-medicine-health-care-people-concept-stethoscope-70948901.jpg",
     description:"Explore for women's helath, pregency and infertlity treatment.",
     link:"/gynco"
  },
  {
       title:"Dietition/Nutrirtion",
        imageSrc:"https://img.freepik.com/free-photo/medium-shot-doctor-showing-results-patient_23-2148302133.jpg?size=626&ext=jpg&ga=GA1.1.1068625234.1696835867&semt=ais",
        description:"Get Gudeinece on eating rightand weight management and sports nutrition.",
        link:"/nutro",
     
  }
]
  return (
    <section>
   <h1>Book Appointment in -Clinic Consulattion</h1>
   <p>Find Experinced Doctors Across SPecilaist</p>
       <div className="app">
          {
           clinic.map((data)=>{
             return (
              <NavLink  to={`${data.link}`}>
                  <Card  
                      key={data.id}
                      title={data.title}
                      imageSrc={data.imageSrc} 
                      description={data.description}
                  />
              </NavLink>
               ) })
           }
   </div>
  </section>
  )
}

export default FirstSection