import { useContext } from "react";
import { AppContext } from "./Layout";
import Link from 'next/link'
import Navigation from "./navigation";



const Header = () => {

    const appCommonData = useContext(AppContext)
    const headerMenus = appCommonData.data.headerMenus.edges

    return (
    
   <div className="header-container">

    <div className="header-nav">

        <span className="logo-header">

           
           <Link href="/">Urbans.</Link>

        </span>

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

     <Navigation />

   </div>


     <div className="right-nav">
     <span>Tel: +46 70-000 00 00</span>
        
        <Link href="/kontakt">Kontakt</Link>
        
     </div>


   </div>
    
    
    );


    
    
    };
    
    export default Header;