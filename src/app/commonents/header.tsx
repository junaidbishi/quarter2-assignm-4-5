
import Image from "next/image";
import Link from "next/link"
import Home from "../Home/page"
import Aboutus from "../Aboutus/page"
import Location from "../Contact-us/page"
import freshfoodsix from "@/app/Public/freshfoodsix.png"

export default function Header(){
    return(
    <div className="header">
    <ul className="headerbuttons" > 
    <div className=" logo">
        <button > <Image src={freshfoodsix} alt={"logo"}  /></button>
        </div>
       
   <Link href={"/"} ><li>   <button className="hover">Home</button></li></Link>
<Link href={"/Aboutus"}><li><button className="hover"> About-us</button></li></Link>
    <Link href={"/Contact-us"}><li><button className="hover">Contact-us</button></li></Link>
  
    </ul>
    
    </div>
    
    
    )
    }