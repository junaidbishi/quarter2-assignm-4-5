import Image from "next/image";
import Header from "../commonents/header";

export default function Aboutus(){
return(
  <div  className="bg-gradient-to-r from-black to-grey-200 min-h-screen text-white">
    <Header/>
    <div className="aboutparent">
      <div className="aboutchild " >
        {/* <div className=" imagecontainerone">
         <Image src={freshone} alt="bghjk" />
        </div> */}
        <div className="merge">
        <h1 className="title">Our Mission</h1>
        <h2><p className="description"><span className="deepink">we improves our customer complain lor</span></p></h2>
        {/* <button className="readMore">Read More</button> */}
        </div>
      </div>
      </div>
      </div>


)


}