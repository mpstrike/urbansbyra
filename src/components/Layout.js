import Head from 'next/head'
import { createContext } from 'react';
import Header from './Header';
import Footer from './Footer';



export const AppContext = createContext(); 

const Layout = (props) => {


return (

    <AppContext.Provider value={props.appCommonData}>
      

    <div>

       <Head>
       {/* <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
<link rel="icon" href="/favicon.ico" /> */}
<link rel="icon" href="/u.png" />
       </Head>

       <div className='container'>

          <Header/>
          {props.children}



          <Footer/>
       </div>

       
       
       


    </div>
    
    </AppContext.Provider>

);


};

export default Layout;