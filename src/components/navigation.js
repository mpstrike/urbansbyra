import Link from 'next/link'
import React, { useState } from 'react'


  

function Navigation(){


    const [showMenu, setShowMenu] = useState(false)

  


    return (
        <nav>
            
                <div className={!showMenu ? "toggle" :"nottoggle"}
                 
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <div className='span-wrap'>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                    
                     </div>
           

           <div className={showMenu ? "toggleOn active" :"toggleOn"}>
           

           <div className='toggleOn-wrap'>          
            
            <ul>

                <li>
                   <Link href="/kunskaper">Kunskaper</Link>
                </li>
                <li>
                <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                <Link href="/om-mig">Om mig</Link>
                </li>
                <li>
                <Link href="/kontakt">Kontakt</Link>
                </li>
       
           </ul>     
            
             </div>



           </div>



          
        </nav>
    )
}

export default Navigation