import Layout from "../src/components/Layout";
import getAppCommonData from "../src/inc/data/appCommonData";
import getHomeCommonData from "../src/inc/data/homePageData";
import AboutField from "../src/components/AboutField";
import Head from "next/head";

const contact = ({appCommonData, homepageData}) => {


  const AcustomData = homepageData.data.contactpage.aboutpages; 

  const titleData = homepageData.data.contactpage.seo; 


    return (


<>
      <Head>
          
      <title>{titleData.title}</title>
 



      </Head>

    
     <Layout appCommonData = {appCommonData}>
         <AboutField AcustomData={AcustomData} />
     </Layout>
    
     </>   
    
    
    );
    
    
    };



    export async function getStaticProps() {
        return {
          props: {
            appCommonData: await getAppCommonData(),
            homepageData: await getHomeCommonData()
          }
        }
      }


    
    export default contact;