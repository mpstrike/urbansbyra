const AboutField = ({AcustomData}) => {

    

    return (


        <div className="main-contain">
        <div className="np-about-section-about">



            <div className="wrap-image">

         {/* <img src={AcustomData.aimgsec.sourceUrl} alt="frontimg"/> */}
          </div>


          <div className="wrap-title">


         <h1 className="section-title">{AcustomData.titleabout}</h1>

         </div>

         </div>




             <div className="sec-sections">
         <div className="sec-contain-a">
          <div className="wrap-title-sec">

        <div className="wrap-info-a">
         <h2 className="tile-sec">{AcustomData.titleasec}</h2>
         
         </div>

         <div className="wrap-secinfo">
         <p className="p-sec">{AcustomData.abouttextsec}</p>
         <div className="p-sec-a" dangerouslySetInnerHTML={{__html: AcustomData.textarea }}/> <div/>
         </div>
            </div>

          


         </div>
         </div>






       




        </div>
    );
};

export default AboutField;