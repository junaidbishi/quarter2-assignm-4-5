
import Header from "./commonents/header";

import Blogg from "./Blogitem/page";
import Footer from "./commonents/Footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-black to-grey-200 min-h-screen text-white">
       
        <Header/>
        <Blogg />
     
          <Footer/>
       
        
         {/* <Header2/> */}
    </div>
  );
}
