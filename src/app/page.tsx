import Image from "next/image";
import Link from "next/link";
import { IoBag } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

export default function Home() {
  return (
    <>
      <div className="bg-black w-[100%] h-[100vh]">
        <div className="w-full bg-black text-white">
          <h1 className="pt-6 text-center text-[23px] text-[#FF9F0D]">
            Food<span className="text-white">truck</span>
          </h1>
        </div>

        <div className="w-[90%] h-[41px] mt-2 flex items-center justify-evenly bg-black">
          <div className="flex justify-center items-center gap-[32px] text-white">
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>Menu</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Pages</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Shop</Link>
            <Link href={"#"}>Contact</Link>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="h-[48px] border-2 border-[#FF9F0D] bg-black  rounded-3xl w-[300px] px-7"
              type="text"
              name="text"
              id="text"
              placeholder="Seacrh..."
            />
            <div className="text-[20px] text-white"><IoBag  /></div>
          </div>
        </div>

        <div className="w-[100%] flex">
          <div className="w-[50%] h-[100%]">
            <Image className="mt-[110px] pl-[120px]" src={"/myimage/quick.png"} alt="" width={400} height={400} />
            <h1 className="w-[90%] h-[full] text-white text-[60px] mt-3 font-bold pl-[120px]"><span className="text-[#FF9F0D]">Th</span>e Art of Speed food Quality</h1>
            <p className="w-[80%] h-[full] pl-[120px] text-white mt-2 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam vero delectus voluptates autem add.</p>
            <button className="w-[200px] ml-[120px] h-[50px] rounded-full text-white mt-3 bg-[#FF9F0D] font-bold ">See Menu</button>
          </div>
          <div className="w-[50%] h-[90%]">
            <Image className="ml-[20px] mt-[25px]" src={"/myimage/food.png"} alt="Food Image" width={600} height={600} />

          </div>
        </div>

        <div className="w-[100%] h-[100vh] bg-black flex ">
          <div className="w-[50%] h-full">
            <Image className="mt-[40px] ml-[120px] " src={"/myimage/aboutus.png"} alt="About us" width={100} height={100} />
            <h1 className="text-[55px] font-bold text-white ml-[120px]"><span className="text-[#FF9F0D]">We</span> Create the best foody product</h1>
            <p className="w-[73%] ml-[120px] text-white mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <h3 className="flex items-center mt-2 text-white text-[15px]"><div className="ml-[120px] text-[22px] text-white"><TiTick  /></div>Lacus nisi, et ac dapibus sit eu velit in consequat.</h3>

            <h3 className="flex items-center mt-2 text-white text-[15px]"><div className="ml-[120px] text-[22px] text-white"><TiTick  /></div>Quisque diam pellentesque bibendum non dui volutpat fringilla </h3>

            <h3 className="flex items-center mt-2 text-white text-[15px]"><div className="ml-[120px] text-[22px] text-white"><TiTick  /></div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
            <button className="w-[200px] ml-[120px] h-[50px] rounded-full text-white mt-4 bg-[#FF9F0D] font-bold ">Read More</button>
          </div>

          <div className="w-[50%] h-full   mt-[50px] ">
            <div>
              <Image className="m-auto" src={"/myimage/unsplash.png"} alt="" width={700} height={400} />
            </div>
              <div className="flex items-center justify-evenly mt-4">
                <Image className="" src={"/myimage/kabab.png"} alt="" width={330} height={400} />
                <Image className="" src={"/myimage/burger.png"} alt="" width={330} height={400} />
              </div>
          </div>
        </div>

        <div className="w-[100%] h-[70vh] bg-black ">
          <Image className="m-auto pt-6" src={"/myimage/foodcategory.png"} alt="" width={200} height={200} />
          <h1 className="text-white text-center text-[40px]"><span className="text-[#FF9F0D]">Ch</span>oose Food Iteams</h1>
          <div className="flex justify-evenly mt-6">     
          <div><Image src={"/myimage/icecreame.png"} alt="" width={200} height={200} /></div>
            <div><Image src={"/myimage/beefburger.png"} alt="" width={200} height={200} /></div>
            <div><Image src={"/myimage/saled.png"} alt="" width={200} height={200} /></div>
            <div><Image src={"/myimage/cake.png"} alt="" width={200} height={200} /></div>
          </div>
        </div>

        <div className="w-[full] h-[90vh] bg-black">
        <div><Image className="w-[70%] ml-[120px] h-[70%]" src={"/myimage/fullimage.png"} alt="" width={400} height={400} /></div>
        </div>

        <div className="w-[full] h-[40vh] bg-black flex justify-between ">
        <div><Image className=" mx-[120px]" src={"/myimage/Chef.png"} alt="" width={180} height={180} /></div>
        <div><Image src={"/myimage/Iteam.png"} alt="" width={135} height={135} /></div>
        <div><Image src={"/myimage/spoon.png"} alt="" width={210} height={210} /></div>
        <div><Image className=" mr-[120px]" src={"/myimage/pizza.png"} alt="" width={180} height={180} /></div>
        </div>

        <div className="w-[100%] h-[70vh] bg-black">
        <div><Image className=" m-auto" src={"/myimage/Chefs.png"} alt="" width={50} height={50} /></div>
        <h1 className="text-white text-[30px] text-center"><span className="text-[#FF9F0D]">Me</span>et Our Chef</h1>
        <div className="flex justify-evenly mt-6">     
          <div><Image src={"/myimage/estwood.png"} alt="" width={200} height={200} /></div>
            <div><Image src={"/myimage/Rectangle.png"} alt="" width={200} height={200} /></div>
            <div><Image src={"/myimage/william.png"} alt="" width={200} height={200} /></div>
            <div><Image src={"/myimage/readroad.png"} alt="" width={200} height={200} /></div>
          </div>
          <div className="flex items-center justify-center mt-3">
          <button className="w-[200px] h-[50px] bg-black border-2 border-[#FF9F0D] rounded-full  text-white mt-4 font-bold ">See More</button>
          </div>  
        </div>

        <div className="w-[100%] h-[30vh] bg-black pt-6">
          <Image className="ml-[110px]" src={"/myimage/Testimonials.png"} alt="" width={100} height={100} />
          <h1 className="text-white text-[30px] ml-[110px] mt-1">What our client are saying</h1>
        </div>

        <div className="w-[100%] h-[50vh] bg-black">
          <Image className="w-[100%] m-auto h-[50vh]" src={"/myimage/Footer.png"} alt="" width={1000} height={400} />
        </div>



        




      </div>
    </>
  );
}


