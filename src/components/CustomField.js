import Link from "next/link";

Link

const CustomField = ({customData}) => {



  const myStyle={
    backgroundImage:`url(${customData.frontimg.sourceUrl})`
            };
    

    return (


        <div className="main-contain">
        <div className="np-about-section">



            <div className="wrap-image">

          <img src={customData.backimg.sourceUrl} alt="frontimg"/>
          </div>


          <div className="wrap-title">

         
         <h1 className="section-title">{customData.frontimage}</h1>
         <p>{customData.fri}</p>


                <div className="wrap-call">
                  <div className="Tk">
                   <Link href="/tjanster">Läs mer</Link>
                   </div>
                   <div className="Kt">
                   <Link href="/kontakt">Boka möte</Link>
                   </div>
                </div>

         </div>

         </div>




         <div className="sec-sections" style={myStyle} >
         <div className="sec-contain">
          <div className="wrap-title-sec">


         <h2 className="tile-sec">{customData.texttwo}</h2>
         <p className="p-sec">{customData.texttwosec}</p>

         <div className="wrap-image-sec">

          <div className="img-one">
          <img src={customData.imgsec.sourceUrl} alt="frontimg"/>
          </div>
          <div className="img-two">
          <img src={customData.imgtre.sourceUrl} alt="frontimg"/>
          </div>
          </div>

            </div>


         </div>

</div>





<div className="tre-sections">

<div className="tre-contain">

<div className="wrap-title-tre">


<h2 className="tile-sec">{customData.texttre}</h2>
         <p className="p-sec">{customData. texttwotre}</p>

</div>



   <div className="wrap-image-tree">

 <img src={customData.imgfour.sourceUrl} alt="frontimg"/>
 </div>

 <div className="p-tre-wrap">

 <p className="p-sec">{customData.textfour}</p>
 </div>



</div>
</div>



        </div>
    );
};

export default CustomField;