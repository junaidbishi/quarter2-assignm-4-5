
// import Header from "./commonents/header";
// import Blogg from "./Blogitem/page";
import Footer from "./commonents/Footer";
import Home from "./Home/page";


export default function app() {
  return (
    <div className="bg-gradient-to-r from-black to-grey-200 min-h-screen text-white">
        {/* <Header/> */}
        {/* <Blogg /> */}
     <Home/>
          <Footer/>
       
        
         {/* <Header2/> */}
    </div>
  );
}
