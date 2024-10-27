
import Header from "./commonents/header";
import Header2 from "./commonents/header2";
import Blogg from "./Blogitem/page";
import Footer from "./commonents/Footer";

export default function home() {
  return (
    <div className="bg-gradient-to-r from-black to-grey-200 min-h-screen text-white">
       
        <Header/>
        <Blogg />
     
          <Footer/>
       
        
         {/* <Header2/> */}
    </div>
  );
}
