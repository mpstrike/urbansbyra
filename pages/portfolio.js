import Layout from "../src/components/Layout";
import getAppCommonData from "../src/inc/data/appCommonData";
import getHomeCommonData from "../src/inc/data/homepageData";
import PortField from "../src/components/portfield";
import Head from "next/head";

const portfolio = ({appCommonData, homepageData}) => {


  const PcustomData = homepageData.data.portpage.portpages; 

  const titleData = homepageData.data.portpage.seo; 


    return (

<>
      <Head>
          
      <title>{titleData.title}</title>
   



      </Head>
    
     <Layout appCommonData = {appCommonData}>
         <PortField PcustomData={PcustomData} />
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


    
    export default portfolio;