import React, { useState, useEffect } from 'react';
import DoctorCard from '../DoctorCard'
const Gynoclogist = () => {
   const [doctors, setDoctors] = useState([]);
   useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/doctors'); // mongodb get method URL
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          setDoctors(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
 
  return (
   <>
    
   { doctors.map((d)=>{
      if(d.specailist==="Gynocologist"){
    return(<>
       <DoctorCard  
        key={d.id}
        name={d.name}
        imageSrc={d.imageSrc}
        specailist={d.specailist}
        exp={d.exp}
        location={d.location}
        clinic={d.clinic}
        fee={d.fee}
        rate={d.rate}
        stories={d.stories}
       />
      </> 
         )}})}

   </>
  )
}

export default Gynoclogist