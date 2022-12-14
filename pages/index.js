import CustomField from "../src/components/CustomField";
import Layout from "../src/components/Layout";
import getAppCommonData from "../src/inc/data/appCommonData";
import getHomeCommonData from "../src/inc/data/homepageData";
import Head from "next/head";


const Home = ({appCommonData, homepageData}) => {

  const customData = homepageData.data.homepage.frontImage; 

//console.log(headerMenu.data.headerMenus.edges);

const titleData = homepageData.data.homepage.seo; 

  return (

<>
    <Head>
          
    <title>{titleData.title}</title>
  <meta name="description" content="Generated by create next app..." />
  <link rel="icon" href="/u.png" />



    </Head>


  
      <Layout appCommonData = {appCommonData}>

         
         <CustomField customData={customData} />

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


  
  export default Home;