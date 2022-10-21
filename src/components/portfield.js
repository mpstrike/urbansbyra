import Link from "next/link";


const PortField = ({PcustomData}) => {

{ /*
    const myStyleP={
        backgroundImage:`url(${PcustomData.portimgsec.sourceUrl})`
                };
 

                const myStylePtwo={
                    backgroundImage:`url(${PcustomData. portimgtwo.sourceUrl})`
                            };

                        */ }
    

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
       

<div className="tre-sections-p">

<div className="tre-contain">

<div className="wrap-title-tre">


<h2 className="tile-sec">{PcustomData.porttiltesec}</h2>
         <p className="p-sec">{PcustomData.porttexttre}</p>

</div>



   <div className="wrap-image-tree-p">

 <img src={PcustomData.portimg.sourceUrl} alt="frontimg"/>
 </div>

 <div className="p-tre-wrap">

 <p className="p-sec">{PcustomData.porttitletwo}</p>
 </div>



</div>
</div>





<div className="tre-sections-p">

<div className="tre-contain">

<div className="wrap-title-tre">


<h2 className="tile-sec">{PcustomData.porttexttwo}</h2>
         <p className="p-sec">{PcustomData.portundertre}</p>

</div>



   <div className="wrap-image-tree-p">

 <img src={PcustomData.portimgsec.sourceUrl} alt="frontimg"/>
 </div>

 <div className="p-tre-wrap">

 <p className="p-sec">{PcustomData.portunderfour}</p>
 </div>



</div>
</div>

</div>

        </div>
    );
};

export default PortField;