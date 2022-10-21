import Layout from "../src/components/Layout";
import getAppCommonData from "../src/inc/data/appCommonData";
import Head from "next/head";
import Link from "next/link";

const NotFound = ({appCommonData}) => {


  

 
  


    return (
    
      <>

          <Head>
          <title>Urbans. | 404</title>
        

          </Head>


     <Layout appCommonData = {appCommonData}>



       <div className="error-page">
        <p>Den här sidan finns inte. Det kan bero på många orsaker. </p>
        <Link href="/">Tillbaka till startsidan</Link>
        

        </div>

         
     </Layout>
     </>
        
    
    
    );
    
    
    };



    export async function getStaticProps() {
        return {
          props: {
            appCommonData: await getAppCommonData()
          }
        }
      }


    
    export default NotFound;