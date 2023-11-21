import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <ul>
         <li>  <Link to="/">Home</Link>   </li>
         <li>  <Link to="/dental">Dentist</Link>  </li>
         <li>  <Link to="/gynco">Gynoclogilst</Link>   </li>
         <li>  <Link to="/nutro">Nutro</Link>   </li>
         </ul>
         
  )
}

export default Header