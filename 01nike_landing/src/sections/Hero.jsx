import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import  {statistics, shoes} from "../constants";

const Hero = () => {

  const [bigShoeImg, setBigShoeImg]= useState(bigShoe1)
  return (
    <section
      id="Home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-scree gap-10 max-container p-2"
    >
      <div className="xl:w-2/5 relative flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
        <p className="font-montserrat text-xl text-coral-red">Our Summer Collection</p>
        <h1 className="font-bold mt-10 font-palanquin max-sm:text-[72px] text-8xl max-sm:leading-[82]"> <span className=" xl:whitespace-nowrap z-20 pr-10 relative">The New Arrival</span> <br/> <span className="text-coral-red inline-block mt-3">Nike </span> 
         Shoes</h1>

        <p className="font-montserrat text-lg leading-8 text-slate-gray sm:max-w-sm my-4">Discover Stylish Nike arrivals, quality <br /> comfort, and innovation for active life</p>

        <Button label='Shop Now' iconURL={arrowRight}/>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat)=> (<div key={stat.label}>
            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
            <p className="leading-7 font-montserrat">{stat.label}</p>
            </div>))}
        </div>
      
      
      </div>


      <div className="-mt-6 relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center z-0">
        <img src={bigShoeImg} alt="show collection" height={500} width={610} className="obeect-contain relative z-0 pt-20 -mt-20" />


            <div className=" ml-10 flex sm:gap-6 absolute -bottom-[4%] sm:left-[10%] max-sm:px-6" >
              {shoes.map((shoe)=>(
                <div key={shoe}>
                  <ShoeCard imgURL={shoe} changeBigShowImage={(shoe)=>{ 
                    setBigShoeImg(shoe)
                  }}  bigShoeImg={bigShoeImg}/>
                </div>
              ))}
            </div>


      </div>

      
    </section>
  );
};

export default Hero;
