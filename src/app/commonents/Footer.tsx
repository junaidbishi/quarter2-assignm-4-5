
import Link from "next/link"


export default function Footer(){
    return(

<div className="fotter">
        <footer >
                <nav className="flex justify-center flex-wrap gap-6 text-slate-600 font-medium bg-gradient-to-r from-black to-grey-100 ">
                <a  className="hover:text-cyan-500 text-amber-400" href="/">career</a>
                <a  className="hover:text-cyan-500 text-amber-400" href="/">location</a>

            </nav>
            <div className="flex justify-center space-x-6 transition-transform duration-500 ease-in-out transform hover:scale-105">

                <a className="" href="https://facebook.com" target="blank" rel="nofollow">
                <img src="" alt="" />
                </a>
            </div>




        </footer>
    </div>








    )
    





}