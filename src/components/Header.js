import React from 'react'
import '../style/Header.scss'
import '../style/index.css'
import { Link} from "react-router-dom";



function Header() {
    return (
        <header className="header container-fixed">
          <div className="container">
            
          <ul>
            <li>
             <Link to="/"> <h1>Where in the world ?</h1></Link>
            </li>

            <li>
              <span>  Dark Mode</span>
            </li>
          </ul>
     
          </div>
    </header>
    )
}

export default Header
