import Image from "next/image";


const Brands: React.FC = () => {
  const logos = [
    { src: "/brands/urpay.png", alt: "Urpay",width:200,height:200 },
    { src: "/brands/mada.png", alt: "Mada",width:120,height:120 },
    { src: "/brands/geidea.png", alt: "Geidea",width:120,height:120 },
    { src: "/brands/alrajhi.png", alt: "Alrajhi",width:120,height:120 },
    { src: "/brands/stcpay.png", alt: "STC Pay",width:120,height:120 },
    { src: "/brands/zatca.png", alt: "Zatka",width:220,height:180 }
  ]

  return (
    <div className="relative wrapper lg:w-[80%]  ">
      <div className="marquee">
        <div className="marquee__group ">
         {[...logos].map((logo,index) => (
           <div key={index} className="marquee__item"> 
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.width}/>
           </div>
         ))}
        </div>
        <div className="marquee__group">
         {[...logos].map((logo,index) => (
           <div key={index} className="marquee__item"> 
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.width}/>
           </div>
         ))}
        </div>
        <div className="marquee__group">
         {[...logos].map((logo,index) => (
           <div key={index} className="marquee__item"> 
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.width}/>
           </div>
         ))}
        </div>        <div className="marquee__group">
         {[...logos].map((logo,index) => (
           <div key={index} className="marquee__item"> 
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.width}/>
           </div>
         ))}
        </div>        <div className="marquee__group">
         {[...logos].map((logo,index) => (
           <div key={index} className="marquee__item"> 
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.width}/>
           </div>
         ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;


