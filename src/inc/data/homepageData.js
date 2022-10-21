import { gql } from '@apollo/client';
import { client } from '../ApolloClientConfig';



const getHomeCommonData = async () => {
const HomeCommonData = await client.query({
query: gql` query homepageQuery {
    homepage: pageBy(uri: "http://localhost/") {
      frontImage {
        frontimage
        frontimg {
          sourceUrl
        }
        texttwo
        texttwosec
        imgsec {
          sourceUrl
        }
        imgtre {
          sourceUrl
        }
        imgfour {
          sourceUrl
        }
        backimg {
          sourceUrl
        }
        textfour
        texttre
        texttwotre
      }
      seo {
        title
      }
    }





    aboutpage: pageBy(uri: "http://localhost/urbanstema/about") {
     
      aboutpages {
        titleabout
        titleasec
        abouttextsec
        textarea
        aimgsec {
          sourceUrl
        }
        aimgone {
          sourceUrl
        }
      }
      seo {
        title
      }
    }
  

    portpage: pageBy(uri: "http://localhost/urbanstema/portfolio") {
      portpages {
        porttitle
        porttiltesec
        porttexttre
        porttitletwo
        porttexttwo
        portundertre
        portunderfour
          portimg {
          sourceUrl
        }
        portimgsec {
          sourceUrl
        }
      }
      seo {
        title
      }
       }
  

    tjanstpage: pageBy(uri: "http://localhost/urbanstema/tjanster") {
      aboutpages {
        titleabout
        titleasec
        abouttextsec
        textarea
        aimgsec {
          sourceUrl
        }
        aimgone {
          sourceUrl
        }
      }
      seo {
        title
      }
    }

    contactpage: pageBy(uri: "http://localhost/urbanstema/contact") {
      aboutpages {
        titleabout
        titleasec
        abouttextsec
        textarea
        aimgsec {
          sourceUrl
        }
        aimgone {
          sourceUrl
        }
      }
      seo {
        title
      }
    }
  
  





  }




   `

})

return HomeCommonData;

}

export default getHomeCommonData; 