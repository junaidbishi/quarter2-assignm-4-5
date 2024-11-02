
// import Header from "./commonents/header";
// import Blogg from "./Blogitem/page";
import Footer from "./commonents/Footer";
import Home from "./Home/page";
import Contactus from "./Contact-us/page";
import Aboutus from "./Aboutus/page";


export default function app() {
  return (
    <div className="bg-gradient-to-r from-black to-grey-200 min-h-screen text-white">
        {/* <Header/> */}
        {/* <Blogg /> */}
     <Home/>
     <Contactus/>
     <Aboutus/>

          <Footer/>
       
        
         {/* <Header2/> */}
    </div>
  );
}
