import { gql } from '@apollo/client';
import { client } from '../ApolloClientConfig';



const getHomeCommonData = async () => {
const HomeCommonData = await client.query({
query: gql` query homepageQuery {
    homepage: pageBy(uri: "https://urbanswebb.se/") {
      frontImage {
        frontimage
        frontimg {
          sourceUrl
        }
        frontimgt {
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





    aboutpage: pageBy(uri: "https://urbanswebb.se/about") {
     
      aboutpages {
        titleabout
        titleasec
        abouttextsec
        textarea
      }
      seo {
        title
      }
    }
  

    portpage: pageBy(uri: "https://urbanswebb.se/portfolio") {
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
  

    tjanstpage: pageBy(uri: "https://urbanswebb.se/kunskaper") {
      aboutpages {
        titleabout
        titleasec
        abouttextsec
        textarea
      }
      seo {
        title
      }
    }

    contactpage: pageBy(uri: "https://urbanswebb.se/contact") {
      aboutpages {
        titleabout
        titleasec
        abouttextsec
        textarea
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