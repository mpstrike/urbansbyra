import { useContext } from "react";
import { AppContext } from "./Layout";
import Link from 'next/link'
import CookieBar from "./cookiebar";



const Footer = () => {

    const appCommonData = useContext(AppContext)
    const headerMenus = appCommonData.data.FooterMenus.edges

    return (

        
    
   <div className="footer-container">

    <div className="footer-wrap">

    <div className="left-footer">
        <p>Mail: marcusurbanpersson@gmail.com</p>
    </div>

     <ul>
        {
            headerMenus.map((menuItem) =>  {
               return (
                <li key={menuItem.node.id}>
                    
                    <Link href={menuItem.node.path}>
                        <a>{menuItem.node.label}</a>
                    </Link>

                   </li>
               )

            })
        }
     </ul>

     

     <CookieBar/>

     


     </div>
     <div className="under-footer">
    <span>Marcus Urban Persson 2022</span>
   </div>

  

   

   </div>



  
    
    );


 
    


    
    
    };
    
    export default Footer;