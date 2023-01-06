import Link from "next/link";


const PortField = ({PcustomData}) => {

 
    const myStyleP={
        backgroundImage:`url(${PcustomData.portimgsec.sourceUrl})`
                };
 

    const myStylePtwo={
        backgroundImage:`url(${PcustomData. portimg.sourceUrl})`
                };

   
    

    return (


        <div className="main-contain">



<div className="np-about-section-about">



<div className="wrap-image">

{/*<img src={PcustomData.portimg.sourceUrl} alt="frontimg"/>*/}
</div>


<div className="wrap-title">


<h1 className="section-title">{PcustomData.porttitle}</h1>

</div>

</div>



<div className="port-container">
       

<div className="tre-sections-p" style={myStylePtwo}>

<div className="tre-contain p" >


   

    

<div className="wrap-title-tre p">

<span className="nummberp">1.</span>
<h2 className="tile-sec p">{PcustomData.porttiltesec}</h2>
         <p className="p-sec p">{PcustomData.porttexttre}</p>
         <div className="wrap-links">
         <a href="#" className="tosite">Till hemsidan</a>
         </div>
</div>



 



 
 <div className="p-tre-wrap p">
    <div className="wrap-wrap">
 <span>E-handel</span>
<span>Unik design</span>
 <p className="p-sec p">{PcustomData.porttitletwo}</p>
 </div>
 </div>


 
</div>
</div>





<div className="tre-sections-p" style={myStyleP}>

<div className="tre-contain p">



<div className="wrap-title-tre p">

<span className="nummberp">2.</span>
<h2 className="tile-sec p">{PcustomData.porttexttwo}</h2>
         <p className="p-sec p">{PcustomData.portundertre}</p>

         <div className="wrap-links">
         <a href="#" className="tosite">Till hemsidan</a>
         <a href="#" className="tosite g">GitHub</a>
         </div>

</div>





 <div className="p-tre-wrap">
 <div className="wrap-wrap">
 <span>Next.js</span>
<span>Headless Wordpress</span>
 <p className="p-sec">{PcustomData.portunderfour}</p>
 </div>
 </div>



</div>
</div>

</div>

        </div>
    );
};

export default PortField;