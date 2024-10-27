import Image from "next/image";
import freshone from "@/app/Public/freshone.jpg"
import frehtwo from "@/app/Public/freshtwo.jpg"
import freshthree from "@/app/Public/freshthree.jpg"
import freshfour from "@/app/Public/freshfour.jpg"
import freshfive from "@/app/Public/freshfive.jpg"
import freshsix from "@/app/Public/freshsix.jpg"
import Header from "../commonents/header";


export default function Home() {
  return (
  
    <div className="bg-gradient-to-r from-black to-red-200 min-h-screen text-white">
      
        <Header/>
    <div className="parentContainer">
      <div className="childContainer tilt-in-right-2" >
        <div className=" imagecontainerone">
         <Image src={freshone} alt="bghjk" />
        </div>
        <div className="merge">
        <h1 className="title">this is first block</h1>
        <p className="description">this is my blog site</p>
        <button className="readMore">Read More</button>
        </div>
      </div>

      <div className="childContainer  tilt-in-right-2">
        <div className=" imagecontainerone">
         <Image src={frehtwo} alt="bghjk" width={300} height={300}/>
        </div>
        <div className="merge">
        <h1 className="title">this is sec block</h1>
        <p className="description">this is my blog site</p>
        <button className="readMore">Read More</button>
        </div>
      </div>

      <div className="childContainer  tilt-in-right-2">
        <div className=" imagecontainerone">
         <Image src={freshthree} alt="bghjk" width={300} height={100}/>
        </div>
        <div className="merge">
        <h1 className="title">this is first block</h1>
        <p className="description">this is my blog site</p>
        <button className="readMore">Read More</button>
        </div>
      </div>

      <div className="childContainer tilt-in-right-2">
        <div className=" imagecontainerone">
         <Image src={freshfour} alt="bghjk" width={300} height={100}/>
        </div>
        <div className="merge">
        <h1 className="title">this is first block</h1>
        <p className="description">this is my blog site</p>
        <button className="readMore">Read More</button>
        </div>
      </div>

      <div className="childContainer  tilt-in-right-2">
        <div className=" imagecontainerone">
         <Image src={freshfive} alt="bghjk" width={300} height={100}/>
        </div>
        <div className="merge">
        <h1 className="title">this is first block</h1>
        <p className="description">this is my blog site</p>
        <button className="readMore">Read More</button>
        </div>
      </div>

      <div className="childContainer tilt-in-right-2">
        <div className=" imagecontainerone">
         <Image src={freshsix} alt="bghjk" width={300} height={100}/>
        </div>
        <div className="merge">
        <h1 className="title">this is first block</h1>
        <p className="description">this is my blog site</p>
        <button className="readMore">Read More</button>
        </div>
      </div>




    </div>
    </div>
  )
}
